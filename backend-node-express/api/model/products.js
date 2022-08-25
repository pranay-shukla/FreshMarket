const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "title": String,
    "type": String,
    "description": String,
    "filename": String,
    "height": Number,
    "width": Number,
    "price": Number,
    "rating": Number,
    "brand" : String
})

// generating tokens
// userSchema.methods.generateAuthToken = function(){
//     try{
//         const token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
//         this.tokens = this.tokens.concat({token : token})
//         // this.save();
//         return token;
//     }
//     catch(error){
//         return res.status(500).json({
//             message : 'this is our page'
//         })
//     }
// }

// //for obtaining product info
// productSchema.methods.getDetails = function(){
//     try{
//         Product.find({_id : this.id})
//         .then(product=>{
//             console.log(product[0])
//             productCart.push(product[0]);
            
//         })
//         .catch(err=>{
//             console.log(err)
//             res.status(500).json({
//                 error : err
//             })
//         })
//     }
//     catch{

//     }
// }
module.exports = mongoose.model('Products',productSchema)