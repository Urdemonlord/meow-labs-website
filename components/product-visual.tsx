import type { ProductPattern } from "@/lib/products"

// Visual abstrak untuk kartu produk selama screenshot produk belum ada.
// Setiap produk punya pola dan warna aksen sendiri; semuanya dekoratif.
const accents: Record<ProductPattern, string> = {
  grid: "var(--cobalt)",
  rings: "var(--forest)",
  bars: "var(--vermilion)",
  dots: "var(--paper-light)",
}

// "card" untuk kartu potret 4:5 (teks menutup bagian bawah). "wide" untuk
// frame lebar seperti /produk: viewBox dipersempit ke area pola (y 20-360)
// dan ditampilkan utuh, sisa frame terisi warna ink.
export function ProductVisual({ pattern, layout = "card" }: { pattern: ProductPattern; layout?: "card" | "wide" }) {
  const accent = accents[pattern]
  const wide = layout === "wide"
  return (
    <svg
      viewBox={wide ? "0 20 400 340" : "0 0 400 500"}
      preserveAspectRatio={wide ? "xMidYMid meet" : "xMidYMid slice"}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <rect width="400" height="500" fill="var(--ink)" />
      {pattern === "grid" && (
        <g stroke={accent} strokeWidth="1.5" opacity="0.9">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`v${i}`} x1={40 + i * 40} y1="40" x2={40 + i * 40} y2="320" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`h${i}`} x1="40" y1={40 + i * 40} x2="360" y2={40 + i * 40} />
          ))}
          <rect x="200" y="120" width="80" height="80" fill={accent} />
        </g>
      )}
      {pattern === "rings" && (
        <g fill="none" stroke={accent} strokeWidth="2">
          {[40, 75, 110, 145].map((r) => (
            <circle key={r} cx="200" cy="190" r={r} />
          ))}
          <circle cx="200" cy="190" r="22" fill={accent} />
        </g>
      )}
      {pattern === "bars" && (
        <g fill={accent}>
          {[90, 150, 120, 210, 170, 260].map((h, i) => (
            <rect key={i} x={50 + i * 52} y={330 - h} width="34" height={h} opacity={i === 5 ? 1 : 0.55} />
          ))}
        </g>
      )}
      {pattern === "dots" && (
        <g fill={accent}>
          {Array.from({ length: 7 }, (_, row) =>
            Array.from({ length: 7 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={80 + col * 40}
                cy={60 + row * 40}
                r={row === 3 && col === 3 ? 12 : 3}
                opacity={row === 3 && col === 3 ? 1 : 0.6}
              />
            ))
          )}
        </g>
      )}
    </svg>
  )
}
