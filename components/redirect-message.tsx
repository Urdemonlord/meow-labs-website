"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface RedirectMessageProps {
  href: string
  message?: string
}

export default function RedirectMessage({ href, message }: RedirectMessageProps) {
  const router = useRouter()

  useEffect(() => {
    router.push(href)
  }, [href, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>{message ?? "Redirecting..."}</p>
    </div>
  )
}
