import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
if (!EMAIL || !PASSWORD) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD')

const browser = await chromium.launch({
  headless: false,
  args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
})
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
})
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

const passwordInput = popup.locator('input[name="Passwd"]')
await passwordInput.waitFor({ timeout: 60000 })
await passwordInput.fill(PASSWORD, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(12000)

console.log('POPUP URL AFTER PASS:', popup.url())
console.log('POPUP TEXT AFTER PASS:', (await popup.locator('body').innerText()).slice(0, 1500))
await popup.screenshot({ path: '/tmp/google-after-pass.png', fullPage: true })

await page.waitForTimeout(12000)
console.log('FINAL URL:', page.url())
console.log('FINAL TITLE:', await page.title())
console.log('FINAL TEXT:', (await page.locator('body').innerText()).slice(0, 2000))
await page.screenshot({ path: '/tmp/appverse-final-login.png', fullPage: true })
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')

await browser.close()
