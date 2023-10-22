const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const userRouter= require("./routes/user-routes");
const app = express();

app.use("/users",userRouter);
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://test:${process.MONGOOSE_PASSWORD}@cluster0.4pek4xr.mongodb.net/`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("listening to port 3000 http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
