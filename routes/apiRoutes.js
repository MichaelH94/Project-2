var db = require("../models");

module.exports = function(app) {
  // Get all games
  app.get("/api/games", function(req, res) {
    db.game.findAll({}).then(function(dbgames) {
      res.json(dbgames);
    });
  });

  // Create a new game
  app.post("/api/games", function(req, res) {
    db.game.create(req.body).then(function(dbgames) {
      res.json(dbgames);
    });
  });

  // Delete an game by id
  app.delete("/api/games/:id", function(req, res) {
    db.game.destroy({ where: { id: req.params.id } }).then(function(dbgames) {
      res.json(dbgames);
    });
  });
};
