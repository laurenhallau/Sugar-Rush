const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  dessert: { type: String },
  location: {
    address: String,
    locality: String,
    city: String,
  },

  price_range: { type: Number },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
