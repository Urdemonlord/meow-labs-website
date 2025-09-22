"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/62895386288683?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "💬 Konsultasi Gratis",
      message: "Halo Meow Labs! Saya ingin konsultasi gratis tentang pembuatan website."
    },
    {
      title: "💰 Tanya Harga",
      message: "Halo! Saya ingin mengetahui harga paket pembuatan website."
    },
    {
      title: "⏰ Timeline Project",
      message: "Halo! Berapa lama waktu yang dibutuhkan untuk membuat website?"
    },
    {
      title: "🛠️ Custom Project",
      message: "Halo! Saya butuh website dengan fitur custom, bisa dibantu?"
    }
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Quick Messages Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">Meow Labs Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Halo! 👋 Pilih topik yang ingin Anda tanyakan:
          </p>
          
          <div className="space-y-2">
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppContact(msg.message)}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm border border-gray-100 hover:border-gray-200"
              >
                {msg.title}
              </button>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Response time: &lt; 2 jam • Konsultasi Gratis
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Online Indicator */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      )}
    </div>
  )
}