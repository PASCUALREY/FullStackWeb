const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    character:{
        type: mongoose.Schema.ObjectId, ref: 'Character'
    },
    superior:{
        type: mongoose.Schema.ObjectId, ref: 'Oufit' 
    },
    inferior:{
        type: mongoose.Schema.ObjectId, ref: 'Oufit' 
    },
    calzado:{
        type: mongoose.Schema.ObjectId, ref: 'Oufit' 
    }
});

const Player = mongoose.model("Player",playerSchema);
module.exports = Player;