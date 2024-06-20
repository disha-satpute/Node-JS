var fs=require('fs');
//insert, update, delete , get from .json file
//1.insert, update, delete, get from json array (collection operations)
//2.insert, update, delete get from json file  (IO operations)

const fileName="data.json";
var getAll=function(){
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        console.log(members);
    })  
};

var getByName=function(name){ 
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        let foundPerson=members.find((person)=>(person.name ==name));
        console.log(foundPerson);
    })  
};

var getById=function(id){
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        let foundPerson=members.find((person)=>(person.id ==id));
        console.log(foundPerson);
    })  
};

var remove=function(id){
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        members=members.filter((person)=>(person.id !=id));
        let strMembers=JSON.stringify(members);
        fs.writeFile(fileName,strMembers,()=>{
            console.log('file is updated');
            getAll();
        })
    })  
}

var insert=function(person){
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        members.push(person);
        console.log(members);
        let strMembers=JSON.stringify(members);
        fs.writeFile(fileName,strMembers,()=>{
            console.log('file is updated');
            getAll();
        })
    })  
}

var update=function(personTobeUpdated){
    fs.readFile(fileName, (err,data)=>{
        let members=JSON.parse(data.toString());
        members=members.filter((person)=>(person.id !=personTobeUpdated.id));
        members.push(personTobeUpdated);
        let strMembers=JSON.stringify(members);
        fs.writeFile(fileName,strMembers,()=>{
            console.log('file is updated');
            getAll();
        })
    })  
}


//testing functions
getAll();
getById(1);
var person={"id":8, "name":"Chirag", "email":"chirag@gmail.com"};
insert(person);
remove(6);
getAll();
update(person);