const express = require("express");
const playerController = require("../controllers/player_controller");
const publicRouter = express.Router();


publicRouter.get("/ultimospersonajes",playerController.getLast);

module.exports = publicRouter;