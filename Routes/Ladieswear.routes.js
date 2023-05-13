const express=require("express");
const { LadiesWearModel } = require("../model/Ladieswear.model");

const ladieswearRouter=express.Router()

// ladieswearRouter.post("/create",async(req,res)=>{
//     const {category,img,title,subtitle,price,details,size,userid}=req.body;

//         try{
//             const new_Product=new LadiesWearModel({category,img,title,subtitle,price,details,size,userid})
//             await new_Product.save()
//             res.send({"msg":"new product added successfully"})

//         }
//         catch(err){
//             res.send({"err":err.message})
//         }
// })


ladieswearRouter.get("/",async(req,res)=>{
    const query=req.query;
    try{
        const products= await LadiesWearModel.find(query)
        res.send(products)
    }catch(err){
        res.send({"err":err.message})
    }
})
ladieswearRouter.get("/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const product= await LadiesWearModel.findById({_id:id})
        res.send(product)
    }catch(err){
        res.send({"err":err.message})
    }
})
ladieswearRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await LadiesWearModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"User has been deleted."})
    }catch(err){
        res.send({"err":err.message})
    }

})




module.exports={
    ladieswearRouter
}