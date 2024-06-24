const sql=require('../models/db');

exports.getAll=(req, res)=>{  
    let command="SELECT * FROM employee";
    sql.query(command,(err, rows, fields)=>{
        var row1= JSON.stringify(rows);
        res.send(row1);
    })
};

exports.insert=(req,res)=>{
    let command ="insert into employee (name,contact,email,city) values('siddhesh rakshe', 1234567898,'siddhu2@gmail.com','pune')";
    sql.query(command,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        var member=rows;
        res.send(member);
      
    });
}

exports.update=(req,res)=>{
    let command ="update employee set name='sarthak' where id=2";
    sql.query(command,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        var member=rows;
        res.send(member);
      
    });
}
exports.delete=(req,res)=>{
    let command ="delete from employee where id=11 ";
    sql.query(command,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        var member=rows;
        res.send(member);
    });
}