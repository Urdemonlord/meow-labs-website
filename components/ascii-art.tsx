"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Animasi ASCII dari paket ascii-magic-art (MIT). Setiap piece dimuat terpisah
// agar hanya animasi yang dipakai halaman ikut terunduh.
const pieces = {
  "sleeping-cat": () => import("ascii-magic-art/pieces/sleeping-cat.js"),
  "laptop-typing-cat": () => import("ascii-magic-art/pieces/laptop-typing-cat.js"),
} as const

// Ukuran grid tiap piece, dipakai untuk menyiapkan ruang sebelum JS jalan.
const grid: Record<AsciiPiece, { cols: number; rows: number }> = {
  "sleeping-cat": { cols: 80, rows: 30 },
  "laptop-typing-cat": { cols: 64, rows: 28 },
}

// Lebar satu karakter relatif ke font-size, sama dengan CELL_W di runtime paket.
const CELL_W = 0.602

export type AsciiPiece = keyof typeof pieces

type AsciiArtProps = {
  piece: AsciiPiece
  label: string
  caption?: string
  className?: string
}

export function AsciiArt({ piece, label, caption, className }: AsciiArtProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const [fontSize, setFontSize] = useState(0)
  const { cols, rows } = grid[piece]

  // Font mengikuti lebar kotak supaya seluruh grid muat di layar HP.
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const fit = () => setFontSize(Math.min(14, box.clientWidth / (cols * CELL_W)))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(box)
    return () => ro.disconnect()
  }, [cols])

  useEffect(() => {
    if (!fontSize) return
    const pre = preRef.current
    if (!pre) return
    let stop: (() => void) | undefined
    let cancelled = false
    Promise.all([pieces[piece](), import("ascii-magic-art/runtime/player.js")]).then(([mod, player]) => {
      if (!cancelled) stop = player.play(pre, mod)
    })
    return () => {
      cancelled = true
      stop?.()
    }
    // Hanya mulai sekali setelah ukuran awal diketahui; perubahan ukuran
    // berikutnya dibaca sendiri oleh player dari CSS.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [piece, fontSize > 0])

  return (
    <figure className={cn("overflow-hidden rounded-[4px] border border-ink bg-dark-surface", className)}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-vermilion" />
        <span className="h-2 w-2 rounded-full bg-dark-muted/50" />
        <span className="h-2 w-2 rounded-full bg-dark-muted/50" />
        <span className="ml-2 font-mono text-[0.65rem] tracking-wider text-dark-muted">{piece}.txt</span>
      </div>
      <div ref={boxRef} className="p-3">
        <div
          role="img"
          aria-label={label}
          className="w-full [&_canvas]:!h-auto [&_canvas]:!w-full"
          style={{ aspectRatio: `${cols * CELL_W} / ${rows}` }}
        >
          <pre
            ref={preRef}
            aria-hidden="true"
            className="m-0 font-mono leading-none text-[#e4e4e7]"
            style={{ fontSize: fontSize || 12 }}
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="border-t border-white/10 px-3 py-2 font-mono text-[0.7rem] text-dark-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
