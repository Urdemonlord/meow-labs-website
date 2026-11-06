"use client"

import { useEffect, useRef, useState } from "react"
import { heroAscii } from "./hero-ascii-data"

// Lebar satu karakter relatif ke font-size, sama dengan CELL_W di runtime paket.
const CELL_W = 0.602

// Artwork candi hero digambar ulang sebagai ASCII berwarna (ascii-magic-art).
// Gambar aslinya tetap di bawah: lapisan ini baru muncul setelah frame pertama
// tergambar, jadi tanpa JS atau saat memuat, pengunjung tetap melihat artwork.
export function HeroAsciiArt() {
  const boxRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const [size, setSize] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const fit = () => setSize(box.clientWidth / (heroAscii.cols * CELL_W))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(box)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const pre = preRef.current
    if (!size || !pre) return
    let stop: (() => void) | undefined
    let cancelled = false
    Promise.all([import("ascii-magic-art/lib/image.js"), import("ascii-magic-art/runtime/player.js")]).then(
      ([image, player]) => {
        if (cancelled) return
        const meta = { slug: "hero-temple", cols: heroAscii.cols, rows: heroAscii.rows, fps: 20, palette: heroAscii.palette }
        const create = image.imagePiece(meta, heroAscii, { glint: { every: 6, width: 10 }, twinkle: 0.5 })
        stop = player.play(pre, { meta, default: create }, { look: { look: "dense", all: true } })
        setReady(true)
      },
    )
    return () => {
      cancelled = true
      stop?.()
    }
    // Mulai sekali setelah ukuran awal diketahui; player membaca ukuran
    // berikutnya sendiri dari CSS.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size > 0])

  return (
    <div
      ref={boxRef}
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center bg-[#0e0f0d] transition-opacity duration-700 [&_canvas]:!h-auto [&_canvas]:!w-full ${ready ? "opacity-100" : "opacity-0"}`}
    >
      <pre ref={preRef} className="m-0 font-mono leading-none text-[#e4e4e7]" style={{ fontSize: size || 8 }} />
    </div>
  )
}
