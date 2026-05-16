"use client"

import { useMemo, useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useUiPreferences } from "./ui-preferences-provider"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = useMemo<FAQItem[]>(
    () =>
      isEn
        ? [
            {
              question: "How long does a website project usually take?",
              answer:
                "Timeline depends on scope. Landing page is usually 3-5 days, company profile 7-14 days, and custom systems follow agreed milestones.",
            },
            {
              question: "Is there yearly renewal or maintenance cost?",
              answer:
                "Yes, there is a recurring maintenance and renewal cost. Final amount depends on the selected package and running scope.",
            },
            {
              question: "Will the website be mobile-friendly?",
              answer:
                "Yes. Every project is built responsive and validated across common device sizes and modern browsers.",
            },
            {
              question: "Can I update the content myself?",
              answer:
                "Yes. We provide an admin-friendly setup and practical guidance so your team can update text, images, and basic content.",
            },
            {
              question: "Do you include SEO setup?",
              answer:
                "Baseline SEO is included, including structure, meta setup, and technical essentials to support discoverability.",
            },
            {
              question: "What if there is an issue after launch?",
              answer:
                "We provide support based on your package. Critical issues are handled quickly through our support channel.",
            },
            {
              question: "Can you integrate WhatsApp for customer service?",
              answer:
                "Yes. WhatsApp CTA and contact flow can be integrated so visitors can reach your team with minimal friction.",
            },
            {
              question: "Do you build e-commerce with payment integration?",
              answer:
                "Yes. For relevant packages, we can integrate checkout and payment flows based on your business requirement.",
            },
            {
              question: "How does payment for the project work?",
              answer:
                "Payment terms are agreed before development starts, commonly split by kickoff and final delivery milestones.",
            },
            {
              question: "Do you serve clients outside Semarang?",
              answer:
                "Yes. We work remotely with clients across Indonesia through structured communication and delivery workflow.",
            },
          ]
        : [
            {
              question: "Berapa lama proses pembuatan website?",
              answer:
                "Timeline tergantung scope. Landing page biasanya 3-5 hari, company profile 7-14 hari, dan sistem custom mengikuti milestone yang disepakati.",
            },
            {
              question: "Apakah ada biaya renewal atau maintenance?",
              answer:
                "Ada biaya berulang untuk maintenance dan renewal. Besarnya mengikuti paket yang dipilih dan scope berjalan.",
            },
            {
              question: "Apakah website yang dibuat mobile-friendly?",
              answer:
                "Ya. Semua project dibuat responsif dan divalidasi di ukuran perangkat umum serta browser modern.",
            },
            {
              question: "Apakah saya bisa edit konten sendiri?",
              answer:
                "Bisa. Kami sediakan setup yang mudah dikelola dan panduan praktis agar tim Anda bisa update konten dasar.",
            },
            {
              question: "Apakah sudah termasuk setup SEO?",
              answer:
                "SEO baseline sudah termasuk, seperti struktur halaman, meta setup, dan kebutuhan teknis dasar agar mudah ditemukan.",
            },
            {
              question: "Bagaimana jika ada masalah setelah launch?",
              answer:
                "Kami menyediakan dukungan sesuai paket. Isu kritikal ditangani cepat melalui channel support kami.",
            },
            {
              question: "Bisa integrasi WhatsApp untuk customer service?",
              answer:
                "Bisa. CTA WhatsApp dan alur kontak bisa diintegrasikan agar pengunjung lebih mudah menghubungi tim Anda.",
            },
            {
              question: "Apakah bisa buat toko online dengan integrasi pembayaran?",
              answer:
                "Bisa. Untuk paket yang relevan, kami dapat integrasikan alur checkout dan pembayaran sesuai kebutuhan bisnis.",
            },
            {
              question: "Bagaimana sistem pembayaran project?",
              answer:
                "Skema pembayaran disepakati sebelum pengerjaan dimulai, umumnya dibagi tahap kickoff dan final delivery.",
            },
            {
              question: "Apakah melayani klien di luar Semarang?",
              answer:
                "Ya. Kami melayani klien lintas Indonesia dengan alur komunikasi dan delivery yang terstruktur.",
            },
          ],
    [isEn]
  )

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      isEn
        ? "Hello Meow Labs, I have a question about your website development service."
        : "Halo Meow Labs, saya punya pertanyaan tentang layanan pembuatan website."
    )
    window.open(`https://wa.me/6285117170198?text=${message}`, "_blank")
  }

  return (
    <section id="faq" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                Frequently <span className="text-primary">Asked Questions</span>
              </>
            ) : (
              <>
                Pertanyaan <span className="text-primary">Paling Sering Ditanyakan</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "Quick answers for the most common website project questions."
              : "Jawaban cepat untuk pertanyaan yang paling umum saat memulai project website."}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={faq.question} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="pr-4 font-semibold text-foreground text-pretty">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {openItems.includes(index) && (
                  <CardContent className="pb-6 pt-0">
                    <div className="border-t border-border pt-4">
                      <p className="leading-relaxed text-muted-foreground text-pretty">{faq.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-8">
              <div className="mx-auto max-w-md">
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {isEn ? "Still Have Questions?" : "Masih Ada Pertanyaan?"}
                </h3>
                <p className="mb-6 text-pretty text-muted-foreground">
                  {isEn
                    ? "Talk directly with our team for project-specific consultation."
                    : "Diskusikan langsung dengan tim kami untuk kebutuhan project yang lebih spesifik."}
                </p>
                <Button onClick={handleWhatsAppContact} className="w-full sm:w-auto">
                  {isEn ? "Ask via WhatsApp" : "Tanya via WhatsApp"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
