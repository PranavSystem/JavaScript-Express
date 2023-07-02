var mysql=require("mysql");

//create db connection
const mysqlConnection=mysql.createConnection({
    "host":"127.0.0.1",
    "port":"3306",
    "user":"root",
    "password":"Pranav123",
    "database":"wpt"
})

//connect to db
mysqlConnection.connect(function(err){
    if(err)
        console.log("connection failed");
    else
        console.log("connection successful");
})

module.exports=mysqlConnection;