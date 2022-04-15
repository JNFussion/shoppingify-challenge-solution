var express = require("express");
var router = express.Router();

const itemController = require("../controllers/itemController");

router.post("/item/new", itemController.newItem);

module.exports = router;
