var Category = require("../models/category");
var Item = require("../models/item");

const { body, validationResult } = require("express-validator");

exports.newItem = [
  body("name").trim().isLength({ min: 3 }).escape().toLowerCase(),
  body("note").trim().escape(),
  body("image").trim().isURL().escape(),
  body("category").trim().isLength({ min: 3 }).escape().toLowerCase(),
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors);
    }
    Category.findOne({ name: req.body.category }).exec((err, result) => {
      if (err) {
        return next(err);
      }
      if (result) {
        Item.create({
          name: req.body.name,
          note: req.body.note,
          image: req.body.image,
          category: result._id,
        }).then(() => res.status(200).send({ success: true }));
      } else {
        Category.create({
          name: req.body.category,
        }).then((category) => {
          Item.create({
            name: req.body.name,
            note: req.body.note,
            image: req.body.image,
            category: category._id,
          })
            .then(() => res.status(200))
            .send({ success: true });
        });
      }
    });
  },
];
