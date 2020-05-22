const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  id: {type: Number},
  dessertOne: { 
    description: String,
    price: Number,
   },
   dessertTwo: { 
    description: String,
    price: Number,
   },
   dessertThree: { 
    dessert: String,
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
