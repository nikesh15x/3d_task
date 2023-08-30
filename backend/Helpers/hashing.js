const { compareSync, hashSync, genSaltSync } = require("bcrypt");
let saltRounds = genSaltSync(Number(process.env.SALT_ROUNDS));
module.exports = {
    encrypt: (payload) => {
        return hashSync(payload, saltRounds)
    },
    verifyHash: (hashedPayload, payload) => {
        return compareSync(payload.toString(), hashedPayload);
    }
} 