import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
if (!EMAIL || !PASSWORD) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD')

const browser = await chromium.launch({ headless: false, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] })
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const page = await context.newPage()

await page.goto('https://appverse.id/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4000)
const [popup] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('button', { name: /Masuk dengan Google/i }).click({ force: true })
])

await popup.waitForTimeout(4000)
await popup.locator('input').first().fill(EMAIL, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(5000)
await popup.locator('input[name="Passwd"]').fill(PASSWORD, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })

for (let i = 1; i <= 24; i++) {
  await popup.waitForTimeout(5000)
  let purl = popup.url()
  let ptext = ''
  try { ptext = (await popup.locator('body').innerText()).slice(0, 1200) } catch {}
  let mainUrl = page.url()
  console.log(`WAIT_${i}: popup=${purl} main=${mainUrl}`)
  if (ptext) console.log(`TEXT_${i}: ${ptext.replace(/\s+/g, ' ').slice(0, 500)}`)
  if (mainUrl.includes('appverse.id') && !mainUrl.includes('/login')) break
}

console.log('FINAL_MAIN_URL:', page.url())
console.log('FINAL_MAIN_TITLE:', await page.title())
console.log('FINAL_MAIN_TEXT:', (await page.locator('body').innerText()).slice(0, 2500))
await page.screenshot({ path: '/tmp/appverse-login-final-check.png', fullPage: true })
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')
await browser.close()
