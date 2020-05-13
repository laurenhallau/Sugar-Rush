const db = require("../models");

// Defining methods for the cartController
module.exports = {
  findAll: function (req, res) {
    db.Cart.find(req.query)
      .sort({ date: -1 })
      .then((cartDb) => res.json(cartDb))
      .catch((err) => res.status(400).json(err));
  },
  findById: function (req, res) {
    db.Cart.findById(req.params.id)
      .then((cartDb) => res.json(cartDb))
      .catch((err) => res.status(400).json(err));
  },
  create: function (req, res) {
    db.Cart.create(req.body)
      .then((cartDb) => res.json(cartDb))
      .catch((err) => res.status(400).json(err));
  },
  update: function (req, res) {
    db.Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((cartDb) => res.json(cartDb))
      .catch((err) => res.status(400).json(err));
  },
  remove: function (req, res) {
    db.Cart.findById({ _id: req.params.id })
      .then((cartDb) => cartDb.remove())
      .then((cartDb) => res.json(cartDb))
      .catch((err) => res.status(400).json(err));
  },
};
