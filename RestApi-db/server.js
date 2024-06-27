const express = require('express');
const routes= require('./router');

 const app=express();

 //middleware configuration
 //app.use(express.urlencoded({extended:true}));
 //app.use(express.json);

 app.get('/',(req,res)=>{
    res.send("welcome");
 })
 routes(app);
 //listen st port 3800
 app.listen(3800,()=>{
    console.log("listen at port 3800");
 });