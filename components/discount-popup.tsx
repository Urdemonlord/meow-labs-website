"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppContact = () => {
    const phoneNumber = "62895386288683"
    const message = "Halo! Saya ingin mendapatkan promo diskon 50% untuk 5 klien pertama!"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md p-8 overflow-hidden text-center bg-background shadow-2xl rounded-xl animate-in zoom-in-95">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <span className="text-2xl">🔥</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">PROMO SPESIAL!</h3>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-2 px-4 rounded-md mb-4 animate-pulse">
            DISKON 50% UNTUK 5 KLIEN PERTAMA!
          </div>
          <p className="text-muted-foreground mb-4">
            Dapatkan kesempatan emas! Kami menawarkan diskon 50% untuk 5 klien pertama yang menghubungi kami sekarang.
          </p>
          
          <div className="space-y-2 text-sm text-left mb-6">
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-primary text-white rounded-full text-xs">1</span>
              <span>Berlaku untuk semua paket website & aplikasi</span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-primary text-white rounded-full text-xs">2</span>
              <span>Penawaran terbatas waktu</span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-primary text-white rounded-full text-xs">3</span>
              <span>Konsultasi & pembuatan proposal gratis</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={handleWhatsAppContact}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Klaim Diskon 50% Sekarang!
          </Button>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Nanti saja
          </button>
        </div>
      </div>
    </div>
  )
}