import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// Generate response using Gemini with context from ChromaDB
export async function generateGeminiResponse(
  userQuery: string,
  contextDocuments: string[]
): Promise<string> {
  try {
    // Build context from retrieved documents
    const context = contextDocuments.join("\n\n");
    
    // Create prompt for Gemini
    const prompt = `Kamu adalah asisten virtual Meow Labs, sebuah perusahaan web development profesional di Semarang.

INFORMASI PERUSAHAAN:
${context}

KONTAK:
- WhatsApp: +62 895-3862-88683
- Email: admin@meowlabs.id
- Website: https://meowlabs.id
- Lokasi: Semarang, Jawa Tengah
- Jam Operasional: Senin-Minggu, 08:00-22:00 WIB

INSTRUKSI:
1. Jawab pertanyaan user dengan ramah, natural, dan profesional
2. Gunakan emoji secukupnya untuk membuat percakapan lebih friendly 😊
3. Berikan informasi berdasarkan context yang diberikan
4. Jika tidak tahu jawaban pasti, arahkan user untuk menghubungi tim langsung
5. Selalu include call-to-action (WhatsApp/Email) di akhir respons
6. Gunakan bahasa Indonesia yang casual tapi tetap profesional
7. Format respons dengan rapi menggunakan bullet points jika perlu
8. Jangan terlalu panjang, maksimal 300 kata

PERTANYAAN USER:
${userQuery}

JAWABAN:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    });
    
    return response.text || "Maaf, saya tidak dapat memproses pertanyaan Anda saat ini. Silakan hubungi tim kami di WhatsApp +62 895-3862-88683";
  } catch (error) {
    throw error;
  }
}

// Generate greeting response
export async function generateGreetingResponse(): Promise<string> {
  try {
    const prompt = `Kamu adalah asisten virtual Meow Labs, perusahaan web development di Semarang.

Buat sapaan ramah dan welcoming untuk user yang baru chat. Include:
1. Sapaan yang friendly
2. Perkenalan singkat Meow Labs
3. Contoh pertanyaan yang bisa ditanyakan (harga, layanan, portfolio, dll)
4. Ajakan untuk bertanya

Gunakan emoji dan bahasa casual tapi profesional. Maksimal 150 kata.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    });
    
    return response.text || "Halo! 👋 Selamat datang di Meow Labs!\n\n" +
           "Saya asisten virtual yang siap membantu Anda dengan informasi tentang layanan web development kami.\n\n" +
           "Anda bisa bertanya tentang:\n" +
           "• Harga dan paket layanan\n" +
           "• Jenis website yang kami buat\n" +
           "• Portfolio dan pengalaman kami\n" +
           "• Cara menghubungi tim\n\n" +
           "Silakan tanya apa saja! 😊";
  } catch (error) {
    return "Halo! 👋 Selamat datang di Meow Labs!\n\n" +
           "Saya asisten virtual yang siap membantu Anda dengan informasi tentang layanan web development kami.\n\n" +
           "Anda bisa bertanya tentang:\n" +
           "• Harga dan paket layanan\n" +
           "• Jenis website yang kami buat\n" +
           "• Portfolio dan pengalaman kami\n" +
           "• Cara menghubungi tim\n\n" +
           "Silakan tanya apa saja! 😊";
  }
}

// Fallback response when no context found
export async function generateFallbackResponse(userQuery: string): Promise<string> {
  try {
    const prompt = `Kamu adalah asisten virtual Meow Labs, perusahaan web development di Semarang.

User bertanya: "${userQuery}"

Tapi kamu tidak punya informasi spesifik untuk menjawab pertanyaan ini.

Buat respons yang:
1. Minta maaf dengan ramah
2. Tawarkan untuk menghubungi tim langsung
3. Berikan kontak: WhatsApp +62 895-3862-88683, Email admin@meowlabs.id
4. Tetap helpful dan friendly

Maksimal 100 kata.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    });
    
    return response.text || "Maaf, saya tidak memiliki informasi spesifik tentang pertanyaan Anda. 😔\n\n" +
           "Namun, Anda bisa menghubungi tim Meow Labs langsung untuk informasi lebih detail:\n" +
           "📱 WhatsApp: +62 895-3862-88683\n" +
           "✉️ Email: admin@meowlabs.id\n\n" +
           "Tim kami siap membantu Anda!";
  } catch (error) {
    return "Maaf, saya tidak memiliki informasi spesifik tentang pertanyaan Anda. 😔\n\n" +
           "Namun, Anda bisa menghubungi tim Meow Labs langsung untuk informasi lebih detail:\n" +
           "📱 WhatsApp: +62 895-3862-88683\n" +
           "✉️ Email: admin@meowlabs.id\n\n" +
           "Tim kami siap membantu Anda!";
  }
}