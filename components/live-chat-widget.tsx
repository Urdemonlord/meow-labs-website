"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Clock, Users, Zap } from 'lucide-react'
import { LoadingState, ErrorBoundary } from "@/components/loading-state"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Selamat datang di Meow Labs! 👋\n\nSaya customer service Meow Labs. Ada yang bisa saya bantu mengenai pembuatan website?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isOnline, setIsOnline] = useState(true)

  // Simulate online/offline status
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hour = now.getHours()
      // Online 9AM - 9PM
      setIsOnline(hour >= 9 && hour <= 21)
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const quickReplies = [
    "Berapa harga website?",
    "Berapa lama pembuatan?",
    "Apakah ada garansi?",
    "Konsultasi gratis?"
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')

    // Auto reply after 2 seconds
    setTimeout(() => {
      const autoReply: Message = {
        id: messages.length + 2,
        text: "Terima kasih atas pertanyaan Anda! Tim kami akan merespon dalam 2-3 menit. Untuk respon lebih cepat, silakan hubungi WhatsApp kami di +62 895-3862-88683 📱",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, autoReply])
    }, 2000)
  }

  const handleQuickReply = (reply: string) => {
    setNewMessage(reply)
  }

  if (!isOpen) {
    return (
      <ErrorBoundary>
        <LoadingState>
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            >
              <MessageCircle className="h-8 w-8" />
            </Button>
            
            {/* Online indicator */}
            <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}>
            </div>

            {/* Notification badge */}
            <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              1
            </div>
          </div>
        </LoadingState>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <LoadingState>
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Meow Labs Support</CardTitle>
                    <div className="flex items-center gap-1 text-sm opacity-90">
                      {isOnline ? (
                        <>
                          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                          <span>Online</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <span>Offline</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="p-0">
              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed whitespace-pre-line ${
                        message.isUser
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.text}
                      <div className={`text-xs mt-1 opacity-70 ${message.isUser ? 'text-right' : 'text-left'}`}>
                        {message.timestamp.toLocaleTimeString('id-ID', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="px-4 pb-3">
                  <div className="text-xs text-gray-500 mb-2">Pertanyaan cepat:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs h-7"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ketik pesan Anda..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="px-3"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Business Hours Notice */}
              {!isOnline && (
                <div className="px-4 pb-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                    <div className="flex items-center gap-2 text-yellow-700 font-medium mb-1">
                      <Clock className="h-4 w-4" />
                      Jam Operasional
                    </div>
                    <div className="text-yellow-600">
                      Senin - Sabtu: 09:00 - 21:00 WIB
                      <br />
                      Minggu: 10:00 - 18:00 WIB
                    </div>
                    <div className="mt-2 text-xs text-yellow-600">
                      Untuk respon cepat di luar jam operasional, hubungi WhatsApp kami!
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="px-4 pb-3 text-center">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Tim Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    <span>Respon Cepat</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </LoadingState>
    </ErrorBoundary>
  )
}