const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  total: { type: Number },
  date: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
