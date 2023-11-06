const express = require("express");
const userController = require("../controllers/user_controller");
const middelWare = require("../middleware/auth-middleware");
const userRouter = express.Router();



userRouter.post('/',userController.login);

userRouter.get("/usuarios",middelWare.verify,userController.getAll);

userRouter.post("/:name/:pin",userController.store);

userRouter.get("/usuarios/buscar",middelWare.verify,userController.getById);


module.exports = userRouter;