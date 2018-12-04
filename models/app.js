const connection = require('../config/connection');
const sequelize = require('sequelize')
const User = require("./user");
const Games = require('./games')

var Posts = connection.define("Posts", {
  body: {
    type: sequelize.TEXT,
    allowNull: false
  }
});


let app = {
  createUser: (username, password, name, age, location, style, platform) => {
    connection.sync().then(() => {
      User.create({
        username: username,
        password: password,
        name: name,
        age: age,
        location: location,
        style: style,
        platform: platform
      });

      return;
    });
  },

  getUser: (username) => {
    connection.sync().then(() => {
      User.findOne({ where: { username: username } }).then(user => {
        let data = {
          name: user.name,
          age: user.age,
          location: user.location,
          style: user.style,
          platform: user.platform
        }
        return data;
      });
    });
  },

  createGame: (name, imageUrl, timetobeat, summary, hypes, rating, esrb) => {
    connection.sync().then(() => {
      Games.create({
        name: name,
        imageUrl: imageUrl,
        timetobeat: timetobeat,
        summary: summary,
        hypes: hypes,
        rating: rating,
        esrb: esrb,
      });
    });
  },

  deleteUser: (user) => {
    connection.sync().then(() => {
      User.destroy({
        where: {
          username: user
        }
      })
    });
  },

  addPost: (data) => {
    connection.sync().then(() => {
      Posts.create({
        body: data
      })
    })
  },
  
  
  
}

module.exports = app;


