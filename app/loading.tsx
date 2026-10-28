import Image from "next/image"

export default function Loading() {
  return (
    <div role="status" className="flex min-h-screen items-center justify-center bg-paper px-5 text-ink">
      <div className="w-full max-w-sm">
        <Image src="/art/mascot-sleep.webp" alt="" width={180} height={170} className="h-auto w-[120px]" />
        <p className="ml-eyebrow mt-6 text-ink-muted">meowlabs</p>
        <p className="mt-4 font-display text-3xl leading-tight">Menyiapkan halaman…</p>
        <div className="mt-6 h-px w-full overflow-hidden bg-rule">
          <div className="h-full w-1/3 animate-pulse bg-ink" />
        </div>
      </div>
    </div>
  )
}
