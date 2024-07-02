const dal = require('../models/dal');
const jwt = require('jsonwebtoken');

const secretKey = "secretKey";

//login get Request type Http handler

exports.getLogin=(req,res)=>{
    res.render('../views/login.ejs');
}

//login post Request type Http handler

exports.postLogin=(req,res)=>{
    let user = req.body;
    if(user.email=="disha123@gmail.com" && user.password=="1234"){
        let data={
            time:Date(),
            client:user.email
        }
        let token =jwt.sign(data,secretKey);
        console.log(token);
        let person =dal.getPersonDetails();
        res.render('../views/profile.ejs',person);
    }
    else{
        res.render('../views/login.ejs');
    }
}
