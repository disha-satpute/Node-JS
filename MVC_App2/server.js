//models
const express = require('express');
const router = require('./router');
//global declaration
const app = express();
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');

router(app);

app.listen(6060,()=>{
    console.log("port 6060 running");
});