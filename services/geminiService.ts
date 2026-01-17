import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY is expected to be available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingCopy = async (currentHeadline: string, context: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional copywriter for a home service business called Dr HVAC in Brampton. 
      Current Headline: "${currentHeadline}"
      Context: ${context}
      
      Task: Generate a fresh, catchy, and reassuring headline variation. Keep it under 15 words. 
      Return ONLY the headline text, no quotes.`,
    });
    return response.text?.trim() || currentHeadline;
  } catch (error) {
    console.error("Failed to generate copy:", error);
    return currentHeadline;
  }
};

export const generateHeroImage = async (prompt: string): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image for quick generation as per guidelines for general image tasks
    // If high quality is needed, we would switch to gemini-3-pro-image-preview
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
          imageSize: "1K" // Note: Only effective if model supports it, but good practice
        }
      }
    });

    // Extract image
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Failed to generate image:", error);
    return null;
  }
};

export const generateSupportAnswer = async (question: string): Promise<string> => {
   try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AI assistant for Dr HVAC. 
      Owner: Brendon. 
      City: Brampton. 
      Services: Heating, Cooling, Diagnosis, Repair.
      Tone: Friendly, Professional, Royal Blue and White brand identity.
      
      User Question: "${question}"
      
      Answer clearly and briefly (max 50 words).`,
    });
    return response.text || "I'm sorry, I couldn't get an answer for that right now.";
  } catch (error) {
    console.error("Failed to generate answer:", error);
    return "Our support system is temporarily offline. Please call us directly.";
  }
}