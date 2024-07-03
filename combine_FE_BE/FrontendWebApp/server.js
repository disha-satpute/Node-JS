const express = require('express');


const app = express();

//for accessing data in public folder directly
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("index.html");
})

app.listen(7000,()=>{
    console.log("Website is hosted on webserver on 7000 port");
})