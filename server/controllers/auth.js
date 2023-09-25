require('mongoose');
const Usr = require('../models/user');
const jwt = require('jsonwebtoken');

// Busca usuario existente y crea el token 
const login = async (name, pin) => {

    const cryptoPass = require('crypto')
        .createHash('sha256')
        .update(pin)
        .digest('hex');
    const result = await Usr.findOne({ name: name, pin: cryptoPass })
    let token = "";
    if (result) {
        token = jwt.sign({
            _id: result._id,
            name: result.name
        }, 'secret_key');
    }
    return token; // retorno 

}

module.exports = { login }