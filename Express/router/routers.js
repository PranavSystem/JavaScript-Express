const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect");

//find all employees
router.get("/employees",function(req,resp){
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("no data found"+JSON.stringify(err));
        }else{
            //resp.render("index",{empdata:data})
            resp.send(data);

        }
    })
})

//get employee details from empid
router.get("/employeess/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err)
            resp.status(500).send("data not found"+JSON.stringify(err));
        else{
            resp.send(data);
        }
    })
})

//display blank form to user
router.get("./displayaddform",(req,resp)=>{
    resp.render("add-emp");
})

//insert new employee record in table
router.post("/employees/employee/:empid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{
            if(result.affectedRows>0)
                resp.send("{'msg':'Employee added'}")
            else
                resp.send({'msg':'empl not added'})
        }
    })
})

//delete employee with empid
router.delete("/employees/employee/:empid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err));
        }else{
            if(result.affectedRows>0)
                resp.send("{'msg':'Employee deleted'}")
        }    
    })
})

//update employee details
router.put("/employs/employee/:empid",(req,resp)=>{
    connection.query("")
})









module.exports=router;