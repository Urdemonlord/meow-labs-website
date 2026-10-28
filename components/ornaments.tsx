// Ornamen kolase sebagai SVG agar tetap tajam di semua ukuran layar.
// Semuanya dekoratif, jadi disembunyikan dari pembaca layar.

interface OrnamentProps {
  className?: string
}

// Garis grid dipotong di tepi lingkaran (tali busur), jadi tidak perlu
// clipPath ber-ID yang bisa bentrok saat ornamen dipakai lebih dari sekali.
// Radius dikurangi setengah lebar garis agar ujung garis tidak keluar disk.
const DISC_STROKE = 0.6
const discChords = [20, 40, 60, 80].map((p) => {
  const r = 50 - DISC_STROKE / 2
  const half = Math.sqrt(r * r - (p - 50) * (p - 50))
  return { p, start: 50 - half, end: 50 + half }
})

export function GridDisc({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="50" fill="var(--vermilion)" />
      <g stroke="var(--paper-light)" strokeOpacity="0.45" strokeWidth={DISC_STROKE}>
        {discChords.map(({ p, start, end }) => (
          <g key={p}>
            <line x1={p} y1={start} x2={p} y2={end} />
            <line x1={start} y1={p} x2={end} y2={p} />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function GridTile({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <rect width="100" height="100" fill="var(--cobalt)" />
      <g stroke="var(--paper-light)" strokeOpacity="0.35" strokeWidth="0.6">
        {[12.5, 25, 37.5, 50, 62.5, 75, 87.5].map((p) => (
          <g key={p}>
            <line x1={p} y1="0" x2={p} y2="100" />
            <line x1="0" y1={p} x2="100" y2={p} />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function PlusMark({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 0v24M0 12h24" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
