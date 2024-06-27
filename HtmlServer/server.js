const express = require('express')
const bodyparser =require('body-parser')
const fs=require("fs");


const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",(req,res)=>{
   res.sendFile("index.html");
});


var fileName = "credential.json";
app.post("/api/login", (req, res) =>
    {
      let getData = req.body;
      var folderpath = "D:/TAP/MERN Stack/HtmlServer/public";
        fs.readFile(fileName, (err, data) => 
        {
            var people = JSON.parse(data.toString());
            var yourdata = people.find((member) => member.email == getData.email && member.password == getData.password );
            console.log(yourdata);
            if (yourdata)
            {

                res.sendFile("welcome.html",{root :folderpath});
            }
            else
            {
                res.sendFile("login.html",{root :folderpath});

            }
        });
    });

    app.post("/api/register",(req,res)=>
        {
            let userData=req.body;
            var fileName = "credential.json";
            fs.readFile(fileName,(err,data)=>{
                let str=data.toString();            //get data from body 
                let credentials=JSON.parse(str);       //parse into json array
                credentials.push(userData);      //push data received from body  into json array
                let string1=JSON.stringify(credentials);   //write json array into file
                fs.writeFile(fileName,string1,()=>{
                    {
                        res.sendFile("register.html",{root :folderpath});
                    };
        
                });
            });
        });

app.get("/api/hello",(req,res)=>{
   let person ={"name":"disha satpute",
                "city":"pune"
   };
    res.send(person);
});

app.listen(2800,()=>{
    console.log("server is running on 2800 port");
})