const { ObjectId } = require("mongodb");
const User = require("../models/user")

const userService = {
    getAll: async function (limit, offset) {
        return await User.find().limit(limit).skip(offset);
    },
    getById: async function (id) {
        return await User.findById(id);
    },
    getOne: async function (name, pin) {
        return await User.findOne({ name, pin });
    },
    create: async function (user) {
        const result = await User.create(user);
        return result;
    },
    delete: async function (id) {
        return await User.findByIdAndDelete(id);
    },
    update: async function (id, user) {
        return await User.findByIdAndUpdate(id, user);
    },
    addPlayer: async function (id, playerId) {
        return await User.findByIdAndUpdate(
            { _id: id },
            {
                $push: {
                    players: {
                        _id: playerId
                    }
                },
            });
    }
}

module.exports = userService;