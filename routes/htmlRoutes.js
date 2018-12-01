var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
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
=======
  // Load index page
  app.get("/", function(req, res) {
    db.games.findAll({}).then(function(dbgames) {
      res.render("index", {
        msg: "Welcome!",
        games: dbgamess
      });
    });
  });

  // Load games page and pass in an games by id
  app.get("/games/:id", function(req, res) {
    db.games.findOne({ where: { id: req.params.id } }).then(function(dbgames) {
      res.render("games", {
        games: dbgames
      });
    });
>>>>>>> d87926ce77a42f56947fcbffb9f8811355e233cc
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
