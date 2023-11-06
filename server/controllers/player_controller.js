const Player = require("../models/player");
const playerService = require("../service/player_service");
const userService = require("../service/user_service");

const playerController = {
    // Obtiene todos los jugadores
    getAll: async function (req, res) {
        let limit = req.query.limit;
        let offset = req.query.offset;
        try {
            const result = await playerService.getAll(limit, offset);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Obtiene un jugador en particular
    getById: async function (req, res) {
        const id = req.params.id;
        try {
            const result = await playerService.getById(id);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Obtiene los ultimos 5 jugadores creados
    getLast: async function (req, res) {
        try {
            const quantityOfPlayers = await playerService.getCountDocuments();
            let offset = quantityOfPlayers - 5;
            if (offset < 0) { //valido que no se vaya de rango
                offset = 0
            }
            const result = await playerService.getAll({}, offset);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Guarda un nuevo jugador
    store: async function (req, res) {

        const newPlayer = new Player(
            {
                name: req.body.name,
                character: req.body.character,
                superior: req.body.superior,
                inferior: req.body.inferior,
                calzado: req.body.calzado,
            });

        try {
            const result = await playerService.create(newPlayer);
            console.log(result);
            await userService.addPlayer(req.auth._id, result._id);
            res.status(200).json({
                message: 'actualizado',
                data: result,
                code: 200
            });
        }
        catch (error) {
            console.log(error.message);
            res.status(400).json({
                message: 'error',
                code: 400
            })
        }
    }
}

module.exports = playerController;