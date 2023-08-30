const jwt = require("jsonwebtoken");
const jwtSecKey = process.env.JWT_SEC_KEY;

module.exports = {
    sign: (payload) => {
        let signOptions = {
            expiresIn: "90d",    // 90 days validity
        };
        return jwt.sign(payload, jwtSecKey, signOptions);
    },
    decode: (token) => {
        return jwt.decode(token, { complete: true });
        //returns null if token is invalid
    }
}