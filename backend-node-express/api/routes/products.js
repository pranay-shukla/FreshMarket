const express = require('express')
const router = express.Router();
const Product = require('../model/products')
const mongoose = require('mongoose')




//to get whole data

router.get('/',(req,res,next)=> {
    Product.find()
    .then(result=>{
        res.status(200).json({
            productsData : result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
    // res.status(200).json({
    //     message:'this is products get request'
    // })
})




// to get the data from id


router.get('/:id',(req,res,next)=>{
    // console.log(req.params.id)
    Product.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
})




// to save data in data base

router.post('/',(req,res,next)=>{
    const product = new Product({
        _id : new mongoose.Types.ObjectId,
        "title": req.body.title,
        "type": req.body.type,
        "description": req.body.description,
        "filename": req.body.filename,
        "height": req.body.height,
        "width": req.body.width,
        "price": req.body.price,
        "rating": req.body.rating,
        "brand" : req.body.brand
    })
    product.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            newProduct : result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
    // console.log(req.body)
    // res.status(200).json({
    //     message:'this is products post request'
    // })
})


// to delete data from database

router.delete('/:id',(req,res,next)=>{
    Product.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'product deleted',
            result : result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})




// to update data by put request


router.put("/:id",(req,res,next)=>{
    Product.findOneAndUpdate({_id : req.params.id},{
        $set:{
        "title": req.body.title,
        "type": req.body.type,
        "description": req.body.description,
        "filename": req.body.filename,
        "height": req.body.height,
        "width": req.body.width,
        "price": req.body.price,
        "rating": req.body.rating,
        "brand" : req.body.brand

        }
    })
    .then(result=>{
        res.status(200).json({
            message: 'Product Updated',
            'prouct which has been updated' : result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})


module.exports = router