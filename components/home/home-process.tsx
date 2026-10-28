const steps = [
  { title: "Diskusi", body: "Memahami masalah, tujuan, dan batasan sebelum bicara teknologi." },
  { title: "Perancangan", body: "Menyusun scope, desain, dan arsitektur solusi yang paling masuk akal." },
  { title: "Pengembangan", body: "Membangun bertahap dengan progres yang bisa Anda lihat dan uji." },
  { title: "Peluncuran", body: "Deploy, evaluasi di alur kerja nyata, lalu perbaikan berkelanjutan." },
]

export function HomeProcess() {
  return (
    <section className="relative isolate overflow-hidden bg-dark-surface text-paper-light">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(250,248,242,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(250,248,242,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
        <div className="ml-reveal lg:col-span-4">
          <p className="ml-eyebrow text-paper-light/70">05 // Proses kerja</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.98]">Dari ide sampai dampak.</h2>
          <p className="mt-6 max-w-sm text-pretty leading-relaxed text-paper-light/80">
            Terstruktur, fleksibel, dan diukur dari hasil yang nyata.
          </p>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-[4px] bg-paper-light/20 sm:grid-cols-2 lg:col-span-8">
          {steps.map((step, index) => (
            <li key={step.title} className="ml-reveal bg-dark-surface/85 p-6 backdrop-blur-[2px] sm:p-8">
              <span className="ml-eyebrow text-paper-light/70">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-paper-light/80">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
