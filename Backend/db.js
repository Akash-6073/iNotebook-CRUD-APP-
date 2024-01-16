const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://iNotebook:iNotebook@database.k9n5zm9.mongodb.net/iNotebook?retryWrites=true&w=majority"

 

function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(()=>console.log("Connected to Mongo Succesfully"))
    .catch((e)=>console.log("Not connected"))
  }

module.exports=connectToMongo;