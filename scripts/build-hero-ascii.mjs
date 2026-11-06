// Mengubah artwork hero menjadi data ASCII untuk components/home/hero-ascii-art.tsx.
// Jalankan: node scripts/build-hero-ascii.mjs [gambar] [output] [kolom]
import sharp from "sharp"
import { writeFileSync } from "node:fs"
const [src = "public/art/hero-temple.webp", out = "components/home/hero-ascii-data.ts", colsArg] = process.argv.slice(2)
const COLS = +colsArg || 120
const meta0 = await sharp(src).metadata()
const ROWS = Math.round(COLS * 0.602 * meta0.height / meta0.width)
const { data } = await sharp(src).resize(COLS, ROWS, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true })
const px = []; for (let i = 0; i < data.length; i += 3) px.push([data[i], data[i + 1], data[i + 2]])
// k-means 16 warna
const K = 16; let cent = Array.from({ length: K }, (_, i) => px[Math.floor((i + 0.5) * px.length / K)].slice())
const lab = new Array(px.length)
for (let it = 0; it < 15; it++) {
  px.forEach((p, i) => { let b = 0, bd = 1e9; cent.forEach((c, j) => { const d = (p[0]-c[0])**2 + (p[1]-c[1])**2 + (p[2]-c[2])**2; if (d < bd) { bd = d; b = j } }); lab[i] = b })
  const sum = cent.map(() => [0, 0, 0, 0]); px.forEach((p, i) => { const s = sum[lab[i]]; s[0] += p[0]; s[1] += p[1]; s[2] += p[2]; s[3]++ })
  cent = cent.map((c, j) => sum[j][3] ? [sum[j][0] / sum[j][3], sum[j][1] / sum[j][3], sum[j][2] / sum[j][3]] : c)
}
const keys = "abcdefghijklmnop"
const hex = (c) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")
const palette = Object.fromEntries(cent.map((c, j) => [keys[j], hex(c.map((v) => Math.min(255, v * 1.35 + 20)))]))
const lums = px.map((p) => (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255).sort((a, b) => a - b)
const lo = lums[Math.floor(lums.length * 0.03)], hi = lums[Math.floor(lums.length * 0.97)]
const color = [], level = []
for (let y = 0; y < ROWS; y++) { let cr = "", lr = ""
  for (let x = 0; x < COLS; x++) { const i = y * COLS + x, p = px[i]; const l = (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255
    const n = Math.pow(Math.max(0, Math.min(1, (l - lo) / (hi - lo))), 0.7)
    cr += keys[lab[i]]; lr += String(Math.max(1, Math.min(7, Math.round(1 + n * 6)))) }
  color.push(cr); level.push(lr) }
writeFileSync(out, `// Artwork hero (public/art/hero-temple.webp) dikonversi ke grid ASCII: palet warna dan tingkat terang 1-7.\nexport const heroAscii = ${JSON.stringify({ cols: COLS, rows: ROWS, palette, color, level })} as const\n`)
console.log(COLS, ROWS)
