"use client"

import dynamic from "next/dynamic"

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
    </>
  )
}
