const express = require('express');
const router = require('./router');


const app = express();
router(app);

app.listen(6060,()=>{
    console.log("port 6060 running");
});