//import libraries
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/routers");

//add middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

//add url handler
app.use("/",router)

//start server
app.listen(3003,function(){
    console.log("connection established at port 3003")
})

module.exports=app;