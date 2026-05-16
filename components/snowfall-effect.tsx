"use client"

import { useEffect, useMemo, useState } from "react"
import Snowfall from "react-snowfall"
import { useUiPreferences } from "./ui-preferences-provider"

export default function SnowfallEffect() {
  const [mounted, setMounted] = useState(false)
  const [isCompactViewport, setIsCompactViewport] = useState(false)
  const { santaMode } = useUiPreferences()

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener("change", updateViewport)

    return () => mediaQuery.removeEventListener("change", updateViewport)
  }, [])

  const snowflakeCount = useMemo(() => (isCompactViewport ? 48 : 110), [isCompactViewport])

  if (!mounted || !santaMode) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <Snowfall color="white" snowflakeCount={snowflakeCount} speed={[0.4, 1.2]} wind={[-0.15, 0.15]} />
    </div>
  )
}
