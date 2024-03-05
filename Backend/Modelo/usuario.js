const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    usuario: String,
    password: String,
    ide: Number,
});


const Usuario = mongoose.model("Usuarios", usuarioSchema);


module.exports =  Usuario;