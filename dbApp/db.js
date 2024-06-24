const mysql = require('mysql2');
var conUri ={
    host : "localhost",
    user : "root",
    password: "password",
    database :"netbanking"
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

//  check all commands


// let command= 'create table employee(id int primary key auto_increment , name varchar(20) ,contact int(10),email varchar(20),city varchar(20))';
// let command="insert into employee(name,contact,email,city) values('sneha shinde',0987654321,'sneha123@gmail.com','chakan')";
 let command = "select * from employee";
//let command = "select * from employee where id =2";
// let command = "select name,city from employee where id =2";
// let command = "update employee set name='ajinkya' where id =3";
conn.query(command,(err,rows, field)=>{
  let output = JSON.stringify(rows);
  console.log(output);
  if(err){
    console.log(err);
  }
});