const jwt = require('jsonwebtoken');

const verify = (req,res,next) =>{

    try {
        const decode =  jwt.verify(req.header("Authorization"),'secret_key');
        req.auth = decode;
        next();
    }catch(error){
        res.status(401).send("No autorizado");
    }     
}

module.exports = {verify}