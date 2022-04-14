const categoryRoutes = require("../routes/category");
const initializeMongoServer = require("../mongoConfigTesting");
const Category = require("../models/category");
const Item = require("../models/item");

let fruit = {};
let vegetables = {};
let meat = {};
let avocado = {};
let categories = [];

beforeAll(() => {
  initializeMongoServer();
  fruit = new Category({ name: "fruit" });
  vegetables = new Category({ name: "vegetables" });
  meat = new Category({ name: "meat" });

  fruit.save();
  vegetables.save();
  meat.save();

  avocado = new Item({
    name: "avocado",
    note: "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. ",
    image: "https://live.staticflickr.com/65535/51889801034_a8e2d53647_h.jpg",
    category: fruit,
  });

  avocado.save();

  categories = [fruit, vegetables, meat];
});

const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", categoryRoutes);

test("index", (done) => {
  request(app)
    .get("/categories")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(categories)
    .expect(200, done);
});

test("items by category", (done) => {
  request(app)
    .get("/category/fruit/items")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect([avocado])
    .expect(200, done);
});

test("items by category", (done) => {
  request(app)
    .get("/category/meat/items")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect([])
    .expect(200, done);
});
