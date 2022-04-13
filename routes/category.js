var express = require("express");
var router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/categories", categoryController.index);
router.get("/category/:name/items", categoryController.itemsByCategory);
router.post("/category/new", categoryController.newCategory);

module.exports = router;
