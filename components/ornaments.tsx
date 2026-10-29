// Ornamen kolase. Semuanya dekoratif, jadi disembunyikan dari pembaca layar.

interface OrnamentProps {
  className?: string
}

// Grid disk dan ubin digambar sebagai SVG di background-image (.ml-grid-*
// di globals.css), bukan SVG inline berisi belasan <line>. Tampilannya sama,
// tapi DOM dan payload RSC lebih kecil, jadi parsing HTML dan hydration
// homepage lebih ringan di HP.

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
