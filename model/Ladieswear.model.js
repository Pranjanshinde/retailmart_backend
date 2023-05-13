const mongoose=require("mongoose");


const ladiesWearSchema=mongoose.Schema({
    category:{type:String,required:true},
    img:{type:String,required:true},
    title:{type:String,required:true},
    subtitle:{type:String,required:true},
    price:{type:Number,required:true},
    details:{type:String,required:true},
    size:{type:String,required:true},
    userid:{type:String}
},{
    versionKey:false
})

const LadiesWearModel=mongoose.model("ladieswear",ladiesWearSchema)

module.exports={
    LadiesWearModel
}