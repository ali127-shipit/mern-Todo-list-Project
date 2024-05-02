const express = require("express");
const mongoose  = require("mongoose");
const dotenv= require("dotenv")
const router = require("./routers/TodoRouters")

dotenv.config();
const app = express();
const  Port = process.env.PORT;

app.use(express.json())

app.use("/" , (req,res,next)=>{
    console.log(req.path);
    console.log(req.method)
    next();
})

app.use(router)

mongoose.connect(process.env.DB_URL)
.then(()=>{
   app.listen(Port , ()=>{
    console.log(`server connected to the database & listenning on port ${Port}`);
}) 
})
.catch((err)=>{
    console.log(err)
})



