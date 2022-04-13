const categoryRoutes = require("../routes/category");
const initializeMongoServer = require("../mongoConfigTesting");

beforeAll(() => {
  return initializeMongoServer();
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
    .expect([])
    .expect(200, done);
});

test("items by category", (done) => {
  request(app)
    .get("/category/:name/items")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect([])
    .expect(200, done);
});
