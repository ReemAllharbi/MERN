const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  status: String,
});


const PlayerScheme = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "*Name is required!"],
        minlength: [3, "*Name should be at least 3 characters!"],
      },

      position: {
        type: String,
        required: [true, "*Position is required!"],
      },


    },
    { timestamps: true }
  );


const Player = mongoose.model("Player", PlayerScheme);

module.exports = Player;
