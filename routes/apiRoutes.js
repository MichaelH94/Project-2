const express = require('express');
const apiSearch = require('../models/apiSearch');
const app = require('../models/app');
const router = express.Router();
const sequelize = require('sequelize');
const bodyparser = require('body-parser');
const connection = require('../config/connection');
const User = require("../models/user");
const Games = require("../models/games");


router.post('/login', (req, res) => {
connection.sync().then(() => {
    User.findOne({ where: { username: req.body.username } }).then(user => {
      let style, platform;
      if(user.style == 1) {
        style = "Casual"
      } else if(user.style == 2) {
        style = "Advanced"
      } else {
        style = "Completionist"
      }

      let data = {
        name: user.name,
        age: user.age,
        location: user.location,
        style: style,
        platform: user.platform
      }
      console.log(data);
      res.render('index', data)
      })
    });
  });


// Create user
router.post('/create-account', (req, res) => {
  console.log(req.body);
  res.json(req.body);

  // Function from app.js
  app.createUser(req.body.username, req.body.password, req.body.name, req.body.age, req.body.location, req.body.style, req.body.platform);
});

router.post('/homepage', (req, res) => {
});

router.post('/add-game', (req, res) => {
  console.log(req.body)
  apiSearch.igdbSearch(req.body.game)
});

router.post('/games', (req, res) => {
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


module.exports = router;
