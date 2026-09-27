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
const BASE = "https://pos.meowlabs.id"

type Release = {
  variant: string
  versionCode: number
  versionName: string
  apkUrl: string
  sizeBytes: number
  publishedAt: string
  notes: string[]
}

async function getRelease(manifest: string): Promise<Release | null> {
  try {
    // cache: "no-store" - kalau halaman ini di-cache, pengunjung bisa melihat
    // versi lama dan mengunduh APK yang sudah digantikan.
    const res = await fetch(`${BASE}/${manifest}`, { cache: "no-store" })
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

function DownloadCard({
  release,
  title,
  description,
  primary,
}: {
  release: Release
  title: string
  description: string
  primary?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border p-8 shadow-sm ${
        primary ? "border-primary/40 bg-card" : "border-border bg-card"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {formatSize(release.sizeBytes)} &middot; {formatDate(release.publishedAt)}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <a
        href={release.apkUrl}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold transition-opacity hover:opacity-90 ${
          primary
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-background text-foreground"
        }`}
      >
        Unduh APK
      </a>

      <p className="mt-3 text-xs text-muted-foreground">
        Versi {release.versionName}
      </p>

      {release.notes.length > 0 && (
        <div className="mt-6 border-t border-border pt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Yang baru
          </h4>
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
    </div>
  )
}

export default async function PosDownloadPage() {
  // Versi percobaan dibaca lebih dulu: itulah yang bisa langsung dipakai,
  // sedangkan versi lengkap belum berguna sampai server tokonya ada.
  const [demo, release] = await Promise.all([
    getRelease("update-demo.json"),
    getRelease("update.json"),
  ])

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
          <div className="mx-auto max-w-2xl space-y-6">
            {demo && (
              <DownloadCard
                release={demo}
                title="Versi percobaan"
                description="Untuk mencoba aplikasinya lebih dulu. Masuk dengan email apa pun — tidak perlu akun, dan tidak tersambung ke server."
                primary
              />
            )}

            {release && (
              <DownloadCard
                release={release}
                title="Versi lengkap"
                description="Untuk toko yang sudah terdaftar. Membutuhkan akun dan koneksi ke server."
              />
            )}

            {!demo && !release && (
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

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
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
                  <span>Setelah terpasang, buka aplikasi dan masuk.</span>
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
