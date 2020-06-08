const db = require("../models");

// Defining methods for the cartController
module.exports = {
  findAll: function (req, res) {
    db.PaymentInfo.find(req.query)
      .sort({ date: -1 })
      .then((PaymentDB) => res.json(PaymentDB))
      .catch((err) => res.status(400).json(err));
  },
  findById: function (req, res) {
    db.PaymentInfo.findById(req.params.id)
      .then((PaymentDB) => res.json(PaymentDB))
      .catch((err) => res.status(400).json(err));
  },
  create: function (req, res) {
    db.PaymentInfo.create(req.body)
      .then((PaymentDB) => res.json(PaymentDB))
      .catch((err) => res.status(400).json(err));
  },
  update: function (req, res) {
    db.PaymentInfo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((PaymentDB) => res.json(PaymentDB))
      .catch((err) => res.status(400).json(err));
  },
  remove: function (req, res) {
    db.PaymentInfo.findById({ _id: req.params.id })
      .then((PaymentDB) => PaymentDB.remove())
      .then((PaymentDB) => res.json(PaymentDB))
      .catch((err) => res.status(400).json(err));
  },
};
