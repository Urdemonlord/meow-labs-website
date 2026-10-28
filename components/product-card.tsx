import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { productHref } from "@/lib/products"
import type { Product } from "@/lib/products"

// Kartu produk bergaya editorial: artwork gelap, nama serif, label status
// berupa teks (bukan warna saja) agar tetap terbaca tanpa membedakan warna.
export function ProductCard({ product, medium }: { product: Product; medium: string }) {
  return (
    <a
      href={productHref(product, medium)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[4px] bg-ink text-paper-light"
    >
      <Image
        src={product.image}
        alt=""
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      <div className="relative p-3 sm:p-5">
        <h3 className="font-display text-2xl leading-none sm:text-3xl">{product.name}</h3>
        <p className="ml-eyebrow mt-2 text-[0.65rem] text-dark-muted sm:mt-3 sm:text-xs">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between sm:mt-5">
          <span className="ml-eyebrow rounded-[2px] border border-paper-light/40 px-2 py-1 text-[0.65rem]">
            {product.status}
          </span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
      <span className="sr-only">(buka {product.name} di tab baru)</span>
    </a>
  )
}
