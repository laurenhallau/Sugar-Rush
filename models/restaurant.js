const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  dessertOne: { 
    type: String,
    price: Number,
   },
   dessertTwo: { 
    type: String,
    price: Number,
   },
   dessertThree: { 
    type: String,
    price: Number,
   },
  location: {
    address: String,
    locality: String,
  },

  price_range: { type: Number },
  phone_number: { type: String},
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
