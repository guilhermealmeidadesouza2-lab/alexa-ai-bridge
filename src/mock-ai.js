export async function generateMockReply(userText) {
  const cleanText = (userText || "").trim();

  if (!cleanText) {
    return "Não ouvi nada direito. O que você quer perguntar?";
  }

  return `Você disse: ${cleanText}. Modo gratuito ativo por enquanto, sem gastar API.`;
}