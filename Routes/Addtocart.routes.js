const express=require("express");
const { CartModel } = require("../model/addtocart.model");

const cartRouter=express.Router()



cartRouter.get("/", async (req, res) => {

    try {
        const cartdata = await CartModel.find();
        res.send(cartdata);
    } catch (error) {
        res.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
    }
});


cartRouter.post("/addtocart", async (req, res) => {
    const payload = req.body;

    try {
        const cartdata = new CartModel(payload);
        await cartdata.save();
        res.send({ "Message": "Item Successfully Added Into The Cart!" });
    } catch (err) {
        res.send({ "Message": "Cannot able to add the data to cart", "Err": err.message });
    }

});



cartRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await CartModel.findByIdAndDelete({ _id: ID });
        res.send({ "Message": `Cart Item of id: ${ID} is successfully deleted from cart` });
    } catch (err) {
        res.send({ "Message": "Cannot able to get the cart data", "Err": err.message });
    }
})


module.exports={
    cartRouter
}