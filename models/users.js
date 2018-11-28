module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 2]
    },
    location: DataTypes.STRING,
    style: DataTypes.INTEGER,
    genre: DataTypes.INTEGER,
    platform: DataTypes.INTEGER
  });

  User.associate = function(models) {
    // Associating User with Games
    // When a User is deleted, also delete any associated Games
    User.hasMany(models.Games, {
      onDelete: "cascade"
    });
  };

  return User;
};
