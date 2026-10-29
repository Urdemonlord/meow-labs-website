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
      className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
    >
      <rect width="400" height="500" fill="var(--ink)" />
      {/* Grid dan titik memakai <pattern> (satu ubin yang diulang) agar DOM tetap
          kecil. ID unik per halaman karena tiap pola hanya dipakai satu produk. */}
      {pattern === "grid" && (
        <g opacity="0.9">
          <defs>
            <pattern id="pv-grid" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0V40M0 20H40" stroke={accent} strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect x="39" y="39" width="322" height="282" fill="url(#pv-grid)" />
          <rect x="200" y="120" width="80" height="80" fill={accent} className="ml-svg-pulse" />
        </g>
      )}
      {pattern === "rings" && (
        <g fill="none" stroke={accent} strokeWidth="2">
          {[40, 75, 110, 145].map((r) => (
            <circle key={r} cx="200" cy="190" r={r} />
          ))}
          <circle cx="200" cy="190" r="22" fill={accent} className="ml-svg-pulse" />
        </g>
      )}
      {pattern === "bars" && (
        <g fill={accent}>
          {[90, 150, 120, 210, 170, 260].map((h, i) => (
            <rect key={i} x={50 + i * 52} y={330 - h} width="34" height={h} opacity={i === 5 ? 1 : 0.55} className="ml-grow-y" />
          ))}
        </g>
      )}
      {pattern === "dots" && (
        <g fill={accent}>
          <defs>
            <pattern id="pv-dots" x="60" y="40" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" opacity="0.6" />
            </pattern>
          </defs>
          <rect x="60" y="40" width="280" height="280" fill="url(#pv-dots)" />
          <circle cx="200" cy="180" r="12" className="ml-svg-pulse" />
        </g>
      )}
    </svg>
  )
}
