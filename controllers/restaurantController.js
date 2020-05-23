const db = require("../models");

// Defining methods for the restaurantController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant.find(req.query)
      .sort({ date: -1 })
      .then((restaurantDb) => res.json(restaurantDb))
      .catch((err) => res.status(400).json(err));
  },
  findById: function (req, res) {
    db.Restaurant.find({id: req.params.id})
      .then((restaurantDb) => res.json(restaurantDb))
      .catch((err) => res.status(400).json(err));
  },
  create: function (req, res) {
    db.Restaurant.create(req.body)
      .then((restaurantDb) => res.json(restaurantDb))
      .catch((err) => res.status(400).json(err));
  },
  update: function (req, res) {
    db.Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((restaurantDb) => res.json(restaurantDb))
      .catch((err) => res.status(400).json(err));
  },
  remove: function (req, res) {
    db.Restaurant.findById({ _id: req.params.id })
      .then((restaurantDb) => restaurantDb.remove())
      .then((restaurantDb) => res.json(restaurantDb))
      .catch((err) => res.status(400).json(err));
  },
};
