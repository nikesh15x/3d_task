const express = require('express');
const isValidToken = require('../Auth/isValidToken');
const { addToCart, history, updateCart,getCart } = require('../Controllers/order.controller');
const orderRouter = express.Router();


orderRouter.get('/cart', isValidToken, getCart)
orderRouter.post('/add-cart', isValidToken, addToCart)
orderRouter.put('/update-cart', isValidToken, updateCart)
orderRouter.get('/order-history', isValidToken, history)

module.exports = orderRouter