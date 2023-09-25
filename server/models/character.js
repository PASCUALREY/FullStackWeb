const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    faceImg: {
        type: String,
        require: true
    },
    bodyImg: {
        type: String,
        require: true
    }
});

const Character = mongoose.model("Character",characterSchema);
module.exports = Character;