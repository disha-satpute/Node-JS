const mysql = require('mysql2');

var conuri ={
    host : "localhost",
    user : "root",
    password: "password",
    database :"netbanking"
}
var conn=mysql.createConnection(conuri);
conn.connect((err)=>{
    if(!err){
        console.log("connection established");
    }
    else{
        console.log(err);
    }
});