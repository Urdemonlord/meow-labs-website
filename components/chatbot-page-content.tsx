"use client"

import { WorkingChatInterface } from "@/components/working-chat-interface"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/editorial"
import { useUiText } from "./ui-preferences-provider"

export function ChatbotPageContent() {
  const copy = useUiText()

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <PageHeader eyebrow="// Asisten" title={copy.chatbotPage.title} intro={copy.chatbotPage.description} />

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="h-[min(72vh,40rem)] overflow-hidden rounded-[4px] border border-ink bg-paper-light lg:col-span-8">
            <WorkingChatInterface autoFocusInput={false} />
          </div>

          <aside className="lg:col-span-4">
            <p className="ml-eyebrow text-ink-muted">{copy.chatbotPage.helpTitle}</p>
            <ul className="mt-5 border-t border-ink">
              {copy.chatbotPage.helpItems.map((item) => (
                <li key={item} className="border-b border-rule py-4 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">{copy.chatbotPage.note}</p>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
