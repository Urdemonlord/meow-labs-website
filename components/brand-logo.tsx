import Image from "next/image"

interface BrandLogoProps {
  // "ink" untuk latar terang (paper), "paper" untuk latar gelap.
  tone?: "ink" | "paper"
  size?: number
  className?: string
  // Hanya untuk logo di atas lipatan (navigasi); logo footer dimuat biasa.
  preload?: boolean
}

// Logo MeowLabs: tanda kucing melingkar + wordmark huruf kecil (Geist medium).
// Tanda diambil dari file logo resmi; jangan digambar ulang atau diubah bentuknya.
export function BrandLogo({ tone = "ink", size = 32, className = "", preload = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${tone === "ink" ? "text-ink" : "text-paper-light"} ${className}`}>
      <Image
        src={tone === "ink" ? "/brand/meowlabs-mark-ink.webp" : "/brand/meowlabs-mark-paper.webp"}
        alt=""
        width={size}
        height={size}
        preload={preload}
      />
      <span className="font-sans font-medium tracking-tight" style={{ fontSize: size * 0.72 }}>
        meowlabs
      </span>
    </span>
  )
}
