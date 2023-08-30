const express = require('express');
const isValidToken = require('../Auth/isValidToken');
const { updateInfo } = require('../Controllers/user.controller');
const userRouter = express.Router();


userRouter.put('/update-info', isValidToken, updateInfo)

module.exports = userRouter