//....................................................IMPORTS.....................................................................//


const express=require("express")
const {UserModel}=require("../model/User.model")
const userRouter=express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// .........................................................USER REGISTRATION.........................................................//

userRouter.post("/register",async(req,res)=>{
    const {name,city,email,password}=req.body
    try{
        if(name,city,email,password){
            const old_user= await UserModel.findOne({email})
            if(old_user){
                res.send({"msg":"This Email already registered with RetailMart, please register with another Email Id"})
            }
            else{
                bcrypt.hash(password,5,async(err,hash)=>{
                    if(err){
                        res.send({"msg":"cannot able to hash the password"})
                    }
                    else{
                        const new_user= new UserModel({name,city,email,password:hash})
                        await new_user.save()
                        res.send({"msg":"new user successfully added"})
                    }
                })
            }
        }
        else{
            res.send({"msg":"Please fill all Feilds."})
        }
    }
    catch(err){
        res.send({"err":err.message})
    }
})


//..........................................................USER LOGIN...............................................................//


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user= await UserModel.findOne({email});
    
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userID:user._id},"RetailCity")
                    res.send({"msg":"Login Succesfull!!","token":token})
                }
                else{
                    res.send({"msg":"Incorrect Email Id and Password"})
                }
            })
        }
        else{
            res.send({"msg":"Incorrect Email Id and Password"})
        }
    }catch(err){
        res.send({"err":err.message})
    }
})


//............................................................USER ROUTER.............................................................//

module.exports={
    userRouter
}