const Oufit = require("../models/oufit")

const oufitService = {
    getAll: async function (limit,offset) {
        return await Oufit.find().limit(limit).skip(offset);
    },
    getById: async function (id) {
        return await Oufit.findById(id);
    },
    getByCategory: async function (limit,offset,category) {
        return await Oufit.find({category:category}).limit(limit).skip(offset);
    }
}

module.exports = oufitService;