const Character = require("../models/character")

const characterService = {
    getAll: async function (limit,offset) {
        return await Character.find().limit(limit).skip(offset);
    },
    getById: async function (id) {
        return await Character.findById(id);
    },
    store: async function (character){
        return await Character.create(character);
    }
}

module.exports = characterService;