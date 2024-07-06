exports.display=function (){
    var person={
        id:15,
        firstname: "Disha",
        lastname:"Satpute",
        email:"abc11@gmsil.com",
        address:{
            country:"India",
            state:"Maharashtra",
            city:"Pune"
        }

    };
console.log("person info : " + person.firstname );
console.log(person);
}

exports.print=function(){
    console.log("loggin data.....");
}