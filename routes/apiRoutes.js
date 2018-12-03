const express = require('express');
//const apiSearch = require('../models/apiSearch');
const app = require('../models/app');
const router = express.Router();
const sequelize = require('sequelize');
const bodyparser = require('body-parser');
// i think we can just require the models folder instead of all these individually

//router.get("/game", (req, res) =>{});

//get one user
router.get('/login', (req, res) => {
  console.log();
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

module.exports = router;
