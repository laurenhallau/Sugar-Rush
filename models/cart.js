const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity:{type: Number, required: true},
  date: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
