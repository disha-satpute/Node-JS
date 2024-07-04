const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const secretKey = "sunflower";

const app = express();
const OneDay = 1000 * 60 * 60 * 24;

// Correct usage of cors middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// Middleware configuration for session
const sessionMiddleware = expressSession({
    secret: 'cart',
    saveUninitialized: true,
    cookie: { maxAge: OneDay },
    resave: false
});

// Use session middleware
app.use(sessionMiddleware);

app.get("/api/products", (req, res) => {
    let products = [
        {"id": 11, "name": "Lipstick", "colour": "red", "price": 90, "quantity": 7},
        {"id": 12, "name": "NailPaint", "colour": "Black", "price": 50, "quantity": 23},
        {"id": 13, "name": "Earrings", "colour": "Blue", "price": 190, "quantity": 17},
        {"id": 14, "name": "NeckLace", "colour": "Golden", "price": 900, "quantity": 11},
        {"id": 15, "name": "Rings", "colour": "Silver", "price": 20, "quantity": 75},
        {"id": 16, "name": "Lipstick", "colour": "pink", "price": 30, "quantity": 21}
    ];
    res.send(products);
});
app.get("/api/products/id", (req, res) => {
    let product = {"id": 12, "name": "NailPaint", "colour": "Black", "price": 50, "quantity": 23};
    res.send(product);
});

app.post("/api/login",(req,res)=>{
    let user = req.body;

    if(user.email==="disha2@gmail.com" && user.pass==="disha"){
        let data ={
            "time": Date(),
            "client":user.email
        };
        let token = jwt.sign(data,secretKey);
        console.log(token);
      res.send(token);
    }
    else{
        res.send("Invalid user");
    }
});

/*app.get("/api/orders",(req,res)=>{
    let authkey = "Authorization";
    let token= req.header(authkey);
    let data= jwt.verify(token,secretKey);

    if(data.client == "disha2@gmail.com"){
        let orders = [
            {"id":101,"date":"20/02/2022","price":2300,"status":"processed"},
            {"id":102,"date":"02/04/2022","price":2300,"status":"rejected"},
            {"id":103,"date":"25/04/2022","price":2300,"status":"processed"},
            {"id":104,"date":"10/11/2022","price":2300,"status":"completed"},
            {"id":105,"date":"29/12/2022","price":2300,"status":"processed"},
        ];
        res.send(orders);
    }
    else{
        res.send("error");
    }
});*/

app.get("/api/orders", (req, res) => {
    // orders details
    var orders = [
      { id: 1, date: "1/2/2024", total: 52300, status: "intransmit" },
      { id: 2, date: "11/12/2024", total: 52300, status: "processed" },
      { id: 3, date: "30/8/2024", total: 52300, status: "processed" },
      { id: 4, date: "12/6/2024", total: 52300, status: "intransmit" },
      { id: 5, date: "25/3/2024", total: 52300, status: "processed" },
    ];
    // key to store token
    let authKey = "Authorization";
    let token = req.header(authKey);
    let extractedUser = jwt.verify(token, secretKey);
    if (extractedUser.client == "disha2@gmail.com") {
      res.send(orders);
    }
    else
    {
          res.send("unauthorized request");
    }
  });


// Running the server
const PORT = 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});












