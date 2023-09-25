const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const database = require('./database');
const userRouter = require("./routes/user_router");
const playerRouter = require("./routes/player_router");
const oufitRouter = require("./routes/oufit_router");
const characterRouter = require("./routes/character_router");
const publicRouter = require("./routes/public_router");
require('dotenv').config();
const PORT = process.env.PORT


app.use(express.json());
app.use(cors());

app.use(express.static('./server/public'));

http.listen(PORT,() =>{
    console.log(`listening to ${PORT}`);
})

app.get('/',function(req,res){
    res.send('servidor activo');
})

app.use("/api/login",userRouter);
app.use("/api/jugadores",playerRouter);
app.use("/api/vestimenta",oufitRouter);
app.use("/api/personajes",characterRouter);
app.use("/api/public",publicRouter);






