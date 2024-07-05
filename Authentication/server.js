//modules

const express=require("express");
const bodyParser=require('body-parser');
const fs=require("fs");


var app=express();

//middleware configuration
app.use(bodyParser.json());

var fileName = "credential.json";
var fileName2="data.json";

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
    fs.readFile(fileName2,(err,data)=>{
        var members=JSON.parse(data.toString());
        res.send(members);
    });
});

app.delete("/api/people/:id",(req,res)=>
    {
        var fileName2="data.json";
        var dataToBeDelete=req.params.id;
        fs.readFile(fileName2,(err,data)=>
        {
            var members=JSON.parse(data.toString());
            members = members.filter((person) => person.id != dataToBeDelete);
            var deletedata=JSON.stringify(members);
            fs.writeFile(fileName2,deletedata,()=>
            {
                res.send("data deleted successfully..");
            })

        })
    })

    //update data of REST API
    app.put("/api/people/:id",(req,res)=>{
        var dataToBeUpdate=req.params.id;
        fs.readFile(fileName2,(err,data)=>
        {
            var members=JSON.parse(data.toString());
            members = members.filter((person) => person.id != dataToBeUpdate);
            var urldata = req.body;
            members.push(urldata);
            var updatedata=JSON.stringify(members);
            fs.writeFile(fileName2,updatedata,()=>
            {
                res.send("data updated successfully..");
            })
    
        })
    })

    //authenication of REST API
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


    //add data in REST API
app.post("/api/register",(req,res)=>
{
    let userData=req.body;
    fs.readFile(fileName,(err,data)=>{
        let str=data.toString();            //get data from body 
        let credentials=JSON.parse(str);       //parse into json array
        credentials.push(userData);      //push data received from body  into json array
        let string1=JSON.stringify(credentials);   //write json array into file
        fs.writeFile(fileName,string1,()=>{
            res.send("new user added..");

        });
    });
});

// add data

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