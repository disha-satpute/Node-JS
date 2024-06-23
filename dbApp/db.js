const mysql = require('mysql');
var conUri ={
    host : "localhost",
    user : "root",
    password: "password",
}
const conn= mysql.createConnection(conUri);
conn.connect((err)=>{
  if(!err){
    console.log("connection established successfully");
  }
  else{
    var str = JSON.stringify(err);
    console.log(str);
  }
});