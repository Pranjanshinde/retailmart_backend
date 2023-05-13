const jwt = require('jsonwebtoken')

const userauth=(req,res,next)=>{
    const token = req.headers.authorization;
    console.log(token)
    if(token){
        try{
            const decoded=jwt.verify(token,"RetailCity")
            if(decoded){
                req.body.userid=decoded.userID
                next()
            }
        }catch(err){
            res.status(200).send({"err":err.message})
        }
    }
    else{
        res.status(200).send({"msg":"Please Login"})
    }
}


module.exports={
    userauth
}