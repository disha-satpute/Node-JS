import express from 'express';
import cors from 'cors';
import routes from  './router.js';


let app=express();

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cors());

 routes(app);

 app.listen(7000,()=>{
    console.log("port 7000 running..");
 })
