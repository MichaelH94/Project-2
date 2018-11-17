const fs = require('fs');
const config = require('./config.json');

var parsed = JSON.parse(fs.readFileSync(config, 'UTF-8'));

exports.storageConfig = parsed;