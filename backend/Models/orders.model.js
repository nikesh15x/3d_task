const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  userId: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    required: true,
  },
  pizzas: [
    {
      name: String,
      quantity: Number,
      price: Number,
      size: String,
      total_price: Number
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
  }
})

module.exports = mongoose.model("Order", OrdersSchema);