
const Usuario = require("../Modelo/usuario");

const autenticar = async (req, res, next) => {
    const { usuario, password } = req.body;
  
    try {
      // Comprobar si el usuario existe
      const usuario = await Usuario.findOne({ usuario });
  
      if (!usuario) {
        return res.status(401).json('Credenciales inválidas');
      }//hola
  
      // Revisar Password
      if (usuario.password === password) {
          
        // Generar el token JWT   
        req.usuario = usuario; // Agregar el objeto de usuario a la solicitud
        
        // Enviar respuesta con el token
        res.status(200).json({ respuesta: 'ok' ,user: usuario});
        
        next(); // Llamar al siguiente middleware
      } else {
        return res.status(400).json('Contraseña incorrecta');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Error interno del servidor');
    }
  };
  module.exports = {autenticar};
