const express = require('express')
const router = express.Router()
const User = require('../model/user')
const Product = require('../model/products')
const jwt = require('jsonwebtoken')
const user = require('../model/user')



const productInCart = (user,productId) =>{
    
         const cartProducts = user.cartProducts.find(object =>{return object.cartProduct == productId})
            
            if(cartProducts && cartProducts.cartProduct === productId)
            return ("true");
            else 
            return ("false")
        
    
}
// FOR adding the product id in to users cart
router.post('/add',(req,res,next)=>{
    
    const verify = jwt.verify(req.body.userToken,process.env.SECRET_KEY);
    
    User.find({_id : verify._id})
    .exec()
    .then(async (user) =>{
        
        if((await productInCart(user[0],req.body.productId)) === "true")
            {
                return res.status(200).json({
                    message : "Product is already present in cart"
                })
            }
        else{
            user[0].cartProducts = user[0].cartProducts.concat({cartProduct : req.body.productId,countVal: req.body.countVal})
            user[0].save();
        
        return res.status(200).json({
            message : 'Product Added successfully'
        })
        }
        
        
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })

})

//for removing the product id from users cart
router.post('/remove',(req,res,next)=>{
    
    const verify = jwt.verify(req.body.userToken,process.env.SECRET_KEY);
    
    User.find({_id : verify._id})
    .exec()
    .then(user =>{
        const cartProducts = user[0].cartProducts;
        
        
        const index = cartProducts.findIndex(object =>{return object.cartProduct == req.body.productId});
        
        
    
        user[0].cartProducts.splice(index,1);
   
        
        user[0].save();
        res.status(200).json({
            message : 'Product Removed successfully'
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
})



const product = (productId)=>{
    return new Promise((resolve,reject)=>{
        Product.find({_id : productId})
            .exec()
            .then(product=>{
                resolve(product[0]) 
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error : err
                })
            })
    })
}


const productinfo = async (cartProductsId) =>{
    const productCart = [];
    const countProduct = [];

        for(let i = 0;i<cartProductsId.length;i++){
            const productId =cartProductsId[i].cartProduct;
            let productInfo = await product(productId);
            productCart.push(productInfo);
            countProduct.push(cartProductsId[i].countVal);
          }
          
          
          
    return [productCart,countProduct]
}

//for getting all cart product and their count value
router.post('/getAllCartProducts', (req,res,next)=>{
    const verify = jwt.verify(req.body.userToken,process.env.SECRET_KEY);
    User.find({_id : verify._id})
    .exec()
    .then(async (user) =>{
        
        const cartProductsId = user[0].cartProducts;
        let productCartDetails = await productinfo(cartProductsId);
        

        res.status(200).json({
            productCart : productCartDetails[0],
            countProduct : productCartDetails[1]
        })
    })


})

router.post('/updateCount',(req,res,next)=>{
    const verify = jwt.verify(req.body.userToken,process.env.SECRET_KEY);
    User.find({_id : verify._id})
    .exec()
    .then(async (user) =>{
        const index = user[0].cartProducts.findIndex(object =>{return object.cartProduct == req.body.productId})
        
        
        user[0].cartProducts[index].countVal = req.body.countVal;
        
        user[0].save();
        res.status(200).json({
            message : "Count Updated successfully"
        })
    })
})






module.exports = router