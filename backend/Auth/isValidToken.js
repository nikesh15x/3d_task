const jwt = require("jsonwebtoken");
const { formResponse } = require("../Helpers/response");
const httpStatusCodes = require("../Constants/http-status-codes");
const Token = require("../Models/token.model");
const jwtSecKey = process.env.JWT_SEC_KEY;

const isValidToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res
      .status(httpStatusCodes[401].code)
      .json(formResponse(httpStatusCodes[401].code, "Token not found"));
  try {
    let getServerToken = await Token.findOne({ token: token });
    if (!getServerToken) {
      res
        .status(httpStatusCodes[401].code)
        .json(
          formResponse(httpStatusCodes[401].code, "Token Expired or Invalid")
        );
      return;
    }
    const data = await jwt.verify(token, jwtSecKey);
    req.userId = getServerToken._id;
    req.token = token;
    return next();
  } catch (error) {
    res
      .status(httpStatusCodes[401].code)
      .json(
        formResponse(httpStatusCodes[401].code, "Token Expired or Invalid")
      );
    return;
  }
};

module.exports = isValidToken;