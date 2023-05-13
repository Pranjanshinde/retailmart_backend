const jwt = require("jsonwebtoken");

const adminAuth=async(req,res,next)=>{
    const token=req.headers.authorization;
    console.log(token);
    if(token){
        try{
            const decoded= jwt.verify(token,"RetailCity");
            console.log(decoded);
            next()
        }catch(err){
            res.send({"err":err.message})
        }
    }
    else{
        res.send({"msg":"Please Login first!!"})
    }
}

module.exports={
    adminAuth
}