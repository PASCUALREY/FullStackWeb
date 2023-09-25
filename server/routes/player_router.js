const express = require("express");
const playerController = require("../controllers/player_controller");
const playerRouter = express.Router();
const middleWare = require("../middleware/auth-middleware");


playerRouter.get("/",middleWare.verify,playerController.getAll);
playerRouter.get("/:name",middleWare.verify,playerController.getById);
playerRouter.post("/vestir",middleWare.verify,playerController.store);

module.exports = playerRouter;


