const fileName = "data.json";
const fs = require('fs');


var getAll= function(){
    fs.readFile(fileName,(err,data) => {
        let members=JSON.parse(data.toString());
        console.log(members);
    })
};
getAll();

var getById=function(Id){
    fs.readFile(fileName,(err,data)=>{
    let members = JSON.parse(data.toString());
    var foundPerson=members.find((person)=>(person.id==Id));
    console.log(foundPerson);
    })
};
getById(3);

var getByName=function(Name){
    fs.readFile(fileName,(err,data)=>{
    let members = JSON.parse(data.toString());
    var foundPerson=members.find((person)=>(person.Pname==Name));
    console.log(foundPerson);
    })
};
getByName("Disha");

var remove= function(){
    
}