const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyA_1ww0D3VHTWNJBW3A0qy94sS9ahRTfps');

async function run(historial) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history: historial,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg = "como hace la vaca?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}


// Exporta la función run
module.exports = { run }