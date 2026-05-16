"use client"

import { WorkingChatInterface } from "@/components/working-chat-interface"
import { useUiText } from "./ui-preferences-provider"

export function ChatbotPageContent() {
  const copy = useUiText()

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">{copy.chatbotPage.title}</h1>
          <p className="mt-2 text-muted-foreground">{copy.chatbotPage.description}</p>
        </div>

        <div className="mx-auto h-[min(72vh,40rem)] max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <WorkingChatInterface />
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card/80 p-6 text-left">
          <h2 className="mb-3 text-lg font-semibold text-foreground">{copy.chatbotPage.helpTitle}</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {copy.chatbotPage.helpItems.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">{copy.chatbotPage.note}</p>
        </div>
      </div>
    </div>
  )
}
