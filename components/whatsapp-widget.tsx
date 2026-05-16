"use client"

import { MessageCircle, X } from "lucide-react"
import { useEffect, useState } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(true)

  const handleChatbotRedirect = (message: string) => {
    const event = new CustomEvent("open-floating-chat", { detail: { message } })
    window.dispatchEvent(event)
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "Konsultasi Gratis",
      message: "Konsultasi gratis tentang pembuatan website",
    },
    {
      title: "Tanya Harga",
      message: "Informasi harga paket pembuatan website",
    },
    {
      title: "Timeline Project",
      message: "Informasi timeline pengerjaan website",
    },
    {
      title: "Custom Project",
      message: "Bantuan untuk website dengan fitur custom",
    },
  ]

  const colors = [
    "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-200",
    "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-200",
    "bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-200",
    "bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-200",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="font-semibold text-gray-800">Chatbot Meow Labs</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 transition-colors hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-4 text-sm text-gray-600">Halo! Pilih topik yang ingin Anda tanyakan:</p>

          <div className="space-y-2">
            {quickMessages.map((msg, index) => (
              <button
                key={msg.title}
                onClick={() => handleChatbotRedirect(msg.message)}
                className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${colors[index]}`}
              >
                {msg.title}
              </button>
            ))}
          </div>

          <div className="mt-3 border-t border-gray-100 pt-3">
            <p className="text-center text-xs text-gray-500">Chatbot Meow Labs Jawaban Instan</p>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute -top-10 right-0 whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-xs text-white shadow-md">
          Chat dengan AI
          <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-blue-600" />
        </div>

        {showNotification && !isOpen && (
          <div className="absolute -left-16 -top-3 whitespace-nowrap rounded-full bg-blue-500 px-3 py-1 text-xs text-white shadow-lg">
            Chatbot Aktif
            <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-blue-500" />
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen((current) => !current)
            setShowNotification(false)
          }}
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
          aria-label="Chat AI Assistant"
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </button>

        {!isOpen && <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-white bg-blue-500" />}
      </div>
    </div>
  )
}
