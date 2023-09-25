const User = require("../models/user");
const userService = require("../service/user_service");
const AuthController = require("../controllers/auth");

const userController = {
    // Obtiene todos los usuarios
    getAll: async function (req, res) {
        let limit = req.query.limit;
        let offset = req.query.offset;
        try {
            const token = await userService.getAll(limit, offset)
            res.status(200).json(token);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error. Intente más tarde.")
        }
    },
    // Obtiene un usuario en particular
    getById: async function (req, res) {
        const name = req.params.name;
        const pin = req.params.pin;
        const cryptoPass = require('crypto')
            .createHash('sha256')
            .update(pin)
            .digest('hex');
        const user = await userService.getById(name, cryptoPass);
        res.json(user);
    },
    // Almacena un usuario nuevo
    store: async function (req, res) {
        const name = req.params.name;
        const pin = req.params.pin;

        const cryptoPass = require('crypto')
            .createHash('sha256')
            .update(pin)
            .digest('hex');

        let existUser = await userService.getById(name, cryptoPass);
        if (!existUser) {

            const newUser = new User(
                {
                    name: name,
                    pin: cryptoPass,
                });
            try {
                const token = await userService.create(newUser);
                console.log(token);
                res.status(201).json({
                    message: 'creado',
                    data: token,
                    code: 201
                });
            } catch (error) {
                console.log(error.message);
                res.status(400).json({
                    message: 'error',
                    code: 400
                });
            }
        } else {
            res.status(200).json({
                message: 'Usuario ya existe'
            });
        }
    },
    // Elimina un usuario
    delete: async function (req, res) {
        const id = req.params.id
        try {
            const token = await userService.delete(id);
            res.status(200).json({
                message: 'eliminado',
                data: token,
                code: 200
            })
        }
        catch (error) {
            console.log(error.message);
            res.status(400).json({
                message: 'error',
                code: 400
            });
        }
    },
    // Permite hacer el login 
    login: async (req,res) => {
        const name = req.body.name;
        const pin = req.body.pin;
        try{
          const token = await AuthController.login(name,pin);
          if(token){
            res.status(200).json(token);
          }else{
            res.status(401).send("Credenciales incorrectas")
          }
        }catch(error){
            res.status(500).send("Error");
        }  
    }
}

module.exports = userController;
