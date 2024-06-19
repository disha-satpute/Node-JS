var handler =  require('./Handler')

//Browser less javascript code (server side JS)

console.log("Welcome to MERN Stack");
var count = 45;
var title = "Rohit";
var status = false;
//JSOn : Javascript object Notation
//object: real world entity
//   state : keys with their respective value
//   behaviour : method
//   identifier : unique name/no

console.log("count : " + count );
console.log("title : " + title );


//  Direct call
//  handler.display();

//Indirect call
setInterval(handler.display,3000);
setInterval(handler.print,4000);
console.log("End of the Node Application");