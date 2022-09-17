const PlayerController = require("../controllers/players.controllers");

module.exports = (app) => {
  app.get("/api/players", PlayerController.AllPlayers);
  app.post("/api/players/new", PlayerController.createPlayer);
  app.get("/api/players/:id", PlayerController.getPlayer);
  app.delete("/api/players/delete/:id", PlayerController.deletePlayer);
};
