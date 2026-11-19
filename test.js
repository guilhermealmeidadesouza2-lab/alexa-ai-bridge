import { handleVoiceInput } from "./src/handler.js";

const resultado = await handleVoiceInput("qual a previsão do tempo hoje?");
console.log("Resposta que iria para a Alexa:");
console.log(resultado);