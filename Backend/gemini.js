const { GoogleGenerativeAI } = require("@google/generative-ai");
const  conectarDB = require('./conexion');
const Mensaje = require("./Modelo/conversacion")

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_1ww0D3VHTWNJBW3A0qy94sS9ahRTfps');

async function run(historial) {
 console.log(historial)
  // For text-only input, use the gemini-pro model
 const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history: historial.slice(0, -1),
    generationConfig: {
      maxOutputTokens: 100,
    },
  });
  const pregunta = historial[historial.length - 1];
  const msg = pregunta.parts
  console.log('entro',msg)
 


  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text)
  const  remitente ='Diciplinario'
  const destinatario ='Admin'
  const contenido = text
  console.log('--------------')
 
 const nuevoMensaje = new Mensaje({
    remitente,
    destinatario,
    contenido
  });

  try {
      

      await nuevoMensaje.validate(); // Valida el mensaje antes de guardarlo

      await nuevoMensaje.save();

      
    

      console.log('Mensaje agregado exitosamente geminis:', nuevoMensaje);
      return nuevoMensaje;
      
  } catch (error) {
      console.error('Error al agregar el mensaje:', error);
      throw error;
  } /**/
  
}


// Exporta la función run
module.exports = { run }