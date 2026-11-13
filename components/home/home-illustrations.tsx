// Ilustrasi homepage penuh, gaya editorial yang sama dengan
// capability-diagrams: garis tipis ink, label mono, aksen vermilion,
// cobalt, dan forest di atas token warna yang sudah ada.
// Semua komponen di sini dekoratif (aria-hidden), isi dijelaskan oleh
// teks di sekitarnya. Dipakai homepage saja.
//
// Scope yang dikonfirmasi Arya 2026-11-13: homepage saja, full ilustrasi
// sampai foto diganti ilustrasi. Yang sengaja TIDAK diubah: screenshot
// karya klien (bukti kerja, bukan foto), logo klien, dan Footer (komponen
// bersama semua halaman).

const mono = { fontFamily: "var(--font-plex-mono), ui-monospace, monospace" }

// Bingkai terang dengan grid putus-putus, sama seperti Frame di
// capability-diagrams. `id` membedakan pattern antar ilustrasi.
function LightFrame({ id, children }: { id: string; children: React.ReactNode }) {
  const patternId = `hi-grid-${id}`
  return (
    <svg viewBox="0 0 400 240" aria-hidden="true" className="h-full w-full">
      <defs>
        <pattern id={patternId} x="25" y="25" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25 0V50M0 25H50" stroke="var(--rule)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="var(--paper-light)" />
      <rect x="1" y="1" width="398" height="238" fill={`url(#${patternId})`} />
      {children}
    </svg>
  )
}

function LightLabel({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontSize="12" letterSpacing="1" fill="var(--ink-muted)" textAnchor={anchor} style={mono}>
      {children}
    </text>
  )
}

// Candi Prambanan garis-tipis di atas matahari vermilion. Dipakai sebagai
// lapisan bawah hero (fallback tanpa JS); lapisan ASCII di atasnya yang
// tampil saat JS jalan tidak berubah. viewBox mengikuti bingkai hero
// (64:56) agar HeroOverlay tetap sejajar.
export function TempleIllustration() {
  return (
    <svg viewBox="0 0 640 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="h-full w-full">
      <rect width="640" height="560" fill="var(--ink)" />
      <circle cx="190" cy="160" r="125" fill="var(--vermilion)" />
      <circle cx="190" cy="160" r="140" fill="none" stroke="var(--paper-light)" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />
      <g fill="var(--paper-light)" opacity="0.85">
        <ellipse cx="470" cy="120" rx="70" ry="16" />
        <ellipse cx="510" cy="140" rx="46" ry="12" />
        <ellipse cx="120" cy="330" rx="60" ry="14" />
      </g>
      <g fill="none" stroke="var(--paper-light)" strokeWidth="1.5">
        <path d="M250 460L390 460 372 402 268 402Z" />
        <path d="M266 402L374 402 360 342 280 342Z" />
        <path d="M280 342L360 342 348 286 292 286Z" />
        <path d="M292 286L348 286 338 236 302 236Z" />
        <path d="M302 236L338 236 330 192 310 192Z" />
        <path d="M310 192L330 192 320 138Z" />
        <path d="M310 460V424Q320 404 330 424V460" />
        <line x1="290" y1="402" x2="290" y2="460" />
        <line x1="350" y1="402" x2="350" y2="460" />
        <path d="M140 460L210 460 200 408 150 408Z" />
        <path d="M150 408L200 408 192 362 158 362Z" />
        <path d="M158 362L192 362 175 318Z" />
        <path d="M430 460L500 460 490 408 440 408Z" />
        <path d="M440 408L490 408 482 362 448 362Z" />
        <path d="M448 362L482 362 465 318Z" />
        <line x1="40" y1="500" x2="600" y2="500" />
        <path d="M90 180q8-8 16 0M106 180q8-8 16 0" />
        <path d="M500 210q8-8 16 0M516 210q8-8 16 0" />
      </g>
      <g fill="var(--forest)">
        <circle cx="70" cy="480" r="52" />
        <circle cx="120" cy="500" r="38" />
        <circle cx="570" cy="485" r="48" />
        <circle cx="525" cy="505" r="30" />
      </g>
      <g fill="var(--paper-light)" opacity="0.7">
        <circle cx="60" cy="470" r="3" />
        <circle cx="95" cy="495" r="3" />
        <circle cx="575" cy="475" r="3" />
        <circle cx="540" cy="500" r="3" />
      </g>
    </svg>
  )
}

// Kepala arca digambar ulang sebagai ilustrasi garis di atas latar gelap,
// menggantikan foto arca-head.webp di Manifesto. Mahkota berukir, wajah,
// dan anting besar dipertahankan sebagai ciri arca, tanpa tekstur foto.
export function ArcaIllustration() {
  return (
    <svg viewBox="0 0 440 470" aria-hidden="true" className="h-full w-full">
      <rect width="440" height="470" fill="var(--ink)" />
      <g fill="var(--forest)">
        <path d="M20 470Q10 380 60 350Q90 400 70 470Z" />
        <path d="M420 470Q430 380 380 350Q350 400 370 470Z" />
        <circle cx="52" cy="372" r="14" />
        <circle cx="388" cy="372" r="14" />
      </g>
      <g fill="none" stroke="var(--paper-light)" strokeWidth="1.5">
        <path d="M110 470Q130 400 220 390Q310 400 330 470" />
        <ellipse cx="220" cy="250" rx="92" ry="112" />
        <path d="M128 200Q130 90 220 70Q310 90 312 200" />
        <path d="M150 168Q160 110 220 96Q280 110 290 168" />
        <path d="M168 140Q180 104 220 96Q260 104 272 140" />
        <path d="M128 200Q220 150 312 200" />
        <circle cx="220" cy="72" r="10" />
        <circle cx="168" cy="92" r="7" />
        <circle cx="272" cy="92" r="7" />
        <path d="M158 232Q178 220 198 232" />
        <path d="M242 232Q262 220 282 232" />
        <path d="M168 246Q182 254 194 246" />
        <path d="M246 246Q258 254 272 246" />
        <path d="M220 250V296Q214 306 220 312Q226 306 220 296" />
        <path d="M196 330Q220 322 244 330Q220 344 196 330Z" />
        <ellipse cx="128" cy="268" rx="16" ry="26" />
        <ellipse cx="312" cy="268" rx="16" ry="26" />
        <circle cx="128" cy="312" r="16" />
        <circle cx="312" cy="312" r="16" />
        <circle cx="128" cy="312" r="7" />
        <circle cx="312" cy="312" r="7" />
      </g>
      <g fill="var(--vermilion)">
        <circle cx="220" cy="72" r="3" />
      </g>
    </svg>
  )
}

// Bulan purnama sebagai ilustrasi datar dengan kawah, menggantikan foto
// moon.webp. Dipakai di lingkaran kecil yang menimpa ilustrasi arca.
export function MoonIllustration() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
      <circle cx="100" cy="100" r="96" fill="var(--paper-light)" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="var(--vermilion)" strokeWidth="2" />
      <g fill="var(--ink)" opacity="0.22">
        <circle cx="70" cy="70" r="18" />
        <circle cx="125" cy="55" r="11" />
        <circle cx="140" cy="110" r="20" />
        <circle cx="80" cy="125" r="13" />
        <circle cx="110" cy="150" r="8" />
        <circle cx="55" cy="105" r="7" />
      </g>
      <g fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.25">
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="58" />
      </g>
    </svg>
  )
}

// Peta Indonesia datar (bentuk disederhanakan, bergaya ilustrasi),
// menggantikan foto satelit indonesia-map.webp. Penanda vermilion di
// Jawa bagian barat adalah Semarang.
export function IndonesiaMapIllustration() {
  return (
    <svg viewBox="0 0 800 260" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="h-full w-full">
      <g fill="var(--forest)" stroke="var(--paper-light)" strokeWidth="1.5">
        <polygon points="60,130 88,62 128,38 152,78 132,142 102,182 70,162" />
        <polygon points="300,42 362,28 402,58 392,122 342,142 300,112" />
        <polygon points="468,62 500,48 512,88 492,112 482,142 460,122 470,90" />
        <polygon points="180,202 420,190 432,206 182,218" />
        <polygon points="618,82 722,58 762,98 732,150 652,142 610,112" />
        <circle cx="540" cy="150" r="10" />
        <circle cx="565" cy="168" r="7" />
        <circle cx="180" cy="150" r="8" />
        <circle cx="210" cy="120" r="6" />
      </g>
      <g fontSize="11" letterSpacing="1.5" fill="var(--paper-light)" opacity="0.75" style={mono}>
        <text x="86" y="30">SUMATRA</text>
        <text x="310" y="20">KALIMANTAN</text>
        <text x="452" y="36">SULAWESI</text>
        <text x="280" y="238">JAWA</text>
        <text x="660" y="40">PAPUA</text>
      </g>
      <circle cx="212" cy="204" r="7" fill="var(--vermilion)" className="ml-svg-pulse" />
      <circle cx="212" cy="204" r="14" fill="none" stroke="var(--vermilion)" strokeWidth="1.5" />
      <text x="228" y="184" fontSize="11" letterSpacing="1.5" fill="var(--paper-light)" style={mono}>
        SEMARANG
      </text>
    </svg>
  )
}

export type ChangelogIllustrationKind = "website" | "passkey" | "courses" | "generic"

// Ilustrasi per entri changelog, dipilih dari produk/judul entrinya.
export function ChangelogIllustration({ kind }: { kind: ChangelogIllustrationKind }) {
  return (
    <LightFrame id={`changelog-${kind}`}>
      {kind === "website" && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <rect x="70" y="42" width="260" height="150" rx="4" fill="var(--paper)" />
            <line x1="70" y1="64" x2="330" y2="64" />
            <rect x="88" y="82" width="120" height="10" fill="var(--ink)" />
            <rect x="88" y="100" width="88" height="10" fill="var(--ink)" />
            <rect x="88" y="126" width="64" height="18" fill="var(--paper)" />
            <rect x="228" y="82" width="84" height="60" />
          </g>
          <rect x="88" y="126" width="64" height="18" fill="var(--vermilion)" />
          <g fill="var(--ink)">
            <circle cx="82" cy="53" r="3" />
            <circle cx="92" cy="53" r="3" />
            <circle cx="102" cy="53" r="3" />
          </g>
          <path d="M300 150l14 14-8 2 4 8-6 3-4-8-8 2z" fill="var(--cobalt)" />
          <LightLabel x={70} y={216}>REDESAIN · EDITORIAL</LightLabel>
        </g>
      )}
      {kind === "passkey" && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <path d="M200 34l66 26v46c0 44-30 70-66 82-36-12-66-38-66-82V60z" fill="var(--paper)" />
            <path d="M178 100l16 16 30-32" stroke="var(--forest)" strokeWidth="2.5" />
            <circle cx="200" cy="52" r="4" fill="var(--vermilion)" stroke="none" />
          </g>
          <LightLabel x={200} y={216} anchor="middle">PASSKEY · TANPA KATA SANDI</LightLabel>
        </g>
      )}
      {kind === "courses" && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <path d="M200 70Q160 50 110 62V178Q160 166 200 186Q240 166 290 178V62Q240 50 200 70Z" fill="var(--paper)" />
            <line x1="200" y1="70" x2="200" y2="186" />
            <path d="M132 96l-14 12 14 12M268 96l14 12-14 12" stroke="var(--cobalt)" strokeWidth="2" />
            <line x1="200" y1="92" x2="200" y2="124" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
          <circle cx="330" cy="150" r="26" fill="var(--forest)" />
          <path d="M322 138l10 24 6-12 12-2z" fill="var(--paper-light)" />
          <LightLabel x={70} y={216}>COURSE + PLAYGROUND KODE</LightLabel>
        </g>
      )}
      {kind === "generic" && (
        <g>
          <path d="M200 60l14 34 36 4-26 26 8 36-32-18-32 18 8-36-26-26 36-4z" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
          <circle cx="200" cy="118" r="8" fill="var(--vermilion)" />
          <LightLabel x={200} y={216} anchor="middle">PEMBARUAN PRODUK</LightLabel>
        </g>
      )}
    </LightFrame>
  )
}

// Ilustrasi per artikel catatan, dipilih dari id postingnya.
export function NoteIllustration({ postId }: { postId: number }) {
  return (
    <LightFrame id={`note-${postId}`}>
      {postId === 1 && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <rect x="60" y="46" width="150" height="110" rx="4" fill="var(--paper)" />
            <line x1="60" y1="66" x2="210" y2="66" />
            <polyline points="76,140 110,118 140,126 176,88 196,76" stroke="var(--forest)" strokeWidth="2.5" />
            <circle cx="196" cy="76" r="6" fill="var(--vermilion)" stroke="none" />
          </g>
          <g fill="var(--cobalt)">
            <rect x="250" y="120" width="18" height="40" />
            <rect x="276" y="100" width="18" height="60" />
            <rect x="302" y="78" width="18" height="82" />
          </g>
          <path d="M330 60l6 12 12 2-9 9 2 13-11-6-11 6 2-13-9-9 12-2z" fill="var(--vermilion)" />
          <LightLabel x={60} y={196}>TREN · NAIK</LightLabel>
        </g>
      )}
      {postId === 2 && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <rect x="60" y="52" width="200" height="34" rx="17" fill="var(--paper)" />
            <circle cx="80" cy="69" r="8" />
            <line x1="96" y1="69" x2="180" y2="69" />
          </g>
          <path d="M300 60c-22 0-36 16-36 34 0 26 36 62 36 62s36-36 36-62c0-18-14-34-36-34z" fill="var(--vermilion)" />
          <circle cx="300" cy="94" r="12" fill="var(--paper-light)" />
          <g fill="var(--ink)">
            <circle cx="76" cy="150" r="3" />
            <circle cx="96" cy="150" r="3" />
            <circle cx="116" cy="150" r="3" />
          </g>
          <path d="M140 130h160M140 150h120M140 170h140" stroke="var(--ink)" strokeWidth="1.5" />
          <LightLabel x={60} y={206}>SEO LOKAL · SEMARANG</LightLabel>
        </g>
      )}
      {postId === 3 && (
        <g>
          <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <rect x="56" y="56" width="160" height="110" rx="4" fill="var(--paper)" />
            <line x1="56" y1="76" x2="216" y2="76" />
            <rect x="72" y="92" width="90" height="9" fill="var(--ink)" />
            <rect x="72" y="110" width="64" height="9" fill="var(--ink)" />
            <rect x="72" y="132" width="48" height="16" fill="var(--vermilion)" stroke="none" />
            <rect x="258" y="48" width="84" height="140" rx="8" fill="var(--paper)" />
            <line x1="258" y1="68" x2="342" y2="68" />
            <rect x="272" y="84" width="56" height="8" fill="var(--ink)" />
            <rect x="272" y="100" width="40" height="8" fill="var(--ink)" />
            <rect x="272" y="120" width="48" height="16" fill="var(--cobalt)" stroke="none" />
          </g>
          <circle cx="229" cy="118" r="22" fill="var(--forest)" />
          <text x="229" y="123" fontSize="12" fill="var(--paper-light)" textAnchor="middle" style={mono}>
            VS
          </text>
          <LightLabel x={56} y={200}>WEBSITE vs APLIKASI</LightLabel>
        </g>
      )}
      {postId !== 1 && postId !== 2 && postId !== 3 && (
        <g>
          <path d="M200 60l14 34 36 4-26 26 8 36-32-18-32 18 8-36-26-26 36-4z" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
          <LightLabel x={200} y={200} anchor="middle">CATATAN</LightLabel>
        </g>
      )}
    </LightFrame>
  )
}

// Adegan per produk untuk kartu homepage saja (medium="homepage").
// Halaman /produk tetap memakai pola abstrak ProductVisual.
export function ProductSceneIllustration({ pattern }: { pattern: string }) {
  const accent =
    pattern === "grid" ? "var(--cobalt)" : pattern === "rings" ? "var(--forest)" : pattern === "bars" ? "var(--vermilion)" : "var(--paper-light)"
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
      <rect width="400" height="500" fill="var(--ink)" />
      {pattern === "grid" && (
        <g>
          <g fill="none" stroke="var(--paper-light)" strokeWidth="2">
            <rect x="70" y="56" width="260" height="86" rx="10" />
            <line x1="92" y1="86" x2="220" y2="86" />
            <line x1="92" y1="108" x2="180" y2="108" />
            <rect x="60" y="190" width="280" height="180" rx="4" fill="var(--paper)" stroke="none" />
            <rect x="60" y="190" width="280" height="180" rx="4" />
            <line x1="60" y1="214" x2="340" y2="214" />
            <rect x="80" y="236" width="120" height="12" fill="var(--ink)" stroke="none" />
            <rect x="80" y="258" width="90" height="12" fill="var(--ink)" stroke="none" />
            <rect x="80" y="290" width="70" height="52" />
            <rect x="165" y="290" width="70" height="52" />
            <rect x="250" y="290" width="70" height="52" />
          </g>
          <rect x="80" y="312" width="56" height="16" fill="var(--vermilion)" />
          <line x1="200" y1="142" x2="200" y2="190" stroke={accent} strokeWidth="2.5" />
          <path d="M192 182l8 12 8-12" fill="none" stroke={accent} strokeWidth="2.5" />
        </g>
      )}
      {pattern === "rings" && (
        <g>
          <g fill="none" stroke="var(--paper-light)" strokeWidth="2">
            <path d="M200 130Q150 108 92 122V320Q150 306 200 328Q250 306 308 320V122Q250 108 200 130Z" fill="var(--paper)" stroke="none" />
            <path d="M200 130Q150 108 92 122V320Q150 306 200 328Q250 306 308 320V122Q250 108 200 130Z" />
            <line x1="200" y1="130" x2="200" y2="328" />
            <path d="M116 170l-12 10 12 10M284 170l12 10-12 10" stroke="var(--cobalt)" strokeWidth="2.5" />
          </g>
          <circle cx="200" cy="382" r="30" fill="var(--forest)" />
          <path d="M192 368l12 28 8-14 14-2z" fill="var(--paper-light)" />
        </g>
      )}
      {pattern === "bars" && (
        <g>
          <g fill="none" stroke="var(--paper-light)" strokeWidth="2.5">
            <path d="M120 200a80 80 0 0 1 160 0" />
            <rect x="104" y="190" width="32" height="56" rx="10" fill="var(--paper)" stroke="none" />
            <rect x="264" y="190" width="32" height="56" rx="10" fill="var(--paper)" stroke="none" />
            <rect x="104" y="190" width="32" height="56" rx="10" />
            <rect x="264" y="190" width="32" height="56" rx="10" />
            <rect x="90" y="290" width="220" height="90" rx="4" fill="var(--paper)" stroke="none" />
            <rect x="90" y="290" width="220" height="90" rx="4" />
            <path d="M104 312l8 8 14-16" stroke="var(--forest)" strokeWidth="2.5" />
          </g>
          <g stroke="var(--ink)" strokeWidth="2">
            <line x1="140" y1="320" x2="240" y2="320" />
            <line x1="140" y1="342" x2="210" y2="342" />
          </g>
          <circle cx="290" cy="320" r="18" fill="none" stroke="var(--vermilion)" strokeWidth="2.5" />
          <text x="290" y="325" fontSize="11" fill="var(--paper-light)" textAnchor="middle" style={mono}>
            60
          </text>
        </g>
      )}
      {pattern === "dots" && (
        <g>
          <g fill="none" stroke="var(--paper-light)" strokeWidth="2">
            <rect x="100" y="50" width="200" height="260" rx="4" fill="var(--paper)" stroke="none" />
            <rect x="100" y="50" width="200" height="260" rx="4" />
            <rect x="124" y="74" width="56" height="56" />
            <circle cx="152" cy="96" r="14" />
            <line x1="196" y1="86" x2="276" y2="86" />
            <line x1="196" y1="106" x2="260" y2="106" />
            <line x1="124" y1="160" x2="276" y2="160" />
            <line x1="124" y1="182" x2="276" y2="182" />
            <line x1="124" y1="204" x2="240" y2="204" />
          </g>
          <path d="M120 360a80 80 0 0 1 160 0" fill="none" stroke="var(--paper-light)" strokeWidth="2.5" />
          <line x1="200" y1="360" x2="248" y2="312" stroke="var(--vermilion)" strokeWidth="3" />
          <circle cx="200" cy="360" r="6" fill="var(--vermilion)" />
        </g>
      )}
    </svg>
  )
}
