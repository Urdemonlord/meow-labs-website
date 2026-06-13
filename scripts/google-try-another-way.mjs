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

await popup.getByText(/Try another way/i).click({ force: true })
await popup.waitForTimeout(3000)
console.log('URL:', popup.url())
console.log('BODY:', (await popup.locator('body').innerText()).slice(0, 3000))
await popup.screenshot({ path: '/tmp/google-try-another-way.png', fullPage: true })

const texts = await popup.locator('body *').allInnerTexts().catch(() => [])
console.log('TEXTS:', JSON.stringify(texts.slice(0, 80), null, 2))
await browser.close()
