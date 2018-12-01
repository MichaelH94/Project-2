var db = require("../models/app");

module.exports = function(app) {
  // Load index page
  // Render 404 page for any unmatched routes

  app.get('/', (req, res) => {
    res.send('index.html');
  });

  app.get('/login', (req, res) => {
    res.send('login.html');
  });

  app.get("*", function(req, res) {
    res.send("404.html");
  });
};
