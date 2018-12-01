var db = require("../models");

module.exports = function(app) {
  // Load index Page
  app.get('/', (req, res) => {
    res.render('index');
  });

  //Render login page
  app.get('/login', (req, res) => {
    res.render('login');
  });

  //render create account
  app.get('/creatAccount', (req, res) => {
    res.render('createAccount');
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
