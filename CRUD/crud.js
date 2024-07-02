// Insert , update , delete , get from .JSON File
// Insert , update , delete , get from JSON array (Collection operation)
// Insert , update, delete,get from JSON file (I/O Operation)
var removePerson = {};
//Initializing new array of object
var members=[
    {"id":1 ,"Pname":"Disha" ,"city":"pune"},
    {"id":2 ,"Pname":"Sanika" ,"city":"pune"},
    {"id":3 ,"Pname":"Monika" ,"city":"pune"},
    {"id":4 ,"Pname":"Kirti" ,"city":"pune"}
];

//access the array
var getAll = function(){
    return members;
}
//console.log(getAll());

//function to search data using id 
var getById=function(Id){
    var searchPerson = {};
    searchPerson= members.find((person)=>(person.id==Id));  //alternate name
    console.log(searchPerson);
}
//getById(2);

//function to search data using name
 var getByName=function(Name){
    var foundPerson = {};
    foundPerson = members.find((person)=>(person.Pname==Name));
    console.log(foundPerson);
 }
 //getByName("Disha");

 //function to Delete data using id
 //console.log("after delete");
 var remove=function(Id){

    removePerson= members.filter((person)=>person.id!==Id);
    console.log(removePerson);
}
 remove(4);

//function tu add data
var insert = function(person){
  members.push(person);
    console.log(members);
}
person= {"id":8 ,
    "Pname":"nmrta" ,
    "city":"pune"};

insert(person);