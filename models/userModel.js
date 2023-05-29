const mongoose = require("mongoose");

const Uri = "mongodb+srv://admin:miJL9af81c4YHXQg@dbusers.gyqpd0i.mongodb.net/DBUsers?retryWrites=true&w=majority";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
});

module.exports = mongoose.model('users', userSchema);