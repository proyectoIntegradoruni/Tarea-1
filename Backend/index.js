const express = require('express');
const  conectarDB = require('./conexion');
const Usuario = require("./Modelo/usuario");
const bodyParser = require('body-parser');
const cors = require("cors")

const autenticar = async (req, res) => {
  console.log(req.body); // Agrega esta línea para imprimir el cuerpo de la solicitud

 /**/ const { usuario, password } = req.body;

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
const app = express();
conectarDB();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000;



app.post('/api/login', autenticar);


app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
