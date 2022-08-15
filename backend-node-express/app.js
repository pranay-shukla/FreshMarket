const express = require('express');
const app = express();
const usersRoute = require('./api/routes/users')
const productsRoute = require('./api/routes/products')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

 mongoose.connect('mongodb+srv://SP:NumeratorPS0609@freshmarket.mwxnil8.mongodb.net/?retryWrites=true&w=majority')
 mongoose.connection.on('error', err =>{
    console.log('conection failed')
 })

 mongoose.connection.on('connected',connect =>{
    console.log('conected with database')
 })

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/products',productsRoute)
app.use('/users',usersRoute)


app.use((req,res,next)=>{
    res.status(404).json({
        error : 'url not found'
    })
})
module.exports = app