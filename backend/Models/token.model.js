const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TokenSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
    },
    role: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Token", TokenSchema);