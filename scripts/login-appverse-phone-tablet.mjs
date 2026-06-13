import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
if (!EMAIL || !PASSWORD) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD')

const browser = await chromium.launch({ headless: false, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] })
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const page = await context.newPage()

await page.goto('https://appverse.id/login', { waitUntil: 'networkidle', timeout: 60000 })
const [popup] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('button', { name: /Masuk dengan Google/i }).click()
])
await popup.waitForURL(/accounts\.google\.com/, { timeout: 60000 })
await popup.waitForTimeout(4000)
await popup.locator('input').first().fill(EMAIL, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(5000)
await popup.locator('input[name="Passwd"]').fill(PASSWORD, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(8000)

// If QR screen, go to choices
const tryAnother = popup.getByText(/Try another way/i)
if (await tryAnother.count()) {
  await tryAnother.click({ force: true }).catch(() => {})
  await popup.waitForTimeout(3000)
}

const phoneTabletOption = popup.getByText(/Use your phone or tablet to get a security code/i)
if (await phoneTabletOption.count()) {
  await phoneTabletOption.click({ force: true })
  console.log('SELECTED_PHONE_TABLET_OPTION')
} else {
  console.log('PHONE_TABLET_OPTION_NOT_FOUND')
}

await popup.waitForTimeout(3000)
console.log('POPUP URL NOW:', popup.url())
console.log('POPUP TEXT NOW:', (await popup.locator('body').innerText()).slice(0, 1500))
await popup.screenshot({ path: '/tmp/google-phone-tablet-step.png', fullPage: true })

for (let i = 1; i <= 18; i++) {
  await popup.waitForTimeout(5000)
  const purl = popup.url()
  const mainUrl = page.url()
  console.log(`WAIT_${i}: popup=${purl} main=${mainUrl}`)
  if (mainUrl.includes('appverse.id') && !mainUrl.includes('/login')) break
}

console.log('FINAL MAIN URL:', page.url())
console.log('FINAL MAIN TITLE:', await page.title())
console.log('FINAL MAIN TEXT:', (await page.locator('body').innerText()).slice(0, 2000))
await page.screenshot({ path: '/tmp/appverse-after-approval.png', fullPage: true })
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')

await browser.close()
