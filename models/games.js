module.exports = function(sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
      name: DataTypes.STRING,
      imageUrl: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: true
      },
      timetobeat: DataTypes.INTEGER
    });
  
    Games.associate = function(models) {
      // We're saying that a Games should belong to an User
      // A Games can't be created without an User due to the foreign key constraint
      Games.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Games;
  };
  