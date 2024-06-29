const { urlencoded } = require('body-parser');
const express = require('express');
const jwt = require("jsonwebtoken");

const secretKey="disha1234";

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/api/orders",(req,res)=>{
    let authkey = "authorization";
    let token= req.header(authkey);
    let data=jwt.verify(token,secretKey);

    if(data.client == "disha2@gmail.com"){
        let orders = [
            {"id":101,"date":"20/02/2022","price":2300,"status":"processed"},
            {"id":102,"date":"02/04/2022","price":2300,"status":"rejected"},
            {"id":103,"date":"25/04/2022","price":2300,"status":"processed"},
            {"id":104,"date":"10/11/2022","price":2300,"status":"completed"},
            {"id":105,"date":"29/12/2022","price":2300,"status":"processed"},
        ];
        res.send(orders);
    }
    else{
        res.send("error");
    }
});

app.get("/api/login",(req,res)=>{
    let user = req.body;
    try{
    if(user.email==="disha2@gmail.com" && user.password==="disha"){
        let data ={
            "time": Date(),
            "client":user.email
        };
        let token = jwt.sign(data,secretKey);
      res.status(200).send(token);
    }
    else{
        res.status(100).send("error");
    }
}
    catch{
         res.send("error");
    }
});

app.listen(7000,()=>{
    console.log("running...");
});