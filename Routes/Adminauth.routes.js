//....................................................IMPORTS.....................................................................//

const express=require("express")
const {UserModel}=require("../model/User.model")
const AdminauthRouter=express.Router();


//...............................................................USER GET ..........................................................//


AdminauthRouter.get("/",async(req,res)=>{
    try{
        const users= await UserModel.find({})
        res.send(users)
    }catch(err){
        res.send([])
        // res.send({"err":err.message})
    }
})


//........................................................USER DELETE REQUEST ........................................................//

AdminauthRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await UserModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"User has been deleted."})
    }catch(err){
        res.send({"err":err.message})
    }

})


//.....................................................ADMIN AUTH REQUEST...........................................................//

module.exports={
    AdminauthRouter
}