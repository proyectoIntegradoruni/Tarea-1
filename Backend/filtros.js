const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_1ww0D3VHTWNJBW3A0qy94sS9ahRTfps');

async function filtro(pregun, asesor) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  console.log("estamos en filtrosa"+asesor)
  if(asesor === "Diciplinario")
  {
    const prompt = "dime si esta pregunta cumple para una asesoria informativa diciplinaria y no juridica(responde solo si o no): "+pregun

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text)
    console.log(typeof text);
    return text
  }
  else if(asesor === "Juridico")
  {
    const prompt = "dime si esta pregunta cumple para una asesoria informativa juridica basandonos en las leyes de colombia(responde solo si o no): "+pregun

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text)
    console.log(typeof text);
    return text
  }
  else
  {
    const text = "falla de filtros"
    return text
  }
  

}


module.exports = filtro;
