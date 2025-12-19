import { queryCollection } from "./chroma-api";
import { 
  generateGeminiResponse, 
  generateGreetingResponse, 
  generateFallbackResponse 
} from "./gemini-helper";

// Query the knowledge base and generate a response using Gemini
export async function generateResponse(query: string): Promise<string> {
  try {
    // Normalize query
    const normalizedQuery = query.toLowerCase().trim();
    
    // Handle greetings with Gemini
    if (isGreeting(normalizedQuery)) {
      return await generateGreetingResponse();
    }
    
    // Query the knowledge base
    try {
      const results = await queryCollection("knowledge_base", query, 5);
      
      // Extract documents from results
      const documents = (results.documents?.[0] || []).filter(
        (doc): doc is string => typeof doc === 'string' && doc !== null
      );
      
      if (documents.length > 0) {
        // Use Gemini to generate response with knowledge base context
        return await generateGeminiResponse(query, documents);
      }
    } catch (chromaError) {
      console.error("Chroma query error:", chromaError);
      // Fall back to Gemini without context
    }
    
    // Use Gemini fallback when no context found
    return await generateFallbackResponse(query);
  } catch (error) {
    console.error("Error generating response:", error);
    return "Maaf, terjadi kesalahan teknis saat mencari jawaban. 😔\n\n" +
           "Silakan coba lagi atau hubungi tim kami langsung:\n" +
           "📱 WhatsApp: +62 895-3862-88683\n" +
           "✉️ Email: admin@meowlabs.id";
  }
}

// Check if message is a greeting
function isGreeting(query: string): boolean {
  const greetings = [
    'hai', 'halo', 'hi', 'hello', 'hey', 'selamat pagi', 
    'selamat siang', 'selamat sore', 'selamat malam',
    'assalamualaikum', 'salam', 'permisi'
  ];
  return greetings.some(greeting => query.startsWith(greeting));
}
