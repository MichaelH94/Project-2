const express = require('express');
const router = express.Router();

const hltb = require("..models/hltb.js");


router.get("/game", (req, res) =>{ 
  hltb.timeToBeat()
})

// incomplete, we need the front end routes completed


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

