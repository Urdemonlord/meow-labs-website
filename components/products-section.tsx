"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductIcon } from "./product-icon"
import { isExternalProduct, productHref, products } from "@/lib/products"
import { useUiPreferences } from "./ui-preferences-provider"

export function ProductsSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  return (
    <section id="produk" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                Products <span className="text-primary">We Build and Run</span>
              </>
            ) : (
              <>
                Produk yang <span className="text-primary">Kami Bangun Sendiri</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "Besides client projects, Meow Labs builds and runs its own products, made by the same team that handles your project."
              : "Selain proyek klien, Meow Labs membangun dan menjalankan produknya sendiri, dikerjakan tim yang sama yang menangani proyek Anda."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => {
            const copy = isEn ? product.en : product.id
            const external = isExternalProduct(product)
            const Comp = external ? "a" : Link
            return (
              <Comp
                key={product.slug}
                href={productHref(product, "homepage")}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ProductIcon name={product.icon} className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-foreground group-hover:text-primary">{product.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{copy.tagline}</p>
              </Comp>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/produk" className="inline-flex items-center font-semibold text-primary hover:underline">
            {isEn ? "See all products" : "Lihat semua produk"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
