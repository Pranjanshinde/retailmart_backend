const express=require("express");
const { MenswearModel } = require("../model/menswear.model");

const menswearRouter=express.Router()



menswearRouter.get("/",async(req,res)=>{
    const query=req.query;
    try{
        const products= await MenswearModel.find(query)
        res.send(products)
    }catch(err){
        res.send({"err":err.message})
    }
})
menswearRouter.get("/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const product= await MenswearModel.findById({_id:id})
        res.send(product)
    }catch(err){
        res.send({"err":err.message})
    }
})


menswearRouter.post("/create",async(req,res)=>{
    const {category,img,title,subtitle,price,details,size,userid}=req.body;

        try{
            const new_Product=new MenswearModel({category,img,title,subtitle,price,details,size,userid})
            await new_Product.save()
            res.send({"msg":"new product added successfully"})

        }
        catch(err){
            res.send({"err":err.message})
        }
});

menswearRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await MenswearModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"User has been deleted."})
    }catch(err){
        res.send({"err":err.message})
    }

})





module.exports={
    menswearRouter
}