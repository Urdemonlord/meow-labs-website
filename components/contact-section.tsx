"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  buildWhatsAppUrl,
  buildWhatsAppUrl2,
  MEOWLABS_ADMIN2_NAME,
  MEOWLABS_ADMIN2_PHONE_DISPLAY,
  MEOWLABS_ADMIN_PHONE_DISPLAY,
} from "@/lib/whatsapp"

const fieldClass =
  "w-full rounded-[3px] border border-rule bg-paper-light px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:border-ink"
const labelClass = "ml-eyebrow mb-2 block text-ink-muted"

// Form konsultasi yang dikirim lewat WhatsApp; tidak ada data yang disimpan.
export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", message: "" })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = [
      "Halo admin, saya ingin konsultasi pembuatan website.",
      "",
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organisasi: ${formData.organization}`,
      "",
      `Pesan: ${formData.message}`,
    ].join("\n")
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <section id="contact" className="border-b border-rule">
      <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="ml-eyebrow text-ink-muted">{"// Kontak"}</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">
            Konsultasikan kebutuhan website Anda, gratis.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink-muted">
            Kami bantu menentukan scope, timeline, dan arah implementasi terbaik untuk bisnis Anda.
          </p>

          <dl className="mt-10 border-t border-ink">
            {[
              { label: "Email", value: "admin@meowlabs.id", href: "mailto:admin@meowlabs.id" },
              {
                label: "WhatsApp Admin 1",
                value: MEOWLABS_ADMIN_PHONE_DISPLAY,
                href: buildWhatsAppUrl("Halo admin, saya ingin konsultasi cepat terkait website."),
              },
              {
                label: `WhatsApp ${MEOWLABS_ADMIN2_NAME}`,
                value: MEOWLABS_ADMIN2_PHONE_DISPLAY,
                href: buildWhatsAppUrl2(`Halo ${MEOWLABS_ADMIN2_NAME}, saya ingin konsultasi cepat terkait website.`),
              },
              { label: "Lokasi", value: "Semarang dan sekitarnya" },
              { label: "Respons awal", value: "Kurang dari 2 jam" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between gap-4 border-b border-rule py-4">
                <dt className="ml-eyebrow pt-0.5 text-ink-muted">{item.label}</dt>
                <dd className="text-right text-ink">
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-[4px] border border-rule bg-paper-light p-6 sm:p-8 lg:col-span-7">
          <p className="ml-eyebrow text-ink-muted">Form konsultasi · dikirim via WhatsApp</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Nama lengkap
              </label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="organization" className={labelClass}>
              Perusahaan atau organisasi
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Ceritakan project yang ingin Anda kerjakan..."
              className={fieldClass}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light transition-colors hover:bg-ink/85"
          >
            Kirim lewat WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
