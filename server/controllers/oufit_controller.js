const oufitService = require("../service/oufit_service");

const oufitController = {
    // Obtiene todas las vestimentas
    getAll: async function (req, res) {
        let limit = req.query.limit;
        let offset = req.query.offset;
        try {
            const result = await oufitService.getAll(limit, offset);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Obtiene vestimentas por categoria 
    getByCategory: async function (req, res) {
        let limit = req.query.limit;
        let offset = req.query.offset;
        let category = req.params.category;
        try {
            const result = await oufitService.getByCategory(limit, offset, category);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    getByID: async function (req, res) {
        const id = req.params.id;
        try {
            const result = await oufitService.getById(id);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    }
}

module.exports = oufitController;