const { formResponse } = require("../Helpers/response");
const { createLog } = require("../Helpers/logger");
const { handleError } = require("../Helpers/error");
const httpStatusCodes = require("../Constants/http-status-codes");
const { validationResult } = require('express-validator');
const productModel = require("../Models/product.model");


const modelName = "Auth Controller";

exports.getAll = async (req, res) => {
  const methodName = "get_all"
  createLog(methodName, modelName)
  try {
    let products = await productModel.find();
    if (products.length <= 0) {
      res.status(httpStatusCodes[404].code)
        .json(formResponse(httpStatusCodes[404].code, 'No Products Found'));
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, products));
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}

exports.get = async (req, res) => {
  const methodName = "get_id"
  createLog(methodName, modelName)
  try {
    let products = await productModel.findOne({ _id: req.params.id });
    if (!products) {
      res.status(httpStatusCodes[404].code)
        .json(formResponse(httpStatusCodes[404].code, 'No Products Found'));
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, products));
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}

exports.createProduct = async (req, res) => {
  const methodName = "createProduct"
  createLog(methodName, modelName)
  try {
    let results = await productModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      ingredients: req.body.ingredients,
      crest: req.body.crest,
    })
    if (!results) {
      res.status(httpStatusCodes[202].code)
        .json(formResponse(httpStatusCodes[202].code, 'Please try again later'));
      return;
    }
    res.status(httpStatusCodes[201].code)
      .json(formResponse(httpStatusCodes[201].code, ''));
    return;

  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}

exports.addImage = async (req, res) => {
  const methodName = "add Image"
  createLog(methodName, modelName)
  try {
    let results = await productModel.updateOne({ _id: req.body.id }, {
      img: req.body.img
    }, { new: true })
    if (!results) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[202].code, 'Please try again later'));
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, results));
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err));
    return;
  }
}


