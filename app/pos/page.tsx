import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Unduh MeowLabs POS | Meow Labs",
  description:
    "Unduh aplikasi MeowLabs POS untuk Android. Kasir, pembayaran QRIS, dan deteksi otomatis notifikasi bank dalam satu aplikasi.",
}

// Manifest rilis dibaca dari server distribusi (pos.meowlabs.id).
//
// Diambil di server, bukan di browser: berkas APK dilayani VPS yang berbeda
// dari situs ini, jadi fetch dari browser akan kena pembatasan lintas asal.
// Lewat server, halaman tetap satu domain bagi pengunjung.
const MANIFEST_URL = "https://pos.meowlabs.id/update.json"

type Release = {
  versionCode: number
  versionName: string
  apkUrl: string
  sha256: string
  sizeBytes: number
  publishedAt: string
  notes: string[]
}

async function getRelease(): Promise<Release | null> {
  try {
    // cache: "no-store" - kalau halaman ini di-cache, pengunjung bisa melihat
    // versi lama dan mengunduh APK yang sudah digantikan.
    const res = await fetch(MANIFEST_URL, { cache: "no-store" })
    if (!res.ok) return null
    return (await res.json()) as Release
  } catch {
    // Server distribusi bisa sedang tidak terjangkau. Halaman tetap harus
    // tampil, bukan menampilkan galat 500 kepada pengunjung.
    return null
  }
}

function formatSize(bytes: number): string {
  return `${(bytes / 1048576).toFixed(2)} MB`
}

function formatDate(iso: string): string {
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ]
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  return `${d} ${bulan[m - 1]} ${y}`
}

export default async function PosDownloadPage() {
  const release = await getRelease()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background pt-32 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Aplikasi Android
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">MeowLabs POS</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Kasir, pembayaran QRIS, dan deteksi otomatis notifikasi bank dalam satu
            aplikasi. Ringan, dan dirancang untuk toko yang mengutamakan kecepatan.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {release ? (
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold">
                    Versi {release.versionName}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {formatSize(release.sizeBytes)} &middot;{" "}
                    {formatDate(release.publishedAt)}
                  </span>
                </div>

                <a
                  href={release.apkUrl}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Unduh APK
                </a>

                {release.notes.length > 0 && (
                  <div className="mt-8 border-t border-border pt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Yang baru
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {release.notes.map((note, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">&#8226;</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Verifikasi berkas
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Setelah mengunduh, Anda bisa memastikan berkasnya utuh dengan
                    mencocokkan nilai berikut.
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium">Ukuran</dt>
                      <dd className="mt-1 text-muted-foreground">
                        {release.sizeBytes.toLocaleString("id-ID")} byte (
                        {formatSize(release.sizeBytes)})
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">SHA-256</dt>
                      <dd className="mt-1 break-all rounded-lg bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
                        {release.sha256}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <h2 className="text-xl font-semibold">
                  Informasi versi tidak tersedia
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Server distribusi sedang tidak dapat dihubungi. Silakan coba
                  beberapa saat lagi.
                </p>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-6">
              <h2 className="text-base font-semibold">Cara memasang</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">1.</span>
                  <span>Ketuk tombol unduh di atas, lalu tunggu berkas selesai.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">2.</span>
                  <span>
                    Buka berkas yang terunduh. Android akan meminta izin memasang
                    aplikasi dari sumber ini &mdash; izinkan.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground">3.</span>
                  <span>
                    Setelah terpasang, buka aplikasi dan masuk dengan akun toko Anda.
                  </span>
                </li>
              </ol>
              <p className="mt-5 text-xs text-muted-foreground">
                Aplikasi ini tidak tersedia di Google Play. Karena itu, Android
                menampilkan peringatan saat memasang &mdash; itu normal untuk
                aplikasi yang dipasang langsung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
