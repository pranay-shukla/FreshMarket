const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const user = require('../model/user')

router.post('/add',(req,res,next)=>{
    
    const verify = jwt.verify(req.body.userToken,"this is dummy text");
    
    User.find({_id : verify._id})
    .exec()
    .then(user =>{
        console.log(user[0])
        user[0].cartProducts = user[0].cartProducts.concat({cartProduct : req.body.productId})
        user[0].save();
        console.log(user[0]);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })

})
module.exports = router