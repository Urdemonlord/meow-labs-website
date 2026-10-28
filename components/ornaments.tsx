// Ornamen kolase. Semuanya dekoratif, jadi disembunyikan dari pembaca layar.

interface OrnamentProps {
  className?: string
}

// Disk dan ubin bergaris digambar dengan latar CSS, bukan SVG berisi
// belasan <line>. Tampilannya sama, tapi DOM dan payload React jauh lebih
// kecil, sehingga hydration homepage tidak memblokir main thread di HP.
// Latar otomatis terpotong mengikuti border-radius, jadi grid disk tetap
// berhenti di tepi lingkaran.

export function GridDisc({ className = "" }: OrnamentProps) {
  return <div aria-hidden="true" className={`ml-grid-disc ${className}`} />
}

export function GridTile({ className = "" }: OrnamentProps) {
  return <div aria-hidden="true" className={`ml-grid-tile ${className}`} />
}

export function PlusMark({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 0v24M0 12h24" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
