const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: "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",
});

async function main() {
const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

console.log(chatCompletion.choices[0])

}

main();
//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