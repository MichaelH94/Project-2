const sequelize = require('sequelize')
const connection = require('../config/connection');


let Games = connection.define("Games", {
  username: sequelize.STRING,
  name: sequelize.STRING,
  imageUrl: {
    type: sequelize.STRING,
    isUrl: true,
    allowNull: true
  },
  timetobeat: sequelize.INTEGER,
  summary: sequelize.TEXT,
  hypes: sequelize.INTEGER,
  rating: sequelize.INTEGER,
  esrb: sequelize.STRING
})

module.exports = Games;