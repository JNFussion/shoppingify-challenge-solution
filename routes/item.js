var express = require("express");
var router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/item/:name", itemController.showItem);
router.post("/item/new", itemController.newItem);

module.exports = router;
