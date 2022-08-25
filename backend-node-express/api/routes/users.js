const express = require('express');
const router = express.Router();
const User = require('../model/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/check-auth')

const cookieParser = require('cookie-parser');

const cookie = express();
cookie.use(cookieParser())

// to get user details to data base

router.get('/',auth,(req,res,next)=>{
    res.status(200).json({
        message : 'this is users get request'
    })
})



// for user sign up
// to save user details to data base



router.post('/signup',(req,res,next)=>{
    
   
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error : err
                    })
                }
                else{
                    const user = new User({
                        _id : new mongoose.Types.ObjectId,
                        username : req.body.username,
                        email : req.body.email,
                        password : hash,
                        phone : req.body.phone,
                        userType : req.body.userType
                    })
                    
                    user.save()
                    
                    .then(result=>{
                        
                        res.status(200).json({
                            new_user : result
                        })
                    })
                    .catch(err=>{
                        // if(err.code ==11000){
                        //     res.status(422).send('Duplicate Email address found.')
                        // }
                        // else
                        // return next(err);
                        
                        res.status(500).json({
                            
                            message : err
                        })
                    })
                }
            })   
})




// for user sign in

router.post('/login',(req,res,next)=>{
    
    User.find({email : req.body.email})
    .exec()
    .then(user =>{
        if(user.length < 1){
            
            return res.status(401).json({
                message : 'user does not exist'
            })
        }
        
        bcrypt.compare(req.body.password, user[0].password,(err,result)=>{
            if(!result){
                
                return res.status(401).json({
                    message : 'Incorrect Password'
                })
            }
            if(result)
            {
                const token = user[0].generateAuthToken();
                // console.log(token)
                user[0].save();
                res.status(200).json({
                    username : user[0].username,
                    userType : user[0].userType,
                    email : user[0].email,
                    phone : user[0].phone,
                    token : token,
                    
                    message : 'Login Successful'
                })
            }
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
})

// to logout from the user account

router.get('/logout',auth,(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    const verify = jwt.verify(token,"this is dummy text");
    
    User.find({_id : verify._id})
    .exec()
    .then(user =>{
        
        const tokens = user[0].tokens
        
        
        const index = tokens.findIndex(object =>{return object.token = token});
        
        
    
        user[0].tokens.splice(index,1);
   
        
        user[0].save();
        
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })

       
       res.status(200).json({
        message:'logout successfull'
       })
    
})

//for logged in or not
router.post('/loggedIn',(req,res,next)=>{
    
    const verify = jwt.verify(req.body.userToken,process.env.SECRET_KEY);
    
    User.find({_id : verify._id})
    .exec()
    .then(async (user) =>{
        
        if(user[0] && user[0]._id == verify._id)
        {
           
            return res.status(200).json({
                username : user[0].username,
                loggedIn : false
            })
        }
        

        
    })
})


module.exports = router