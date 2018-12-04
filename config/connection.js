const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./keys');

// var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
//    host: keys.dbConfig.host,
//    dialect: "mysql"
// });

let connection;
if (process.env.JAWSDB_URL) {
   connection = new Sequelize(process.env.JAWSDB_URL)
}
else {
	connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
      host: keys.dbConfig.host,
      dialect: "mysql"
   });
}

module.exports = connection;
