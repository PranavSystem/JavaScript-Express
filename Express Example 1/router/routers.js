const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect");

//find all employees
router.get("/allemployees",function(req,resp){
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
router.get("/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err)
            resp.status(500).send("data not found");
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
router.post("/addemployee",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added");
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'Employee added'}")
            }
            else
                resp.send("{'msg':'empl not added'}")
        }
    })
})

//edit employee details via empid
router.put("/employees/:empid",(req,resp)=>{
    var ename=req.body.ename;
    var sal=req.body.sal;
    var empid=req.body.empid;
    connection.query("update employee set ename=? , sal=? where empid=?",[ename,sal,empid],(err,result)=>{
        if(err){
            resp.status(500).send("data not updated ");
        }else{
            if(result.affectedRows>0)
                resp.send("{mesg:employee deatils updated}");
            else
                resp.send("{'mesg':'employee deatils update failed'}");
        }
    })
})

//delete employee with id
router.delete("/emps/:empid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>{
     if(err){
        resp.send("data not deleted");
     }else{
        if(result.affectedRows>0)
            resp.send("{'mesg':'data deleted'}");
        else
            resp.send("{'mesg':'data deletion failed'}");
     }
            
        
    })
})



















module.exports=router;