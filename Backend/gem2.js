const { GoogleGenerativeAI } = require("@google/generative-ai");
const filtro = require("./filtros");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_1ww0D3VHTWNJBW3A0qy94sS9ahRTfps');

async function run2(pregun, asesor) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const filtroResult = await filtro(pregun, asesor);
  const prompt = pregun;

  console.log("Resultado de filtro(pregun):", filtroResult);

  let opcion = "";
  

  if (filtroResult === "Sí") {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    opcion = response.text();
    console.log("el texto dice: " + opcion);
  } else if (filtroResult === "No" && asesor === "Juridico") {
    opcion = "Entiendo tu pregunta, pero mi especialidad es proporcionar asesoría jurídica informativa. Si tienes consultas específicas relacionadas con aspectos legales, estaré encantado de ayudarte en ese ámbito. Sin embargo, para temas fuera de esa área, te recomendaría buscar orientación especializada en el tema correspondiente";
    console.log("el texto de opcion: " + opcion);
  } else if (filtroResult === "No" && asesor === "Diciplinario") {
    opcion = "Entiendo tu pregunta, pero mi especialidad es proporcionar asesoría diciplinaria informativa. Si tienes consultas específicas relacionadas con aspectos diciplinarios, estaré encantado de ayudarte en ese ámbito. Sin embargo, para temas fuera de esa área, te recomendaría buscar orientación especializada en el tema correspondiente";
    console.log("el texto de opcion: " + opcion);
  } else {
    opcion = "No entiendo tu pregunta";
  }

  const text = opcion;
  return text;
}

module.exports = run2;
