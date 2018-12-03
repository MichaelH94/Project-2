require("dotenv");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
const connection = require('./config/connection')
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")

app.use(apiRoutes, htmlRoutes)

// Starting the server, syncing our models ------------------------------------/
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });


module.exports = app;
