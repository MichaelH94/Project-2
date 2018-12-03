const connection = require('../config/connection');
const sequelize = require ('sequelize')

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
      platform: sequelize.STRING
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

    var Posts = connection.define("Posts", {
        body: {
            type: sequelize.TEXT,
            allowNull: false
        }
    });

    User.associate = () => {
        User.hasMany(Games, {
            onDelete: "cascade"
        });
    };

    User.associate = () => {
        User.hasMany(Posts, {
            onDelete: "cascade"
        })
    };

    Games.associate = () => {
      // We're saying that a Games should belong to an User
      // A Games can't be created without an User due to the foreign key constraint
      Games.belongsTo(User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    Posts.associate = () => {
        Posts.belongsTo(User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

let app = {
createUser: (username, password, name, age, location, style, platform) => {
  console.log("Made it in here");
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
}
}

module.exports = app;
