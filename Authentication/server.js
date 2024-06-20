const express=require("express");
const bodyParser=require('body-parser');
const fs=require("fs");
var app=express();
app.use(bodyParser.json());
var fileName = "credential.json";

app.get('/',(req,res)=>{
    var htmlstring="<h1>welcome to hr application</h1>"+
    "<hr/>"+
    "<ol>"+
    "<li>about us</li>"+
    "<li>contact us</li>"+
    "</ol>";
    res.send(htmlstring);
});

app.get("/api/hello",(req,res)=>{
    res.send("<h1>hello from server</h1>");
});

app.get("/api/people",(req,res)=>{
    fs.readFile(fileName,(err,data)=>{
        var members=JSON.parse(data.toString());
        res.send(members);
    });
});


app.post("/api/login", (req, res) => 
    {
      let url = req.url;
      let getData = req.body;
      var fileName = "credential.json";
    
        fs.readFile(fileName, (err, data) => 
        {
            var people = JSON.parse(data.toString());
            var yourdata = people.find((member) => member.email == getData.email && member.password == getData.password );
            console.log(yourdata);
            if (yourdata ) 
            {
                res.send("welcome " + yourdata.email);
            } 
            else 
            {
                res.send("Invalid user");
            }
        });
    });



app.post("/api/insertCredential", (req, res) => {
    let url = req.url;
  let getData = req.body;
    fs.readFile(fileName,(err,data)=>{
      var people=JSON.parse(data.toString());
      people.push(getData);
      var jsonData=JSON.stringify(people);
      fs.writeFile(fileName,jsonData,()=>{
          console.log("your data insert successfully");
      })
    });
});

app.listen(2700);
console.log("server is listening at port number 2700");