const mysql = require('mysql');
const Sequelize = require('sequelize');
var options = require('./option.js');

var sequelize = new Sequelize("sequelize_library","root", "", {
   host: options.storageConfig.host,
   user: options.storageConfig.user,
   password: options.storageConfig.pass,
   dialaect: options.storageConfig.dialect
});

module.export = connection;