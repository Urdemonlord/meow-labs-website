import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
const CODE = process.env.APPVERSE_RECOVERY_CODE
if (!EMAIL || !PASSWORD || !CODE) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD / APPVERSE_RECOVERY_CODE')

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

const tryAnother = popup.getByText(/Try another way/i)
if (await tryAnother.count()) {
  await tryAnother.click({ force: true }).catch(() => {})
  await popup.waitForTimeout(3000)
}

const emailOption = popup.getByText(/Get a verification code at .*@gmail\.com/i)
if (await emailOption.count()) {
  await emailOption.first().click({ force: true })
  await popup.waitForTimeout(4000)
}

const codeInput = popup.locator('input[type="text"], input[inputmode="numeric"], input[aria-label*="code" i]').filter({ hasNot: popup.locator('input[type="hidden"]') }).first()
await codeInput.waitFor({ timeout: 60000 })
await codeInput.fill(CODE, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(12000)

console.log('POPUP_URL_AFTER_CODE:', popup.url())
console.log('POPUP_TEXT_AFTER_CODE:', (await popup.locator('body').innerText()).slice(0, 2000))
await popup.screenshot({ path: '/tmp/google-after-code.png', fullPage: true })

for (let i = 1; i <= 24; i++) {
  await page.waitForTimeout(5000)
  const u = page.url()
  console.log(`WAIT_${i}: ${u}`)
  if (u.includes('appverse.id') && !u.includes('/login')) break
}

console.log('FINAL_MAIN_URL:', page.url())
console.log('FINAL_MAIN_TITLE:', await page.title())
console.log('FINAL_MAIN_TEXT:', (await page.locator('body').innerText()).slice(0, 2500))
await page.screenshot({ path: '/tmp/appverse-after-code-login.png', fullPage: true })
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')
await browser.close()
