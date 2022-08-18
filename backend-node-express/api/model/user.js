const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new  mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : {
        type : String,
        required : true,
        
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
        
    },
    userType : String,
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
})

// generating tokens
userSchema.methods.generateAuthToken = function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
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

// userSchema.plugin(uniqueValidator, {message : 'username already in use'})

module.exports = mongoose.model('Users',userSchema)