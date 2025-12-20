"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      if (!Array.isArray(prev)) return [index];
      return prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index];
    })
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Halo Meow Labs! Saya punya pertanyaan tentang layanan pembuatan website.")
    window.open(`https://wa.me/62895386288683?text=${message}`, '_blank')
  }

  const faqs: FAQItem[] = [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Waktu pembuatan bervariasi tergantung kompleksitas: Landing Page (3-5 hari), Company Profile (7-10 hari), Toko Online (14-21 hari), Website Custom (sesuai kebutuhan). Kami selalu memberikan timeline yang jelas di awal project."
    },
    {
      question: "Apakah ada biaya maintenance atau perpanjangan?",
      answer: "Ya, ada biaya renewal tahunan yang lebih murah dari harga awal: Paket Hemat (500rb/tahun), Paket UMKM (700rb/tahun), Paket Bisnis (1jt/tahun), Paket Bisnis Plus (2jt/tahun). Sudah termasuk maintenance, backup, dan update security."
    },
    {
      question: "Apakah website yang dibuat sudah mobile-friendly?",
      answer: "Absolutely! Semua website yang kami buat menggunakan responsive design, artinya tampil sempurna di semua device (HP, tablet, desktop). Kami juga test di berbagai browser untuk memastikan kompatibilitas maksimal."
    },
    {
      question: "Apakah saya bisa edit konten website sendiri?",
      answer: "Tentu saja! Kami menyediakan admin panel yang user-friendly dan video tutorial lengkap cara mengelola website. Anda bisa edit teks, gambar, produk, dan konten lainnya dengan mudah tanpa coding."
    },
    {
      question: "Bagaimana dengan SEO? Apakah website sudah SEO-friendly?",
      answer: "Ya! Semua website kami dibuat SEO-friendly dari awal dengan: struktur URL yang baik, meta tags optimized, sitemap XML, loading speed yang cepat, dan mobile-friendly. Kami juga berikan panduan dasar SEO untuk Anda."
    },
    {
      question: "Apakah ada garansi jika website bermasalah?",
      answer: "Kami memberikan garansi 100% kepuasan dan maintenance gratis selama masa kontrak. Jika ada bug atau error, kami fix tanpa biaya tambahan. Support teknis tersedia via WhatsApp dengan response time <2 jam."
    },
    {
      question: "Bisakah integrate dengan WhatsApp untuk customer service?",
      answer: "Absolutely! Fitur WhatsApp integration adalah standard di semua paket kami. Customer bisa langsung chat ke nomor bisnis Anda dengan 1 klik dari website. Sangat efektif untuk meningkatkan konversi penjualan."
    },
    {
      question: "Apakah bisa buatkan toko online dengan payment gateway?",
      answer: "Ya! Kami bisa integrate dengan payment gateway lokal seperti Midtrans (support QRIS, Transfer Bank, Kartu Kredit, E-wallet). Tersedia di Paket Bisnis keatas. Proses checkout sangat mudah dan aman."
    },
    {
      question: "Bagaimana sistem pembayaran projectnya?",
      answer: "Sistem pembayaran fleksibel: DP 50% untuk mulai pengerjaan, 50% sisanya saat website selesai dan live. Kami accept transfer bank, QRIS, atau cash (untuk area Semarang). Invoice resmi disediakan."
    },
    {
      question: "Apakah melayani klien di luar Semarang?",
      answer: "Ya, kami melayani seluruh Indonesia! Konsultasi dan koordinasi via WhatsApp/video call. Untuk area Semarang, kami bisa meeting langsung jika diperlukan. Proses kerja 100% profesional dan transparan."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang <span className="text-primary">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Temukan jawaban atas pertanyaan umum tentang layanan pembuatan website kami. 
            Masih ada pertanyaan lain? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground pr-4 text-pretty">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        Array.isArray(openItems) && openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                {Array.isArray(openItems) && openItems.includes(index) && (
                  <CardContent className="pt-0 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="max-w-md mx-auto">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Masih Ada Pertanyaan?
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Tim kami siap membantu menjawab pertanyaan spesifik tentang kebutuhan website Anda
                </p>
                <Button onClick={handleWhatsAppContact} className="w-full sm:w-auto">
                  Tanya via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}