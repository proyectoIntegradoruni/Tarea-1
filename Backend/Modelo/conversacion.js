
const mongoose = require('mongoose');

const mensajeSchema = mongoose.Schema({
    remitente: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al principio y al final
    },
    destinatario: {
        type: String,
        required: true,
        trim: true
    },
    contenido: {
        type: String,
        required: true,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);


module.exports =  Mensaje;