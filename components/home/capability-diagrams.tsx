// Diagram kecil yang menjelaskan tiap layanan, menggantikan foto landmark.
// Gaya editorial: garis tipis ink, label mono, aksen vermilion dan cobalt.
// Semua dekoratif; isi layanan dijelaskan oleh teks di kartunya.

const mono = { fontFamily: "var(--font-plex-mono), ui-monospace, monospace" }

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" className="h-full w-full">
      <rect width="400" height="300" fill="var(--paper-light)" />
      <g stroke="var(--rule)" strokeWidth="1">
        {[50, 100, 150, 200, 250, 300, 350].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" strokeDasharray="2 4" />
        ))}
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} strokeDasharray="2 4" />
        ))}
      </g>
      {children}
    </svg>
  )
}

function Label({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontSize="13" letterSpacing="1" fill="var(--ink-muted)" textAnchor={anchor} style={mono}>
      {children}
    </text>
  )
}

// Wireframe halaman website: navigasi, hero, CTA, dan kartu katalog.
export function WebsiteDiagram() {
  return (
    <Frame>
      <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <rect x="60" y="40" width="280" height="220" rx="4" fill="var(--paper)" />
        <line x1="60" y1="62" x2="340" y2="62" />
        <rect x="80" y="84" width="130" height="10" fill="var(--ink)" />
        <rect x="80" y="102" width="100" height="10" fill="var(--ink)" />
        <line x1="80" y1="124" x2="200" y2="124" strokeWidth="1" />
        <line x1="80" y1="132" x2="180" y2="132" strokeWidth="1" />
        <rect x="230" y="80" width="90" height="70" />
        <line x1="230" y1="80" x2="320" y2="150" strokeWidth="1" />
        <line x1="320" y1="80" x2="230" y2="150" strokeWidth="1" />
        <rect x="80" y="180" width="70" height="56" />
        <rect x="165" y="180" width="70" height="56" />
        <rect x="250" y="180" width="70" height="56" />
      </g>
      <rect x="80" y="144" width="56" height="16" fill="var(--vermilion)" />
      <g fill="var(--ink)">
        <circle cx="72" cy="51" r="3" />
        <circle cx="82" cy="51" r="3" />
        <circle cx="92" cy="51" r="3" />
      </g>
      <Label x={60} y={30}>HALAMAN / 01</Label>
      <Label x={144} y={157}>← CTA</Label>
      <Label x={340} y={278} anchor="end">KATALOG · SEO · MOBILE</Label>
    </Frame>
  )
}

// Alur integrasi AI: pesan WhatsApp masuk ke agen, agen membaca data dan
// meneruskan kasus sulit ke admin.
export function AiDiagram() {
  return (
    <Frame>
      <defs>
        <marker id="cap-ai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="var(--ink)" />
        </marker>
      </defs>
      <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <rect x="30" y="120" width="90" height="60" rx="4" fill="var(--paper)" />
        <line x1="120" y1="150" x2="160" y2="150" markerEnd="url(#cap-ai-arrow)" />
        <line x1="240" y1="135" x2="280" y2="95" markerEnd="url(#cap-ai-arrow)" />
        <line x1="240" y1="165" x2="280" y2="205" markerEnd="url(#cap-ai-arrow)" />
        <ellipse cx="320" cy="72" rx="40" ry="10" fill="var(--paper)" />
        <path d="M280 72v40c0 5.5 18 10 40 10s40-4.5 40-10V72" fill="var(--paper)" />
        <rect x="280" y="190" width="80" height="50" rx="4" fill="var(--paper)" />
      </g>
      <circle cx="200" cy="150" r="40" fill="var(--cobalt)" />
      <circle cx="200" cy="150" r="52" fill="none" stroke="var(--cobalt)" strokeDasharray="3 5" />
      <text x="200" y="154" fontSize="11" fill="var(--paper-light)" textAnchor="middle" style={mono}>
        AGEN AI
      </text>
      <rect x="42" y="134" width="50" height="9" rx="4" fill="var(--vermilion)" />
      <rect x="54" y="152" width="54" height="9" rx="4" fill="var(--rule)" />
      <Label x={30} y={110}>WHATSAPP</Label>
      <Label x={320} y={52} anchor="middle">DATABASE</Label>
      <Label x={320} y={219} anchor="middle">ADMIN</Label>
      <Label x={200} y={232} anchor="middle">BATAS AKSES · LOG</Label>
    </Frame>
  )
}

// Arsitektur sistem custom: aplikasi web, API, dan database dalam satu
// tumpukan, plus dashboard dan alur deploy.
export function SystemDiagram() {
  const layers = [
    { y: 50, label: "APLIKASI WEB" },
    { y: 115, label: "API · INTEGRASI" },
    { y: 180, label: "DATABASE" },
  ]
  return (
    <Frame>
      {layers.map((layer, index) => (
        <g key={layer.label}>
          <rect
            x="40"
            y={layer.y}
            width="190"
            height="45"
            rx="3"
            fill={index === 1 ? "var(--ink)" : "var(--paper)"}
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          <text
            x="56"
            y={layer.y + 27}
            fontSize="11"
            letterSpacing="1"
            fill={index === 1 ? "var(--paper-light)" : "var(--ink)"}
            style={mono}
          >
            {layer.label}
          </text>
        </g>
      ))}
      <g stroke="var(--ink)" strokeWidth="1.5">
        <line x1="135" y1="95" x2="135" y2="115" />
        <line x1="135" y1="160" x2="135" y2="180" />
      </g>
      <rect x="260" y="50" width="110" height="130" rx="3" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
      <g fill="var(--cobalt)">
        <rect x="276" y="130" width="14" height="36" />
        <rect x="296" y="112" width="14" height="54" />
        <rect x="316" y="94" width="14" height="72" />
      </g>
      <rect x="336" y="76" width="14" height="90" fill="var(--vermilion)" />
      <Label x={260} y={42}>DASHBOARD</Label>
      <path d="M40 250h330" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="370" cy="250" r="5" fill="var(--vermilion)" />
      <Label x={40} y={272}>BUILD → TEST → DEPLOY</Label>
    </Frame>
  )
}

// Grafik eksperimen: hasil beberapa percobaan, satu titik yang dipilih.
export function ResearchDiagram() {
  const points = [
    [80, 210],
    [125, 190],
    [170, 196],
    [215, 150],
    [260, 140],
    [305, 104],
    [345, 92],
  ]
  return (
    <Frame>
      <g stroke="var(--ink)" strokeWidth="1.5">
        <line x1="60" y1="40" x2="60" y2="240" />
        <line x1="60" y1="240" x2="370" y2="240" />
      </g>
      <polyline points={points.map((p) => p.join(",")).join(" ")} fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <polyline
        points="80,225 125,218 170,214 215,200 260,194 305,182 345,176"
        fill="none"
        stroke="var(--cobalt)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="var(--paper-light)" stroke="var(--ink)" strokeWidth="1.5" />
      ))}
      <circle cx="305" cy="104" r="12" fill="none" stroke="var(--vermilion)" strokeWidth="2" />
      <line x1="305" y1="92" x2="305" y2="58" stroke="var(--vermilion)" strokeWidth="1" />
      <Label x={305} y={50} anchor="middle">EKSPERIMEN 006</Label>
      <Label x={68} y={36}>KUALITAS</Label>
      <Label x={370} y={262} anchor="end">ITERASI →</Label>
      <Label x={68} y={262}>BASELINE - - -</Label>
    </Frame>
  )
}
