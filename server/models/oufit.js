const mongoose = require("mongoose");

const oufitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String, enum: ['superior', 'inferior', 'calzado'],
        require: true
    },
    img: {
        type: String,
        require: true
    }
});

const Oufit = mongoose.model("Oufit",oufitSchema);
module.exports = Oufit;


