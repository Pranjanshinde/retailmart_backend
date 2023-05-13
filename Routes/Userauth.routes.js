const express=require("express");
const { LadiesWearModel } = require("../model/Ladieswear.model");

const UserauthRouter=express.Router()


UserauthRouter.post("/create",async(req,res)=>{
    const {category,img,title,subtitle,price,details,size,userid}=req.body;

        try{
            const new_Product=new LadiesWearModel({category,img,title,subtitle,price,details,size,userid})
            await new_Product.save()
            res.send({"msg":"new product added successfully"})

        }
        catch(err){
            res.send({"err":err.message})
        }
})



UserauthRouter.patch("update/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const product= await LadiesWearModel.findByIdAndUpdate({_id:id},req.body)
        res.send(product)
    }catch(err){
        res.send({"err":err.message})
    }
})
UserauthRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const product= await LadiesWearModel.findByIdAndDelete({_id:id})
        res.send(product)
    }catch(err){
        res.send({"err":err.message})
        res.send({"err":err.message})
    }
})

module.exports={
    UserauthRouter
}