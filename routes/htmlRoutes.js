var db = require("../models/app");
const router = require("express").Router();
const path = require("path");
const connection = require('../config/connection');
const User = require("../models/user");
const Games = require("../models/games");

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




router.get("/games", (req, res) => {
  let games;
  connection.sync().then(() => {
    Games.findAll({
      attributes: ['name', 'imageUrl', 'timetobeat', 'summary', 'rating']
    }).then(data => {
      let hbObj = {
        games: data
      }
      res.render('games', hbObj)
    })
  })
})

router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
