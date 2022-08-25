const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new  mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : {
        type : String,
        required : "Username can't be empty",
        
    },
    email : {
        type : String,
        required : "Email can't be empty",
        unique : true
    },
    password : {
        type : String,
        required : "Password can't be empty",
        minlength: [4,"Password must be atleast 4 characters long"]
    },
    phone : {
        type : Number,
        required : "Mobile Number can't be empty",
        minlength: [10,"Mobile Number must be atleast 10 characters long"],

        unique : true
        
    },
    userType : String,
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }],
    cartProducts : [{
        cartProduct:{
            type : String
        },
        countVal:{
            type : Number
        }
    }]
})

// email validation
userSchema.path('email').validate(val=>{
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return emailRegex.test(val);

},'Invalid Email..')

// generating tokens
userSchema.methods.generateAuthToken = function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY,{
            expiresIn:'24h'
        })
        this.tokens = this.tokens.concat({token : token})
        // this.save();
        return token;
    }
    catch(error){
        return res.status(500).json({
            message : 'this is our page'
        })
    }
}

// user methods
userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}





// userSchema.plugin(uniqueValidator, {message : 'username already in use'})

module.exports = mongoose.model('Users',userSchema)