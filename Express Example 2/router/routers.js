const express=require("express")
const router=express.Router();
const connection=require("../database/dbconnect")

//find all products
router.get("/productlist",(req,resp)=>{
    connection.query("select * from products",(err,data)=>{
        if(err){
            resp.status(500).send("data not found "+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

//find product via name
router.get("/product/:name",(req,resp)=>{
    connection.query("select * from products where name=?",[req.params.name],(err,data)=>{
        if(err){
            resp.status(500).send("data not found");
        }else{
            resp.send(data);
        }
    })
})

//add new products
router.post("/addnew",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var cost=req.body.cost;
    connection.query("insert into products values(?,?,?)",[id,name,cost],(err,result)=>{
        if(err)
            resp.send("data not added"+JSON.stringify(err));
        else{
            if(result.affectedRows>0)
                resp.send("products added successfully");
            else
                resp.send("products addition failed");
        }
    })
})

//delete by cost
router.delete("/removeprdts/:cost",(req,resp)=>{
    connection.query("delete from products where cost=?",[req.params.cost],(err,result)=>{
        if(err)
            resp.status(500).send("data not found "+JSON.stringify(err));
        else
            if(result.affectedRows>0)
                resp.send("{'mesg':'deletion successful'}");
            else
                resp.send("{'mesg':'deletion failed'}");
    })
})

module.exports=router;