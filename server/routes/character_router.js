const express = require("express");
const characterController = require("../controllers/character_controller");
const characterRouter = express.Router();
const middleWare = require("../middleware/auth-middleware");


characterRouter.get("/",middleWare.verify,characterController.getAll);
characterRouter.get("/:id",characterController.getByID);
characterRouter.post("/",middleWare.verify,characterController.store);

module.exports = characterRouter;