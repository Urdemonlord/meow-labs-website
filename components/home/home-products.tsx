import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function HomeProducts() {
  return (
    <section id="produk" className="border-b border-rule">
      <div className="ml-container ml-section">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="ml-eyebrow text-ink-muted">04 // Produk yang kami kembangkan</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
              Dibangun dan dijalankan sendiri.
            </h2>
          </div>
          <Link href="/produk" className="inline-flex items-center gap-1 text-sm text-ink hover:text-forest hover:underline">
            Lihat semua produk
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} medium="homepage" />
          ))}
        </div>
      </div>
    </section>
  )
}
