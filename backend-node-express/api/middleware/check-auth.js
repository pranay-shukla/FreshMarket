const jwt = require('jsonwebtoken');
// const { resolveTypeReferenceDirective } = require('typescript');
// function authenticateToken(req,res,next){
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(' ')[1];

//     if(token == null) return res.sendStatus(401);

//     jwt.verify(token,"this is dummy text", (err,user)=>{
//         if(err)
//         return res.sendStatus(403)
//         req.user = user;
//         next();
//     })
// }
module.exports = (req,res,next)=>{
    
    try{
        
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const verify = jwt.verify(token,'this is dummy text')
        req.token = token
        next();
    }
    catch(error){
        console.log(error)
        return res.status(401).json({
            message : "Invalid Token"
        })
    }
}