const Player = require("../models/player")
const Vestimenta = require("../service/oufit_service");

const validateVestimenta = async (player) =>{
    const superior = await Vestimenta.getById(player.superior);
    const inferior = await Vestimenta.getById(player.inferior);
    const calzado = await Vestimenta.getById(player.calzado);
    return (superior && superior.category === "superior" && inferior && inferior.category === "inferior" 
    && calzado && calzado.category === "calzado")
}

const playerService = {
    getAll: async function (limit, offset) {

        return await Player.find().limit(limit).skip(offset);

    },
    getById: async function (name) {
        return await Player.findOne({ name });
    },
    getCountDocuments: async function (){
        const result = await Player.estimatedDocumentCount({});
        console.log(result);
        return result;
    },
    create: async function (player) {
        if (await validateVestimenta(player)){
            return await Player.create(player);
        }
        return null;
    },
    delete: async function (id) {
        return await Player.findByIdAndDelete(id);
    },
    update: async function (id, player) {
        if (await validateVestimenta(player)){
            return await Player.findByIdAndUpdate(id, player)
        }
        else{
            return null;
        }
    },

}


module.exports = playerService;

