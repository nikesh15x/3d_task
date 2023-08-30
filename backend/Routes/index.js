const express = require('express');
const app = express();

//routers
const authRouter = require('./auth.route');
const productRouter = require('./product.route');
const userRouter = require('./user.route');
const orderRouter = require('./order.route');

app.use(authRouter)
app.use(productRouter)
app.use(userRouter)
app.use(orderRouter)

module.exports = app

