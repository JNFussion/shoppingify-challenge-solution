require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./mongoConfig");

var app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const categoryRouter = require("./routes/category");
const itemRouter = require("./routes/item");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("", categoryRouter);
app.use("", itemRouter);

module.exports = app;
