// Membangun figur isometrik "Proses kerja" (skill anatomy) menjadi SVG statis.
// Jalankan: node scripts/build-process-figure.mjs
// Hasil: components/home/process-figure-art.ts dan process-figure-motion.ts (jangan diedit manual).
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import * as k from "../lib/iso/iso-kit.mjs"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")

const WIDTH = 640
const HEIGHT = 300

// Meja: pelat dasar dengan kaki. x sepanjang rel, y ke depan, z ke atas.
const PLATE = { x: -156, y: -66, w: 312, d: 124, r: 8 }
const PLATE_H = 12
const FOOT_H = 5

// Rel dan kereta yang membawa proyek.
const RAIL_FROM = -128
const RAIL_TO = 128
const RAILS = [-19, 14]
const CARRIAGE = { x: -22, y: -24, w: 44, d: 48, r: 3 }
const CARRIAGE_Z = 3
const CARRIAGE_TOP = 8
const LAYER = { x: -14, y: -14, w: 28, d: 28, r: 1.5 }
const LAYER_H = 5

// Empat stasiun di belakang rel, satu per tahap.
const STOPS = [-96, -32, 32, 96]
const STATION_Y = -46
const POST_TOP = 30

// Dial progres di ujung kiri belakang.
const DIAL = [-134, -42]
const DIAL_R = 15
const DIAL_Z = 40
const DIAL_H = 7
const DIAL_TOP = DIAL_Z + DIAL_H
const SWEEP = 0.8 // jarum menyapu 80% lingkaran dari 0% ke 100%

const P = k.fitProjection(
  [
    ...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0),
    [DIAL[0], DIAL[1], DIAL_TOP + 2],
    ...STOPS.map((x) => [x, STATION_Y, POST_TOP + 10]),
    [STOPS[3], 0, CARRIAGE_TOP + LAYER_H * 4],
  ],
  WIDTH,
  HEIGHT,
  { pad: 14, azimuth: 42 },
)

const at = (point) => k.iso(point, P)
const S = (paths, style) => k.solidSvg(paths, style)
const L = (d, style) => k.lineSvg(d, style)
const D = (points, style) => k.dotsSvg(points, style)
const byDepth = (points) => [...points].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P))

function plate() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`]
  for (const [x, y] of byDepth(k.corners(PLATE, 24))) {
    out.push(S(k.cylinder(x, y, 7, -PLATE_H - FOOT_H, 1.6, P, 28), { tone: "lo" }))
    out.push(S(k.cylinder(x, y, 5.4, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 28), { tone: "mid" }))
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.6), { tone: "mid", inner: k.sideSeam(PLATE, -PLATE_H / 2, P) }))
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }))
  const screws = k.corners(PLATE, 10)
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 2.2, 0, P, 16)).join(""), { tone: "lo" }))
  out.push(D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.5 }))

  // Penggaris di depan rel: jarak tempuh proyek.
  const strip = { x: RAIL_FROM, y: PLATE.y + PLATE.d - 18, w: RAIL_TO - RAIL_FROM, d: 7, r: 1 }
  out.push(S(k.slabOf(strip, 0, 0.6, P, 3), { tone: "lo", crease: "none" }))
  const ticks = k.topTicks(strip.x + 4, strip.x + strip.w - 4, 4, 5, strip.y + 0.8, 0.6, [2, 3.6], P)
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }))
  out.push(D([at([strip.x + 2, strip.y + 3.5, 0.6]), at([strip.x + strip.w - 2, strip.y + 3.5, 0.6])], { size: 0.45 }))

  // Tanda posisi tiap stasiun di penggaris.
  for (const x of STOPS) {
    out.push(L(k.lineOnTop([x, strip.y + 0.8], [x, strip.y + 6.2], 0.6, P), { tone: "hi" }))
  }
  return out.join("")
}

function rails() {
  const out = []
  for (const y of RAILS) {
    out.push(S(k.slabOf({ x: RAIL_FROM, y, w: RAIL_TO - RAIL_FROM, d: 5, r: 1 }, 0, 3, P, 3, 0.4), { tone: "mid" }))
    out.push(D([RAIL_FROM + 6, -64, 0, 64, RAIL_TO - 6].map((x) => at([x, y + 2.5, 3])), { size: 0.4 }))
  }
  for (const x of [RAIL_FROM - 6, RAIL_TO + 1]) {
    out.push(S(k.slabOf({ x, y: -24, w: 5, d: 48, r: 1.2 }, 0, 8, P, 3, 0.5), { tone: "mid" }))
    out.push(D([at([x + 2.5, -19, 8]), at([x + 2.5, 19, 8])], { size: 0.45 }))
  }
  return out.join("")
}

// Kepala tiap stasiun berbeda, sesuai pekerjaannya.
function stationHead(index, x, y, z) {
  const out = []
  if (index === 0) {
    // Diskusi: corong mikrofon dengan kisi.
    out.push(S(k.cylinder(x, y, 8, z, 7, P, 40, 0.6), { tone: "mid" }))
    out.push(L(k.ring(x, y, 6, z + 7, P, 32), { tone: "lo" }))
    out.push(D(k.dotGrid(x - 3.6, y - 3.6, 4, 4, 2.4, z + 7, P), { size: 0.4, tone: "lo" }))
  } else if (index === 1) {
    // Perancangan: kepala jangka dengan skala sudut.
    out.push(S(k.cylinder(x, y, 8, z, 5, P, 40, 0.5), { tone: "mid" }))
    const ticks = k.radialTicks(x, y, 7.2, 24, 6, z + 5, [1, 2], P)
    out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }))
    out.push(L(k.ring(x, y, 1.4, z + 5, P, 12), { tone: "mid" }))
  } else if (index === 2) {
    // Pengembangan: kepala bor dengan kenop berulir.
    out.push(S(k.slabOf({ x: x - 7.5, y: y - 7.5, w: 15, d: 15, r: 1.5 }, z, 7, P, 3, 0.5), { tone: "mid", inner: k.sideSeam({ x: x - 7.5, y: y - 7.5, w: 15, d: 15, r: 1.5 }, z + 3.5, P, 3) }))
    out.push(D(k.corners({ x: x - 7.5, y: y - 7.5, w: 15, d: 15 }, 2.4).map(([px, py]) => at([px, py, z + 7])), { size: 0.4 }))
  } else {
    // Peluncuran: kepala pegas peluncur.
    out.push(S(k.cylinder(x, y, 7, z, 4, P, 36, 0.5), { tone: "mid" }))
    out.push(L(k.knurl(x, y, 7, z, z + 4, 32, P), { tone: "lo" }))
  }
  return out.join("")
}

function stations() {
  const out = []
  STOPS.forEach((x, index) => {
    const pad = { x: x - 11, y: STATION_Y - 8, w: 22, d: 16, r: 2 }
    out.push(S(k.slabOf(pad, 0, 5, P, 4, 0.6), { tone: "mid" }))
    out.push(L(k.planOutline(k.insetPlan(pad, 2.2), 5, P, 4), { tone: "faint" }))
    out.push(D(k.corners(pad, 3.2).map(([px, py]) => at([px, py, 5])), { size: 0.4 }))
    // Pelat nomor tahap di depan alas.
    const tag = [x - 6, STATION_Y + 3.4]
    out.push(k.faceTextSvg(k.topMatrix(tag, 5, P, "x"), String(index + 1).padStart(2, "0"), { size: 3, tone: "lo" }))
    // Tiang, kerah, dan kepala.
    out.push(S(k.cylinder(x + 3, STATION_Y - 1, 3.2, 5, 2, P, 24), { tone: "mid" }))
    out.push(S(k.cylinder(x + 3, STATION_Y - 1, 2.4, 7, POST_TOP - 7, P, 20), { tone: "mid", crease: "none" }))
    out.push(L(k.sideArc(x + 3, STATION_Y - 1, 2.4, 18, P, 12), { tone: "faint" }))
    out.push(stationHead(index, x + 3, STATION_Y - 1, POST_TOP))
    // Lampu indikator di samping tiang: menyala saat proyek ada di stasiun ini.
    const lamp = [x - 5, STATION_Y - 1]
    out.push(S(k.cylinder(lamp[0], lamp[1], 3.4, 5, 2.4, P, 24), { tone: "lo" }))
    out.push(`<g data-lamp="${index}" style="opacity:0;transition:opacity .4s var(--anatomy-ease)">${S(k.cylinder(lamp[0], lamp[1], 2.5, 7.4, 2, P, 24), { tone: "hi", lit: true })}</g>`)
  })
  return out.join("")
}

function dial() {
  const out = []
  const [x, y] = DIAL
  const foot = { x: x - 9, y: y - 9, w: 18, d: 18, r: 2.5 }
  out.push(S(k.slabOf(foot, 0, 6, P, 4, 0.6), { tone: "mid" }))
  out.push(D(k.corners(foot, 3).map(([px, py]) => at([px, py, 6])), { size: 0.4 }))
  out.push(S(k.cylinder(x, y, 2.6, 6, DIAL_Z - 6, P, 20), { tone: "mid", crease: "none" }))
  out.push(L(k.sideArc(x, y, 2.6, 22, P, 12), { tone: "faint" }))
  out.push(S(k.cylinder(x, y, DIAL_R, DIAL_Z, DIAL_H, P, 64, 0.8), { tone: "hi", crease: "lo" }))
  out.push(L(k.knurl(x, y, DIAL_R, DIAL_TOP - 3, DIAL_TOP, 72, P, 0.3), { tone: "lo" }))
  out.push(L(k.ring(x, y, DIAL_R - 2, DIAL_TOP, P, 64), { tone: "lo" }))
  const ticks = k.radialTicks(x, y, DIAL_R - 2.6, 20, 5, DIAL_TOP, [1, 2.2], P, 0, Math.PI * 2 * SWEEP)
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }))
  out.push(L(k.ring(x, y, 1.4, DIAL_TOP, P, 16), { tone: "mid" }))
  return out.join("")
}

function carriage() {
  const out = [`<path class="iso-halo" d="${k.haloOf(k.insetPlan(CARRIAGE, 3), CARRIAGE_Z, 0.1, P)}" style="filter:blur(4px)"/>`]
  out.push(S(k.slabOf(CARRIAGE, CARRIAGE_Z, CARRIAGE_TOP - CARRIAGE_Z, P, 5, 0.6), { tone: "mid" }))
  for (const y of RAILS) out.push(L(k.lineOnTop([CARRIAGE.x, y + 2.5], [CARRIAGE.x + CARRIAGE.w, y + 2.5], CARRIAGE_TOP, P), { tone: "faint" }))
  out.push(D(k.corners(CARRIAGE, 3).map(([x, y]) => at([x, y, CARRIAGE_TOP])), { size: 0.4, tone: "lo" }))
  // Proyek: lapisan bertambah satu di setiap tahap.
  for (let i = 0; i < 4; i += 1) {
    const z = CARRIAGE_TOP + LAYER_H * i
    const plan = k.insetPlan(LAYER, i * 1.2)
    out.push(
      `<g data-layer="${i}" style="transition:opacity .45s var(--anatomy-ease)${i ? ";opacity:0" : ""}">${S(k.slabOf(plan, z, LAYER_H, P, 3, 0.5), { tone: "hi", crease: "lo" })}${L(k.planOutline(k.insetPlan(plan, 2), z + LAYER_H, P, 3), { tone: "faint" })}</g>`,
    )
  }
  // Gagang dorong di depan kereta.
  const handle = [CARRIAGE.x + CARRIAGE.w - 8, CARRIAGE.y + CARRIAGE.d + 3]
  out.push(S(k.slabOf({ x: handle[0] - 2, y: CARRIAGE.y + CARRIAGE.d - 1, w: 4, d: 4, r: 1 }, CARRIAGE_Z + 1, 3, P, 2), { tone: "mid", crease: "none" }))
  out.push(S(k.cylinder(handle[0], handle[1] + 1, 3, CARRIAGE_Z, 5, P, 20), { tone: "mid" }))
  out.push(L(k.knurl(handle[0], handle[1] + 1, 3, CARRIAGE_Z, CARRIAGE_Z + 5, 18, P), { tone: "lo" }))
  return out.join("")
}

function needleAt(progress) {
  const angle = progress * Math.PI * 2 * SWEEP
  const [x, y] = DIAL
  return k.lineOnTop(
    [x - Math.sin(angle) * 2.6, y + Math.cos(angle) * 2.6],
    [x + Math.sin(angle) * (DIAL_R - 3.6), y - Math.cos(angle) * (DIAL_R - 3.6)],
    DIAL_TOP + 0.2,
    P,
  )
}

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  label:
    "Meja kerja dengan rel. Sebuah kereta membawa proyek melewati empat stasiun: Diskusi, Perancangan, Pengembangan, dan Peluncuran. Di setiap stasiun proyek bertambah satu lapisan, lampu stasiun menyala, dan jarum dial menunjukkan progres.",
  body: [
    plate(),
    rails(),
    dial(),
    `<path data-part="needle" class="iso-line" data-tone="lit" data-free="start" d="${needleAt(0.25)}" style="stroke-width:1.1"/>`,
    stations(),
    `<g data-part="carriage" transform="${k.translateAlong(P, [STOPS[0], 0, 0])}">${carriage()}</g>`,
  ],
})

// Jarum dihitung ulang di browser, jadi titik-titiknya ikut diekspor.
const needle = Array.from({ length: 101 }, (_, i) => needleAt(i / 100))
const unit = k.axisVector(P, [1, 0, 0])

const header = "// File ini dibuat oleh scripts/build-process-figure.mjs. Jangan diedit manual.\n"
const files = {
  "components/home/process-figure-art.ts": `${header}export const processFigureSvg = ${JSON.stringify(svg)}\n`,
  "components/home/process-figure-motion.ts": `${header}export const processFigureMotion = ${JSON.stringify({ stops: STOPS, unit, needle })} as const\n`,
}
for (const [path, text] of Object.entries(files)) {
  writeFileSync(join(ROOT, path), text)
  console.log("wrote", path, (text.length / 1024).toFixed(1) + " KB")
}
