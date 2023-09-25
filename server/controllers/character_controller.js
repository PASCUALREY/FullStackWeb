const characterService = require("../service/character_service");

const characterController = {
    // Obtiene todas las plantillas
    getAll: async function (req, res) {
        let limit = req.query.limit;
        let offset = req.query.offset;
        try {
            const result = await characterService.getAll(limit,offset);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Guarda una nueva plantilla
    store: async function (req,res){
        const faceImg = req.body.faceImg;
        const bodyImg = req.body.bodyImg;
        try{
            const result = await characterService.store({faceImg,bodyImg});
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
        }
}

module.exports = characterController;