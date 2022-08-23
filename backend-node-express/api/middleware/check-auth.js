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
        if(!req.headers.authorization){
            return res.status(401).json({
                message:'Unauthorized Request'
            })
        }
        const token = req.headers.authorization.split(' ')[1];
        
        if(token === null)
        return res.status(401).json({
            message:'Unauthorized Request'
        });
        const payload = jwt.verify(token,'this is dummy text');
        
        if(!payload)
        return res.status(401).json({
            message:'Unauthorized Request'
        })
        
        next();
    }
    catch(error){
        console.log(error)
        return res.status(401).json({
            message : "Invalid Token"
        })
    }
}