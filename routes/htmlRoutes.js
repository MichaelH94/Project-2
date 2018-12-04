var db = require("../models/app");
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/homepage", (req, res) => {
  // sequelize
  const info = {
    age: 20,
    location: "somewhere",
    console: "pc"
  }
  res.render("index", info);
});

router.get("/login", (req, res) => {
  res.render("login");
});


router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
