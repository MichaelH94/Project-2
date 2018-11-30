const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./keys.js');

var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
   host: keys.dbConfig.host,
   dialect: "mysql"
});

connection.sync();
module.exports = connection;
