const express = require('express');
const router = express.Router();

const hltb = require("..models/hltb.js");


router.get("/game", (req, res) =>{
  hltb.timeToBeat()
})

//get one user
router.get('api/Users/:id', (req, res)=>{});


router.post('api/Users', (req, res)=>{
  //ajax info goes here
  res.send({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    location: req.body.location,
    style: req.body.style,
    genre: req.body.genre,
    platform: req.body.platform
  });
});

const sequelize = require('sequelize');
// i think we can just require the models folder instead of all these individually
const models = require('../models')


// var gamePost = {
//   pull game info from frontend
//   do htlb & igdb apisearch
//   push returned results into database
// };



// var userPost = {
//   pull user info from frontend
//   push info into database
// };

