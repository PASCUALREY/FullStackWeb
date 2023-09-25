const express = require("express");
const oufitController = require("../controllers/oufit_controller");
const oufitRouter = express.Router();
const middleWare = require("../middleware/auth-middleware");


oufitRouter.get("/",middleWare.verify,oufitController.getAll);
oufitRouter.get("/:category",middleWare.verify,oufitController.getByCategory);

module.exports = oufitRouter;