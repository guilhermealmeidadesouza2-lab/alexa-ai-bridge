import { generateMockReply } from "./mock-ai.js";

export async function handleVoiceInput(userText) {
  const speechText = await generateMockReply(userText);

  return {
    speechText,
    shouldEndSession: false
  };
}