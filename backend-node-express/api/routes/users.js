const express = require('express');
const router = express.Router();
const User = require('../model/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// to get user details to data base

router.get('/',(req,res,next)=>{
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
                // console.log(result)
                res.status(200).json({
                    new_user : result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    
                    error : err
                })
            })
        }
    })
    // res.status(200).json({
    //     message : 'this is users post request'
    // })
})



// for user sign in

router.post('/login',(req,res,next)=>{
    User.find({username : req.body.username})
    .exec()
    .then(user =>{
        if(user.length < 1)
        return res.status(401).json({
            message : 'user does not exist'
        })
        bcrypt.compare(rq.body.password, user[0].password,(err,result)=>{
            if(!result){
                return res.status.apply(401).json({
                    message : 'Invalid Password'
                })
            }
            if(result)
            {
                const token = jwt.sign({
                    username : user[0].username,
                    userType : user[0].userType,
                    email : user[0].email,
                    phone : user[0].phone
                },'this is dummy text',{
                    expiresIn : '24h'
                })
                res.status(200).json({
                    username : user[0].username,
                    userType : user[0].userType,
                    email : user[0].email,
                    phone : user[0].phone,
                    token : token
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

module.exports = router