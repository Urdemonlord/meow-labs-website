import { CloudClient, Collection, EmbeddingFunction } from "chromadb";
import { 
  generateGeminiResponse, 
  generateGreetingResponse, 
  generateFallbackResponse 
} from "./gemini-helper";

// Simple embedding function (same as in API routes)
export class SimpleEmbeddingFunction implements EmbeddingFunction {
  async generate(texts: string[]): Promise<number[][]> {
    return texts.map(text => {
      const embedding = new Array(32).fill(0);
      
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        embedding[i % embedding.length] += charCode / 1000;
      }
      
      const sum = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
      return embedding.map(val => val / (sum || 1));
    });
  }
}

// Initialize ChromaDB client
export const getChromaClient = () => {
  return new CloudClient({
    apiKey: process.env.CHROMA_API_KEY,
    tenant: process.env.CHROMA_TENANT,
    database: process.env.CHROMA_DATABASE,
  });
};

// Get or create knowledge collection
export const getKnowledgeCollection = async (): Promise<Collection> => {
  const client = getChromaClient();
  return await client.getOrCreateCollection({
    name: "knowledge_base",
    embeddingFunction: new SimpleEmbeddingFunction(),
  });
};

// Query the knowledge base and generate a response using Gemini
export async function generateResponse(query: string): Promise<string> {
  try {
    // Normalize query
    const normalizedQuery = query.toLowerCase().trim();
    
    // Handle greetings with Gemini
    if (isGreeting(normalizedQuery)) {
      return await generateGreetingResponse();
    }
    
    const collection = await getKnowledgeCollection();
    
    // Query the collection for relevant documents
    const results = await collection.query({
      queryTexts: [query],
      nResults: 5, // Get top 5 most relevant documents
    });
    
    // Filter out null values and convert to appropriate types
    const documents = (results.documents?.[0] || []).filter((doc): doc is string => doc !== null);
    
    if (documents.length === 0) {
      // Use Gemini fallback when no context found
      return await generateFallbackResponse(query);
    }
    
    // Use Gemini to generate response with ChromaDB context
    return await generateGeminiResponse(query, documents);
  } catch (error) {
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

// Generate contextual response based on query intent
function generateContextualResponse(
  query: string,
  documents: string[],
  metadatas: Record<string, any>[]
): string {
  // Detect multiple intents
  const intents = detectIntents(query);
  
  // Handle specific query types with natural language
  if (intents.has('price') || intents.has('package')) {
    return generatePriceResponse(documents, metadatas, query);
  } 
  
  if (intents.has('contact') || intents.has('whatsapp')) {
    return generateContactResponse(documents, metadatas, query);
  }
  
  if (intents.has('service') || intents.has('features')) {
    return generateServicesResponse(documents, metadatas, query);
  }
  
  if (intents.has('team') || intents.has('about')) {
    return generateTeamResponse(documents, metadatas, query);
  }
  
  if (intents.has('portfolio') || intents.has('project')) {
    return generatePortfolioResponse(documents, metadatas, query);
  }
  
  if (intents.has('process') || intents.has('how')) {
    return generateProcessResponse(documents, metadatas, query);
  }
  
  if (intents.has('time') || intents.has('duration')) {
    return generateTimeResponse(documents, metadatas, query);
  }
  
  // Generic response with natural language
  return generateGenericResponse(documents, metadatas, query);
}

// Detect user intent from query
function detectIntents(query: string): Set<string> {
  const intents = new Set<string>();
  
  // Price and package related
  if (/harga|biaya|tarif|budget|murah|mahal|berapa|cost|price/.test(query)) {
    intents.add('price');
  }
  if (/paket|package|plan|pilihan|opsi/.test(query)) {
    intents.add('package');
  }
  
  // Contact related
  if (/kontak|hubungi|telp|telepon|nomor|call|email/.test(query)) {
    intents.add('contact');
  }
  if (/whatsapp|wa|chat/.test(query)) {
    intents.add('whatsapp');
  }
  
  // Service related
  if (/layanan|jasa|service|produk|offering/.test(query)) {
    intents.add('service');
  }
  if (/fitur|feature|fungsi|kemampuan|bisa/.test(query)) {
    intents.add('features');
  }
  
  // Team and about
  if (/tim|team|karyawan|staff|anggota/.test(query)) {
    intents.add('team');
  }
  if (/tentang|about|profil|profile|siapa/.test(query)) {
    intents.add('about');
  }
  
  // Portfolio and projects
  if (/portfolio|portofolio|hasil|karya|contoh|example/.test(query)) {
    intents.add('portfolio');
  }
  if (/project|proyek|client|klien|pengalaman/.test(query)) {
    intents.add('project');
  }
  
  // Process
  if (/proses|cara|bagaimana|how|langkah|step/.test(query)) {
    intents.add('process');
  }
  
  // Time and duration
  if (/lama|waktu|durasi|cepat|time|kapan|berapa lama/.test(query)) {
    intents.add('time');
  }
  if (/deadline|selesai|finish/.test(query)) {
    intents.add('duration');
  }
  
  return intents;
}

// Helper functions for different types of responses
function generatePriceResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Senang Anda tertarik dengan layanan kami! 😊\n\n";
  response += "Berikut informasi harga paket website dari Meow Labs:\n\n";
  
  // Extract price information from documents
  let priceInfo = "";
  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];
    if (doc.includes("Rp") || doc.includes("harga") || doc.includes("Paket")) {
      priceInfo += doc + "\n\n";
    }
  }
  
  if (priceInfo) {
    response += priceInfo;
  } else {
    response += "📋 Paket Standar:\n";
    response += "• Landing Page: Mulai Rp 3 juta\n";
    response += "• Company Profile: Mulai Rp 5 juta\n";
    response += "• Toko Online: Mulai Rp 7 juta\n";
    response += "• Website Custom: Harga menyesuaikan kebutuhan\n\n";
  }
  
  response += "💡 Semua paket sudah termasuk:\n";
  response += "✓ Design responsive\n";
  response += "✓ SEO friendly\n";
  response += "✓ Hosting 1 tahun\n";
  response += "✓ Maintenance\n\n";
  response += "Untuk konsultasi gratis dan penawaran khusus, yuk chat langsung:\n";
  response += "📱 WhatsApp: +62 895-3862-88683\n";
  response += "✉️ Email: admin@meowlabs.id";
  
  return response;
}

function generateContactResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Senang bisa membantu! 😊\n\n";
  response += "Anda bisa menghubungi Meow Labs melalui:\n\n";
  response += "📱 **WhatsApp**: +62 895-3862-88683\n";
  response += "   (Response time: < 1 jam)\n\n";
  response += "✉️ **Email**: admin@meowlabs.id\n";
  response += "   (Response time: < 24 jam)\n\n";
  response += "🌐 **Website**: https://meowlabs.id\n\n";
  response += "📍 **Lokasi**: Semarang, Jawa Tengah\n\n";
  response += "⏰ **Jam Operasional**:\n";
  response += "   Senin-Minggu: 08:00 - 22:00 WIB\n\n";
  response += "**Media Sosial**:\n";
  response += "📸 Instagram: @meowlabs.id\n";
  response += "👍 Facebook: meowlabs.id\n\n";
  response += "Tim kami siap membantu project website Anda! 🚀";
  
  return response;
}

function generateServicesResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Meow Labs menyediakan berbagai layanan web development profesional! 💻\n\n";
  
  // Extract service information
  let serviceInfo = "";
  const servicesFound = new Set<string>();
  
  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];
    const metadata = metadatas[i];
    
    if (metadata?.service_type && !servicesFound.has(metadata.service_type)) {
      servicesFound.add(metadata.service_type);
      serviceInfo += "• " + doc + "\n\n";
    } else if ((doc.includes("website") || doc.includes("Website")) && !doc.includes("Harga")) {
      serviceInfo += "• " + doc + "\n\n";
    }
  }
  
  if (serviceInfo) {
    response += serviceInfo;
  } else {
    response += "**Layanan Utama Kami**:\n\n";
    response += "1️⃣ **Landing Page**\n";
    response += "   Perfect untuk promosi produk/event\n\n";
    response += "2️⃣ **Company Profile**\n";
    response += "   Profesional untuk bisnis Anda\n\n";
    response += "3️⃣ **Toko Online / E-commerce**\n";
    response += "   Jualan online jadi mudah\n\n";
    response += "4️⃣ **Aplikasi Web Custom**\n";
    response += "   Sesuai kebutuhan spesifik Anda\n\n";
    response += "5️⃣ **Website Maintenance**\n";
    response += "   Keep your website running smooth\n\n";
  }
  
  response += "✨ **Kenapa pilih Meow Labs?**\n";
  response += "• Tim berpengalaman & profesional\n";
  response += "• Harga terjangkau, kualitas premium\n";
  response += "• After-sales support\n";
  response += "• Fast response & revision\n\n";
  response += "Mau konsultasi gratis? Hubungi kami:\n";
  response += "📱 WhatsApp: +62 895-3862-88683";
  
  return response;
}

function generateTeamResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Tim Meow Labs terdiri dari profesional muda yang passionate! 🚀\n\n";
  
  // Find team information from documents
  let teamInfo = "";
  for (let i = 0; i < documents.length; i++) {
    if (documents[i].toLowerCase().includes("tim") || documents[i].toLowerCase().includes("team")) {
      teamInfo = documents[i];
      break;
    }
  }
  
  if (teamInfo) {
    response += teamInfo + "\n\n";
  } else {
    response += "**Core Team**:\n\n";
    response += "👨‍💼 **Hasrinata Arya Afendi** - Founder & CEO\n";
    response += "💡 Visioner yang memimpin arah Meow Labs\n\n";
    response += "👨‍💻 **Development Team**:\n";
    response += "• Yusuf Nur Cahyo - IoT Developer\n";
    response += "• Ahmad Munip - Backend Specialist\n";
    response += "• Herinta Armantya - Frontend Expert\n\n";
    response += "🎨 **Design Team**:\n";
    response += "• Muhammad Fikar Firdiansyah - UI/UX Designer\n\n";
    response += "📊 **Management & Strategy**:\n";
    response += "• Habib Khulafa Panji Langit - Project Manager\n";
    response += "• Alfian Nugroho Jati - Social Media Strategist\n";
    response += "• Sahad Ibrohim & Rafi Yudha - Growth Strategist\n\n";
    response += "🤝 **Support Team**:\n";
    response += "• Arisyad Faizon - Executive Assistant\n\n";
  }
  
  response += "💪 Setiap anggota tim kami punya keahlian khusus untuk memastikan project Anda sukses!\n\n";
  response += "Mau diskusi project? Chat yuk:\n";
  response += "📱 WhatsApp: +62 895-3862-88683";
  
  return response;
}

function generatePortfolioResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Kami bangga dengan portfolio project kami! 🎉\n\n";
  
  // Extract portfolio info from documents
  let portfolioInfo = "";
  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];
    if (doc.toLowerCase().includes("portfolio") || doc.toLowerCase().includes("klien") || doc.toLowerCase().includes("project")) {
      portfolioInfo += doc + "\n\n";
    }
  }
  
  if (portfolioInfo) {
    response += portfolioInfo;
  } else {
    response += "**Beberapa Klien Kami**:\n\n";
    response += "🏥 RSGM - Rumah Sakit Gigi & Mulut\n";
    response += "🏛️ Kabupaten Grobogan - Website Pemerintahan\n";
    response += "⚽ Sportify - Platform Olahraga\n";
    response += "🏗️ PWK Consultant - Perusahaan Konsultan\n";
    response += "🏢 Telkom - Corporate Website\n";
    response += "🎓 BBPMP - Website Pendidikan\n\n";
  }
  
  response += "📊 **Stats**:\n";
  response += "• 100+ Project selesai\n";
  response += "• 95% Client satisfaction\n";
  response += "• Response time < 1 jam\n\n";
  response += "Mau lihat portfolio lengkap atau diskusi project Anda?\n";
  response += "📱 WhatsApp: +62 895-3862-88683\n";
  response += "🌐 Visit: https://meowlabs.id";
  
  return response;
}

function generateProcessResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Proses pembuatan website di Meow Labs simple dan jelas! 📋\n\n";
  
  response += "**5 Langkah Mudah**:\n\n";
  response += "1️⃣ **Konsultasi & Brief**\n";
  response += "   Kita diskusi kebutuhan, goals, dan budget Anda\n\n";
  response += "2️⃣ **Proposal & Agreement**\n";
  response += "   Kami kirim proposal detail + timeline\n\n";
  response += "3️⃣ **Design & Development**\n";
  response += "   Tim mulai kerja magic! ✨\n";
  response += "   (Anda bisa monitor progress)\n\n";
  response += "4️⃣ **Review & Revision**\n";
  response += "   Kami revisi sampai Anda puas\n\n";
  response += "5️⃣ **Launch & Support**\n";
  response += "   Website live + training + support 🚀\n\n";
  response += "💡 **Plus**: Free maintenance periode tertentu!\n\n";
  response += "Mau mulai project? Yuk konsultasi dulu:\n";
  response += "📱 WhatsApp: +62 895-3862-88683";
  
  return response;
}

function generateTimeResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Waktu pengerjaan tergantung jenis website yang Anda mau! ⏱️\n\n";
  
  response += "**Estimasi Waktu**:\n\n";
  response += "⚡ **Landing Page**: 1-2 minggu\n";
  response += "   Simple, fast, effective!\n\n";
  response += "🏢 **Company Profile**: 2-4 minggu\n";
  response += "   Professional & complete\n\n";
  response += "🛍️ **Toko Online**: 4-6 minggu\n";
  response += "   Full e-commerce features\n\n";
  response += "🎨 **Website Custom**: 6-12 minggu\n";
  response += "   Sesuai kompleksitas project\n\n";
  response += "💡 **Note**: \n";
  response += "• Timeline bisa lebih cepat untuk urgent project\n";
  response += "• Kami always on-time dengan deadline!\n";
  response += "• Fast response untuk revision\n\n";
  response += "Ada deadline khusus? Let's discuss!\n";
  response += "📱 WhatsApp: +62 895-3862-88683";
  
  return response;
}

function generateGenericResponse(documents: string[], metadatas: Record<string, any>[], query: string): string {
  let response = "Berdasarkan yang saya temukan: 📚\n\n";
  
  // Combine relevant information from documents
  const relevantDocs = documents.slice(0, 3); // Top 3 most relevant
  
  for (let i = 0; i < relevantDocs.length; i++) {
    response += relevantDocs[i] + "\n\n";
  }
  
  response += "---\n\n";
  response += "Ada pertanyaan lain? Atau mau langsung diskusi project?\n";
  response += "📱 WhatsApp: +62 895-3862-88683\n";
  response += "✉️ Email: admin@meowlabs.id\n\n";
  response += "Saya siap membantu! 😊";
  
  return response;
}