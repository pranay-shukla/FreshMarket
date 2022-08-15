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
module.exports = mongoose.model('Products',productSchema)