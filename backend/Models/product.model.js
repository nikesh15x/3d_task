const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: [
    {
      size: { type: String },
      price: { type: Number }
    }
  ],
  crest: {
    type: String,
    enum: ['Thin', 'Cheese Burst', 'Flat Bread']
  },
  ingredients: [{
    type: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
