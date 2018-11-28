const express = require('express');
const router = express.Router();

const hltb = require("..models/hltb.js");


router.get("/game", (req, res) =>{ 
  hltb.timeToBeat()
})

// incomplete, we need the front end routes completed


const sequelize = require('sequelize');
const game = require('../models/games.js')
const user = require('../models/users.js')
const hltb = require('../models/hltb.js')
const igdb = require('../models/igdbapi.js')

// var gamePost = {
//   pull game info from frontend
//   do htlb & igdb apisearch 
//   push returned results into database
// };

// var userPost = {
//   pull user info from frontend 
//   push info into database
// };