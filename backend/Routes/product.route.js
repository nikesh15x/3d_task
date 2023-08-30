const express = require('express');
const isValidToken = require('../Auth/isValidToken');
const { createProduct, get, getAll, addImage } = require('../Controllers/product.controller');
const { validateProductFields } = require('./validators');
const productRouter = express.Router();


productRouter.get('/products', getAll);
productRouter.get('/products/:id', isValidToken, get);
productRouter.put('/products/', isValidToken, addImage);
productRouter.post('/products', isValidToken, validateProductFields, createProduct)

module.exports = productRouter;