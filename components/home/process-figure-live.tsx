"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { processFigureMotion } from "./process-figure-motion"

const { stops, unit, needle } = processFigureMotion
const FIRST = stops[0]
const LAST = stops[stops.length - 1]
const DWELL = 2.4 // detik di setiap stasiun saat tur otomatis
const IDLE = 3600 // ms sebelum tur jalan lagi setelah disentuh

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value))
const nearest = (x: number) =>
  stops.reduce((best, stop, index) => (Math.abs(stop - x) < Math.abs(stops[best] - x) ? index : best), 0)

type Props = { stages: readonly string[]; children: ReactNode }

export function ProcessFigureLive({ stages, children }: Props) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const svg = stage.querySelector("svg")
    const carriage = svg?.querySelector<SVGGElement>('[data-part="carriage"]')
    const needlePath = svg?.querySelector<SVGPathElement>('[data-part="needle"]')
    const lamps = Array.from(svg?.querySelectorAll<SVGGElement>("[data-lamp]") ?? [])
    const layers = Array.from(svg?.querySelectorAll<SVGGElement>("[data-layer]") ?? [])
    const readout = stage.closest(".iso-plate")?.querySelector("[data-process-readout]")
    if (!svg || !carriage || !needlePath) return

    const still = matchMedia("(prefers-reduced-motion: reduce)")
    let x: number = FIRST
    let target: number = FIRST
    let touring = !still.matches
    let clock = 0
    let last = 0
    let frame = 0
    let visible = false
    let idleTimer = 0
    let shown = -1

    // Progres mengikuti posisi kereta: 25% di stasiun pertama, 100% di terakhir.
    const progressAt = (pos: number) => 0.25 + (0.75 * (pos - FIRST)) / (LAST - FIRST)

    const draw = () => {
      carriage.setAttribute("transform", `translate(${(unit[0] * x).toFixed(2)} ${(unit[1] * x).toFixed(2)})`)
      const progress = progressAt(x)
      needlePath.setAttribute("d", needle[Math.round(clamp(progress, 0, 1) * 100)])
      const index = nearest(x)
      const docked = Math.abs(stops[index] - x) < 4
      lamps.forEach((lamp, i) => (lamp.style.opacity = docked && i === index ? "1" : "0"))
      if (index !== shown) {
        shown = index
        layers.forEach((layer, i) => (layer.style.opacity = i <= index ? "1" : "0"))
      }
      const percent = Math.round((docked ? (index + 1) / stops.length : progress) * 100)
      const text = `${String(index + 1).padStart(2, "0")} / 04 · ${stages[index]} · ${percent}%`
      if (readout && readout.textContent !== text) readout.textContent = text
      stage.setAttribute("aria-valuenow", String(index + 1))
      stage.setAttribute("aria-valuetext", `Tahap ${index + 1}: ${stages[index]}`)
    }

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60
      last = now
      if (touring) {
        clock += dt
        target = stops[Math.floor(clock / DWELL) % stops.length]
      }
      x = still.matches ? target : x + (target - x) * (1 - Math.exp(-dt / 0.32))
      if (Math.abs(target - x) < 0.02) x = target
      draw()
      const settled = !touring && x === target
      frame = visible && !settled ? requestAnimationFrame(tick) : 0
    }

    const run = () => {
      if (!frame && visible) {
        last = 0
        frame = requestAnimationFrame(tick)
      }
    }

    const steer = (next: number) => {
      touring = false
      target = clamp(next, FIRST, LAST)
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(() => {
        touring = !still.matches
        clock = nearest(target) * DWELL
        run()
      }, IDLE)
      run()
    }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[entries.length - 1].isIntersecting
        if (visible) run()
      },
      { rootMargin: "120px 0px" },
    )
    io.observe(stage)

    // Kursor ke kanan menggeser proyek ke tahap berikutnya.
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      const box = svg.getBoundingClientRect()
      const share = clamp(((event.clientX - box.left) / box.width - 0.15) / 0.7, 0, 1)
      steer(FIRST + share * (LAST - FIRST))
    }
    const onLeave = () => steer(stops[nearest(target)])
    const onTap = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return
      steer(stops[(nearest(target) + 1) % stops.length])
    }
    const onKey = (event: KeyboardEvent) => {
      const here = nearest(target)
      let to: number | null = null
      if (event.key === "ArrowRight" || event.key === "ArrowUp") to = Math.min(stops.length - 1, here + 1)
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") to = Math.max(0, here - 1)
      if (event.key === "Home") to = 0
      if (event.key === "End") to = stops.length - 1
      if (to === null) return
      event.preventDefault()
      steer(stops[to])
    }

    stage.addEventListener("pointermove", onMove)
    stage.addEventListener("pointerleave", onLeave)
    stage.addEventListener("pointerup", onTap)
    stage.addEventListener("keydown", onKey)
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(idleTimer)
      io.disconnect()
      stage.removeEventListener("pointermove", onMove)
      stage.removeEventListener("pointerleave", onLeave)
      stage.removeEventListener("pointerup", onTap)
      stage.removeEventListener("keydown", onKey)
    }
  }, [stages])

  return (
    <div
      ref={stageRef}
      className="iso-stage outline-none focus-visible:ring-1 focus-visible:ring-paper-light/60"
      tabIndex={0}
      role="slider"
      aria-label="Meja proses: tombol panah memindahkan proyek antar tahap"
      aria-valuemin={1}
      aria-valuemax={4}
      aria-valuenow={1}
      aria-valuetext="Tahap 1: Diskusi"
    >
      {children}
    </div>
  )
}
