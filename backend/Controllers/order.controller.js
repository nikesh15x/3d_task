const { formResponse } = require("../Helpers/response");
const { createLog } = require("../Helpers/logger");
const { handleError } = require("../Helpers/error");
const httpStatusCodes = require("../Constants/http-status-codes");
const orderModel = require("../Models/orders.model");
const { calculateTotal } = require("../Helpers/calculateAmount");

const modelName = "Order Controller";

exports.getCart = async (req, res) => {
  const methodName = "cart";
  createLog(methodName, modelName)
  try {
    let history = await orderModel.find({ userId: req.userId, orderStatus: "added" })
    if (history.length <= 0) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Cart is Empty"));
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, history))
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err))
    return;
  }
}


exports.addToCart = async (req, res) => {
  const methodName = "addToCart";
  createLog(methodName, modelName)
  try {
    let { cart_items } = req.body;
    let results = await orderModel.replaceOne({ userId: req.userId, orderStatus: 'added' }, {
      pizzas: cart_items,
      totalPrice: calculateTotal(cart_items),
      userId: req.userId,
      orderStatus: 'added'
    }, { upsert: true })
    if (!results) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Please try again later"))
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, results))
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err))
    return;
  }
}


exports.updateCart = async (req, res) => {
  const methodName = "update";
  createLog(methodName, modelName)
  try {
    let { cart_items, status, order_id } = req.body;
    let updateCart = await orderModel.updateOne({ _id: order_id }, {
      pizzas: cart_items,
      orderStatus: status,
      totalPrice: calculateTotal(cart_items)
    }, { new: true })
    if (!updateCart) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "Please try again later"))
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, updateCart))
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err))
    return;
  }
}


exports.history = async (req, res) => {
  const methodName = "history";
  createLog(methodName, modelName)
  try {
    let history = await orderModel.find({ userId: req.userId, orderStatus: "completed" })
    if (history.length <= 0) {
      res.status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "No Orders Yet!!!"))
      return;
    }
    res.status(httpStatusCodes[200].code)
      .json(formResponse(httpStatusCodes[200].code, history))
    return;
  } catch (err) {
    handleError(err)
    res.status(httpStatusCodes[500].code)
      .json(formResponse(httpStatusCodes[500].code, err))
    return;
  }
}