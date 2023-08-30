const express = require('express');
const isValidToken = require('../Auth/isValidToken');
const { createUser, login, logout } = require('../Controllers/auth.controller');
const { validateUserFields, validateLoginFields } = require('./validators');
const authRouter = express.Router();


authRouter.post('/register', validateUserFields, createUser)
authRouter.post('/login', validateLoginFields, login)
authRouter.get('/logout', isValidToken, logout)

module.exports = authRouter