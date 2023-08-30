const { formResponse } = require("../Helpers/response");
const { createLog } = require("../Helpers/logger");
const { handleError } = require("../Helpers/error");
const httpStatusCodes = require("../Constants/http-status-codes");
const { encrypt, verifyHash } = require("../Helpers/hashing");
const userModel = require("../Models/user.model");
const tokenModel = require("../Models/token.model");
const { sign } = require("../Helpers/jwt_service");
const { validationResult } = require('express-validator');

const modelName = "Auth Controller";


exports.createUser = async (req, res) => {
  const methodName = "createUser";
  createLog(methodName, modelName)
  try {
    const errors = await validationResult(req)
    if (!errors.isEmpty()) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, errors.array()));
      return;
    }
    let { email, name, password } = req.body;
    let checkUserExist = await userModel.findOne({ email: email });
    if (checkUserExist) {
      console.log("Existing user");
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Email address already registered"))
      return;
    }
    //new user
    console.log("new user");
    let tokenValidity = new Date();
    let newUser = await userModel.create({ name: name, email: email, password: encrypt(password) });
    if (!newUser) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Please try again later"))
      return;
    }
    console.log(newUser._id);
    let token = sign({ _id: newUser._id, role: 'user' })
    tokenValidity.setDate(tokenValidity.getDate() + 90);
    let saveToken = await tokenModel.create({ "_id": newUser._id, "expiry": tokenValidity, "token": token, role: 'user' });
    console.log(saveToken);
    if (!saveToken) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Please try again later"))
      return;
    }
    //prepare data
    let data = {
      "name": newUser.name,
      "role": 'user',
      "email": newUser.email,
      "token": token,
      "_id": newUser._id
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, data))
    return;
  } catch (err) {
    handleError(err, methodName, modelName);
    res
      .status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}


exports.login = async (req, res) => {
  const methodName = "Login";
  createLog(methodName, modelName)
  try {
    const errors = await validationResult(req)
    if (!errors.isEmpty()) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, errors.array()));
      return;
    }

    let { email, password } = req.body;
    let isValid = await userModel.findOne({ email: email });
    //authenticate
    if (!isValid) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, " Incorrect Email"))
      return;
    }

    if (!verifyHash(isValid.password, password)) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, " Incorrect Password"))
      return;
    }
    //generate new token
    let tokenValidity = new Date();
    let token = sign({ _id: isValid._id, role: 'user' })
    tokenValidity.setDate(tokenValidity.getDate() + 90);

    let saveToken = await tokenModel.replaceOne({ "_id": isValid._id }, { "_id": isValid._id, "expiry": tokenValidity, "token": token, role: 'user' }, { upsert: true });
    if (!saveToken) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Please try again later"))
      return;
    }
    //prepare data
    let data = {
      "name": isValid.name,
      "role": 'user',
      "email": isValid.email,
      "token": token,
      "_id": isValid._id
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, data))
    return;
  } catch (err) {
    handleError(err, methodName, modelName);
    res
      .status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}

exports.logout = async (req, res) => {
  const methodName = "Logout";
  createLog(methodName, modelName);
  try {
    let deleteToken = await tokenModel.findOneAndDelete({ "token": req.token });
    if (!deleteToken) {
      res.status(httpStatusCodes[404].code)
        .json(formResponse(httpStatusCodes[404].code, "Please try again later !!!"))
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, ""))
    return
  } catch (err) {
    handleError(err, methodName, modelName);
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err))
  }
}