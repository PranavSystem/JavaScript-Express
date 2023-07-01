var mysql=require("mysql")

//create connection
const mysqlconnection=mysql.createConnection({
    "host" : "127.0.0.1",
    "user" : "root",
    "password" : "Pranav123",
    "database" : "wpt",
    "port" : "3306"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("Connection failed "+JSON.stringify(err));
    }
    else{
        console.log("Connection successful");
    }
})

module.exports=mysqlconnection;