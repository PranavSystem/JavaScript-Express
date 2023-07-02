//import library and modules
const express=require("express");
const app=express();
const router=require("./router/routers");
const bodyparser=require("body-parser");

//add middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

//add url handler
app.use("/",router);

//start server
app.listen("3005",function(){
    console.log("connected at port 3005");
})

module.exports=app;