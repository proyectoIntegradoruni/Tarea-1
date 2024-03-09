const express = require('express');
const  conectarDB = require('./conexion');
const Usuario = require("./Modelo/usuario");
const bodyParser = require('body-parser');
const Mensaje = require("./Modelo/conversacion")

const { run } = require("./gemini")

const cors = require("cors")

const autenticar = async (req, res) => {
  //console.log(req.body); 
  const { usuario, password } = req.body;

    try {
      const usuarios = await Usuario.findOne({ usuario });

      if (!usuarios) {
        return res.status(401).json('Credenciales inválidas');
      }

      if (usuarios.password === password) {
          
        req.usuarios = usuarios; // Agregar el objeto de usuario a la solicitud
        
        res.status(200).json({ respuesta: 'ok' });
        
      } else {
        return res.status(400).json('Contraseña incorrecta');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Error interno del servidor');
    }
};

//ingresar mensaje 
const agregarMensaje = async (req, res) => {
// console.log(100)
  const {  remitente, destinatario, contenido} = req.body;
  const nuevoMensaje = new Mensaje({
    remitente,
    destinatario,
    contenido
  });

  try {
    const { remitente, destinatario } = req.body;
    //console.log(req.body)
   
    
      

      await nuevoMensaje.validate(); // Valida el mensaje antes de guardarlo

      await nuevoMensaje.save();
      const mensajes = await Mensaje.find({
        $or: [
          { remitente, destinatario },
          { remitente: destinatario, destinatario: remitente },
        ],
      })
  
     
      res.status(200).json({ respuesta: nuevoMensaje });
      const historials = obtenerRoleParts(mensajes);
     
      run(historials)
      //console.log('Mensaje agregado exitosamente:', nuevoMensaje);
      return nuevoMensaje;
  } catch (error) {
      console.error('Error al agregar el mensaje:', error);
      throw error;
  }
};



const obtenerMensajes = async (req, res) => {

  const { remitente, destinatario } = req.body;
 // console.log(remitente)
  try {
    const { remitente, destinatario } = req.body;
    //console.log(req.body)
    const mensajes = await Mensaje.find({
      $or: [
        { remitente, destinatario },
        { remitente: destinatario, destinatario: remitente },
      ],
    })

    //const historials = obtenerRoleParts(mensajes);
    //console.log(historials)
    //run(historials)

   

    res.status(200).json({ mensajes });
    //console.log('Mensajes obtenidos exitosamente:', mensajes);
    return mensajes;
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
    throw error;
  }
};

// utils.js
function obtenerRoleParts(datos) {
  return datos.map(({ remitente, contenido }) => ({
    role: remitente === 'Admin' ? 'user' : remitente === 'Diciplinario' ? 'model' : remitente,
    parts: contenido,
  }));
}


const app = express();
conectarDB();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 4000;



app.post('/api/login', autenticar);
app.post('/api/mensaje', agregarMensaje);
app.post('/api/historial',obtenerMensajes);


app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
