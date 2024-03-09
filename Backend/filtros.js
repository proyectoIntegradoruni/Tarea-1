const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_1ww0D3VHTWNJBW3A0qy94sS9ahRTfps');

async function filtro(pregun) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "dime si esta pregunta cumple para una asesoria informativa juridica basandonos en las leyes de colombia(responde solo si o no): "+pregun


  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
 
  if(text == "Sí")
  {
    return true
    
  }
  else if (text == "No")
  {
    return false
  }
  
  


}

filtro(" ¿Qué puedo hacer si la empresa de energía no me da una respuesta satisfactoria a mi reclamación?")

module.exports = filtro;
