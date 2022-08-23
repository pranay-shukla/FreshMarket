// require('./config/passportConfig')
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const unless = require('express-unless')

const app = express();


const usersRoute = require('./api/routes/users')
const productsRoute = require('./api/routes/products')
const cartRoute = require('./api/routes/cart')

const auth = require('./api/middleware/check-auth')





const cors = require('cors')
// const passport  = require('passport')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

 mongoose.connect(process.env.UNAME)
 mongoose.connection.on('error', err =>{
    console.log('conection failed')
 })

 mongoose.connection.on('connected',connect =>{
    console.log('conected with database')
 })
 
// auth.authenticateToken.unless = unless;
// app.use(
//     auth.authenticateToken.unless({
//         path:[
//             { url : '/users/login', methods : ["POST"]},
//             { url : '/users/signup', methods : ["POST"]}
//         ]
//     })
// )

app.use(cors())

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({extended : false}));

// app.use(passport.initialze())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.send('welcome to a simple HTTP cookie server');
// });

// app.get('/setcookie', (req, res) => {
//     res.cookie(`Cookie token name`,`encrypted cookie string Value`);
//     res.send('Cookie have been saved successfully');
// });
// app.get('/getcookie', (req, res) => {
//     //show the saved cookies
//     console.log(req.cookies)
//     res.send(req.cookies);
// });





app.use('/cart',cartRoute)
app.use('/products',productsRoute)
app.use('/users',usersRoute)

//error handler
app.use((err,req,res,next)=>{
    if(err.name ==='validationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key=>{
            valErrors.push(err.errors[key].message)
            
        })
        res.status(422).send(valErrors)
    }
    res.status(404).json({
        error : 'url not found'
    })
})
module.exports = app