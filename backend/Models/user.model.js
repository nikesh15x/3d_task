const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },
  orders: [{
    type: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    required: true,
  }],
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);