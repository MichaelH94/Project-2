require("dotenv").config();
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
const connection = require('./config/connection')

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars

// Routes
// Starting the server, syncing our models ------------------------------------/
connection.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
