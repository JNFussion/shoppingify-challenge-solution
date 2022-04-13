var Category = require("../models/category");
var Item = require("../models/item");

const { body, validationResult } = require("express-validator");

exports.index = (req, res, next) => {
  Category.find({}).exec((err, result) => {
    if (err) {
      next(err);
    }
    res.json(result);
  });
};

exports.itemsByCategory = (req, res, next) => {
  Item.find({})
    .populate({
      path: "category",
      match: { name: req.params.name },
    })
    .exec((err, result) => {
      if (err) {
        next(err);
      }
      res.json(result);
    });
};

exports.newCategory = [
  body("name").trim().isLength({ min: 3 }).escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Category.create({
      name: req.body.name,
    }).then((category) => res.status(200));
  },
];
