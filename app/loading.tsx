export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg rounded-[28px] border border-border bg-card/90 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Meow Labs</div>
        <h2 className="mt-3 text-2xl font-bold text-foreground">Menyiapkan halaman...</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Memuat konten utama dan elemen interaktif agar tampilan siap digunakan.
        </p>
        <div className="mt-6 space-y-3">
          <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-[88%] animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-[70%] animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  )
}
