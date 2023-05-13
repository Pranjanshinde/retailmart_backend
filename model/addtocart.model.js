const mongoose=require("mongoose");


const cartSchema=mongoose.Schema({
    category:{type:String},
    img:{type:String},
    title:{type:String},
    subtitle:{type:String},
    price:{type:Number},
    details:{type:String},
    size:{type:String},
    userid:{type:String}
})

const CartModel=mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}