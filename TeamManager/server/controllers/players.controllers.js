const Player = require("../models/players.model");

module.exports.createPlayer = (req, res) => {
  const { name, position, games } = req.body;
  Player.create({ name, position, games })
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};

module.exports.getPlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.AllPlayers = (req, res) => {
  Player.find({})
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};
