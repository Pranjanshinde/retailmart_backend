//....................................................IMPORTS.....................................................................//

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminModel } = require("../model/Admin.model");

const adminRouter = express.Router();

//.....................................................ADMIN LOGIN...................................................................//

adminRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
    const admin = await AdminModel.findOne({ email });
    if (admin) {
        bcrypt.compare(password, admin.password, (err, result) => {
        if (result) {
            const token = jwt.sign({ adminID: admin._id }, "RetailCity");
            res.send({ msg: "Login Succesfull!!", token: token });
        } else {
            res.send({ msg: "Incorrect Email Id and Password" });
        }
    });
    } else {
        res.send({ msg: "Incorrect Email Id and Password" });
    }
} catch (err) {
    res.send({ err: err.message });
}
});


//.................................................ADMIN ROUTER EXPORTS..............................................................//

module.exports = {
    adminRouter,
};
