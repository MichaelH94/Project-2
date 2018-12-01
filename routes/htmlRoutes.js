var db = require("../models");

module.exports = function(app) {
  // Load index page
  // Render 404 page for any unmatched routes

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
