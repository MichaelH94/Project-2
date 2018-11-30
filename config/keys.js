const path = require('path');
require('dotenv').config({ path: path.resolve('../' , '.env') })

exports.dbConfig = {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
    db: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST
}

exports.igdbConfig = {
    key: process.env.IGDB_API,
    url: process.env.IGDB_URL
}