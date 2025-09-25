"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/62895386288683?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "💬 Konsultasi Gratis",
      message: "Halo Meow Labs! Saya ingin konsultasi gratis tentang pembuatan website.",
    },
    {
      title: "💰 Tanya Harga",
      message: "Halo! Saya ingin mengetahui harga paket pembuatan website.",
    },
    {
      title: "⏰ Timeline Project",
      message: "Halo! Berapa lama waktu yang dibutuhkan untuk membuat website?",
    },
    {
      title: "🛠️ Custom Project",
      message: "Halo! Saya butuh website dengan fitur custom, bisa dibantu?",
    },
  ]

  // Warna khusus untuk tiap tombol
  const colors = [
    "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-200",
    "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-200",
    "bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-200",
    "bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-200",
  ]

  // Notification pulse animation for extra visibility
  const [showNotification, setShowNotification] = useState(true)

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

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
              className="text-black-400 hover:text-gray-600 transition-colors"
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
                className={`w-full text-left p-3 rounded-lg transition-colors text-sm border ${colors[index]}`}
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
      <div className="relative">
        {/* Text label above button */}
        <div className="absolute -top-10 right-0 bg-black text-white text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
          Chat dengan kami!
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-black transform rotate-45"></div>
        </div>

        {/* Notification badge */}
        {showNotification && !isOpen && (
          <div className="absolute -top-3 -left-16 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap animate-bounce">
            1 Pesan Baru
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-red-500 transform rotate-45 -translate-y-1/2"></div>
          </div>
        )}

        <div className="relative">
          {/* Ripple effect animation behind button */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>

          <button
            onClick={() => {
              setIsOpen(!isOpen)
              setShowNotification(false)
            }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-white relative z-10"
            aria-label="Chat WhatsApp"
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Online Indicator */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        )}
      </div>
    </div>
  )
}
