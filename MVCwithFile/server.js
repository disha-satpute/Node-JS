import express from 'express'
import routes from './router.js';


const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

routes(app);

app.listen(7000,()=>{
    console.log('listen on port 7000');
})