var db = require("../models");

module.exports = function(app) {
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
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
