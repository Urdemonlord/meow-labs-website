"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { uiCopy, type Locale } from "@/lib/ui-copy"

type UiPreferencesContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(null)

// Website saat ini berbahasa Indonesia dan tidak punya tombol ganti bahasa.
// Pilihan bahasa lama di localStorage sengaja tidak dipulihkan agar
// pengunjung yang dulu memilih English tidak terkunci di bahasa itu.
export function UiPreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id")

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<UiPreferencesContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "id" ? "en" : "id")),
    }),
    [locale]
  )

  return <UiPreferencesContext.Provider value={value}>{children}</UiPreferencesContext.Provider>
}

export function useUiPreferences() {
  const context = useContext(UiPreferencesContext)

  if (!context) {
    throw new Error("useUiPreferences must be used within UiPreferencesProvider")
  }

  return context
}

export function useUiText() {
  const { locale } = useUiPreferences()
  return uiCopy[locale]
}
