const express = require('express');
const products = require('../products.js');
const getProducts = require('../functions/getProducts.js')

const app = express();

const port = 3001;

app.get('/api/products', (req, res) => {
    getProducts(req, res, products)
});

app.get('/api/products/:id', (req, res) => {
    getProducts(req, res, products)
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

