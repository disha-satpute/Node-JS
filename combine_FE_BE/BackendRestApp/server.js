const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');

const app = express();
const OneDay = 1000 * 60 * 60 * 24;

// Correct usage of cors middleware
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

// Running the server
const PORT = 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});










/*
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
*/


