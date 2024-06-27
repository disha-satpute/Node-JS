
const express = require('express');
const expressSession = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const OneDay = 1000 * 60 * 60 * 24;

// Load product data from product.json
const productDataPath = path.join(__dirname, 'product.json');
const ProductData = JSON.parse(fs.readFileSync(productDataPath, 'utf-8'));

// Middleware configuration for session
const sessionMiddleware = expressSession({
    secret: 'cart',
    saveUninitialized: true,
    cookie: { maxAge: OneDay },
    resave: false
});

// Use session middleware
app.use(sessionMiddleware);

// Endpoint to get the cart
app.get("/api/cart", (req, res) => {
    if (req.session.cart) {
        res.send(req.session.cart);
    } else {
        req.session.cart = [];
        res.send(req.session.cart);
    }
});

// Endpoint to add to cart
app.get("/api/addToCart/:id", (req, res) => {
    const product = ProductData.find(p => p.ProductId == req.params.id); // Use loose comparison for ID

    if (!product) {
         res.send('Product not found');
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    let item = {
        productId: product.ProductId,
        productName: product.ProductName,
        productPrice: product.ProductPrice
    };

    req.session.cart.push(item);
    res.send(req.session.cart);
});


//remove from cart
app.get("/api/removeFromCart/:id", (req,res) => {
    const id = req.params.id;
 
    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(product => product.productId !== id);
        res.send(req.session.cart);
    } else {
        res.send('Cart is empty');
    }
});

//remove all data (destroy session)
 app.get("/api/checkout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.send("error");
        } else {
            res.send("Session destroyed");
        }
    });
});

// Running the server
app.listen(6060, () => {
    console.log("Server is running");
});


