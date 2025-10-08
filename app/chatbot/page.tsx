import { WorkingChatInterface } from "@/components/working-chat-interface";

export const metadata = {
  title: "Chatbot Meow Labs | Asisten Virtual untuk Informasi Web Development",
  description: "Dapatkan informasi tentang layanan web development Meow Labs melalui asisten virtual kami. Tanya tentang harga, layanan, dan lebih banyak lagi.",
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Asisten Virtual Meow Labs</h1>
          <p className="mt-2 text-gray-600">
            Tanyakan informasi tentang layanan web development kami
          </p>
        </div>
        
        <div className="max-w-lg mx-auto h-[600px] rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <WorkingChatInterface />
        </div>
        
        <div className="mt-12 max-w-lg mx-auto text-center text-gray-600">
          <h2 className="font-semibold text-lg mb-2">Bagaimana Asisten Ini Dapat Membantu Anda?</h2>
          <ul className="text-left list-disc list-inside space-y-1">
            <li>Informasi tentang layanan web development kami</li>
            <li>Detail paket dan harga untuk berbagai jenis website</li>
            <li>Kontak dan cara menghubungi tim Meow Labs</li>
            <li>Informasi tentang tim dan kemampuan kami</li>
          </ul>
          <p className="mt-4 text-sm">
            Asisten virtual ini menggunakan teknologi RAG (Retrieval Augmented Generation) 
            untuk menjawab pertanyaan Anda berdasarkan basis pengetahuan Meow Labs.
          </p>
        </div>
      </div>
    </div>
  );
}