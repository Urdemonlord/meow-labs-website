import Image from "next/image"

interface BrandLogoProps {
  // "ink" untuk latar terang (paper), "paper" untuk latar gelap.
  tone?: "ink" | "paper"
  size?: number
  className?: string
}

// Logo MeowLabs: tanda kucing melingkar + wordmark huruf kecil (Geist medium).
// Tanda diambil dari file logo resmi; jangan digambar ulang atau diubah bentuknya.
export function BrandLogo({ tone = "ink", size = 32, className = "" }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${tone === "ink" ? "text-ink" : "text-paper-light"} ${className}`}>
      <Image
        src={tone === "ink" ? "/brand/meowlabs-mark-ink.png" : "/brand/meowlabs-mark-paper.png"}
        alt=""
        width={size}
        height={size}
        priority
      />
      <span className="font-sans font-medium tracking-tight" style={{ fontSize: size * 0.72 }}>
        meowlabs
      </span>
    </span>
  )
}
