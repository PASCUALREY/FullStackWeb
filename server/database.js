const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI,{usenewurlparser: true,  useUnifiedTopology: true})
.then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

const database = mongoose.connection;

module.export = database;


