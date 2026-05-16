"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { uiCopy, type Locale } from "@/lib/ui-copy"

type UiPreferencesContextValue = {
  locale: Locale
  santaMode: boolean
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  toggleSantaMode: () => void
}

const STORAGE_KEYS = {
  locale: "meow-ui-locale",
  santaMode: "meow-santa-mode",
} as const

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(null)

export function UiPreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id")
  const [santaMode, setSantaMode] = useState(false)

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem(STORAGE_KEYS.locale)
      const savedSantaMode = localStorage.getItem(STORAGE_KEYS.santaMode)

      if (savedLocale === "id" || savedLocale === "en") {
        setLocaleState(savedLocale)
      }

      if (savedSantaMode === "true") {
        setSantaMode(true)
      }
    } catch {
      // Ignore localStorage access failures.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale

    try {
      localStorage.setItem(STORAGE_KEYS.locale, locale)
    } catch {
      // Ignore localStorage access failures.
    }
  }, [locale])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.santaMode, String(santaMode))
    } catch {
      // Ignore localStorage access failures.
    }
  }, [santaMode])

  const value = useMemo<UiPreferencesContextValue>(
    () => ({
      locale,
      santaMode,
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((current) => (current === "id" ? "en" : "id")),
      toggleSantaMode: () => setSantaMode((current) => !current),
    }),
    [locale, santaMode]
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
