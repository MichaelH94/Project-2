const mysql = require('mysql');
const Sequelize = require('sequelize');
var keys = require('./keys.js');

var sequelize = new Sequelize("sequelize_library","root", "", {
   host: keys.dbConfig.host,
   user: keys.dbConfig.user,
   password: keys.dbConfig.pass,
   database: keys.dbConfig.db,
   dialect: "mysql"
});

module.export = connection;