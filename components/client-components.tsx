"use client"

import dynamic from "next/dynamic"
import { WhatsAppAttribution } from "./whatsapp-attribution"

const WorkingFloatingChat = dynamic(
  () =>
    import("./working-floating-chat").then((mod) => ({
      default: mod.WorkingFloatingChat,
    })),
  { ssr: false }
)

export default function ClientComponents() {
  return (
    <>
      <WorkingFloatingChat />
      <WhatsAppAttribution />
    </>
  )
}
