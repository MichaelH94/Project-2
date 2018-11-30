const connection = require('../config/connection');
const sequelize = require ('sequelize')
const params = username, password, name, age, location, style, genre, platform

var User = connection.define("User", {
    // Giving the Users model a name of type STRING
      username: sequelize.STRING,
      password: sequelize.STRING,
      name: sequelize.STRING,
      age:  {
          type: sequelize.INTEGER,
          allowNull: false,
          len: [1,2]
      },
      location: sequelize.STRING,
      style: sequelize.INTEGER,
      genre: sequelize.STRING,
      platform: sequelize.INTEGER
  });

    var Games = connection.define("Games", {
      username: sequelize.STRING,
      name: sequelize.STRING,
      imageUrl: {
        type: sequelize.STRING,
        isUrl: true,
        allowNull: true
      },
      timetobeat: sequelize.INTEGER,
      // commenting out the genre, unable to make it work and wasted too much time
      // genre: sequelize.STRING,
      summary: sequelize.TEXT,
      hypes: sequelize.INTEGER,
      rating: sequelize.INTEGER,
      esrb: sequelize.STRING
    });
    User.associate = () => {
        User.hasMany(Games, {
            onDelete: "cascade"
        });
    };

    Games.associate = () => {
      // We're saying that a Games should belong to an User
      // A Games can't be created without an User due to the foreign key constraint
      Games.belongsTo(User, {
        foreignKey: {
          allowNull: false
        }
      });
    }

function createUser() {
    connection.sync().then(() => {
        User.create({
            username: "Test",
            password: "test",
            name: "Test",
            age: 24, 
            location: "test",
            style: 3,
            genre: "test",
            platform: 7
        });
    });
};

function createGame() {
    connection.sync().then(() => {
        Games.create({
            name: "test",
            imageUrl: "www.google.com",
            timetobeat: "24",
            summary: "test test test",
            hypes: 10,
            rating: 9,
            esrb: "M"
        });
    });
};

function deleteUser() {
    connection.sync().then(() => {
        User.destroy({
            where: {
                id: 1
            }
        })
    })
}

function deleteGame() {
    connection.sync().then(() => {
        Games.destroy({
            where: {
                id: 1
            }
        });
    });
}