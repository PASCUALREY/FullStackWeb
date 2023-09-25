const Character = require("../models/character")

const characterService = {
    getAll: async function (limit,offset) {
        return await Character.find().limit(limit).skip(offset);
    },
    getById: async function (img) {
        return await Character.findOne(img);
    },
    store: async function (character){
        return await Character.create(character);
    }
}

module.exports = characterService;