const { formResponse } = require("../Helpers/response");
const { createLog } = require("../Helpers/logger");
const { handleError } = require("../Helpers/error");
const httpStatusCodes = require("../Constants/http-status-codes");
const userModel = require("../Models/user.model");

const modelName = "User Controller";


exports.updateInfo = async (req, res) => {
  const methodName = "updateInfo";
  createLog(methodName, modelName)
  try {
    let { address, contact } = req.body;
    let results = await userModel.findByIdAndUpdate({ _id: req.userId }, {
      contact: contact,
      address: address
    }, { new: true })
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