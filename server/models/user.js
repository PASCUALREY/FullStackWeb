const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  players: [{
    id: { type: mongoose.Schema.ObjectId, ref: 'Player',
    } // aqui establecemos la relación con nuestro modelo Personaje
}]
});

  const User = mongoose.model("User", UserSchema);
  module.exports = User;