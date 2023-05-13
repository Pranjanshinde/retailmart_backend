const express = require("express");
const cors = require("cors");
const connection = require("./db.js");
const { userRouter } = require("./Routes/User.routes.js");
const { adminRouter } = require("./Routes/Admin.routes.js");
const { AdminauthRouter } = require("./Routes/Adminauth.routes.js");
const { adminAuth } = require("./middleware/adminauth.middleware.js");
const { ladieswearRouter } = require("./Routes/Ladieswear.routes.js");
const { userauth } = require("./middleware/userauth.middleware.js");
const { cartRouter } = require("./Routes/Addtocart.routes.js");
const { UserauthRouter } = require("./Routes/Userauth.routes.js");
const { menswearRouter } = require("./Routes/Menswear.routes.js");
;

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/admin",adminRouter);
app.use("/adminauth",AdminauthRouter)
app.use("/ladieswear",ladieswearRouter)
app.use("/menswear",menswearRouter)
app.use("/userauth",userauth,UserauthRouter)
app.use("/cart",userauth,cartRouter)


// app.use("/userauth",UserauthRouter)



app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(`Server is running at port ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});
