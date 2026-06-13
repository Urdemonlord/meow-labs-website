import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
if (!EMAIL || !PASSWORD) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD')

const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] })
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const page = await context.newPage()
await page.goto('https://appverse.id/login', { waitUntil: 'networkidle', timeout: 60000 })
const [popup] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('button', { name: /Masuk dengan Google/i }).click()
])
await popup.waitForLoadState('domcontentloaded', { timeout: 60000 })
console.log('POPUP URL 1:', popup.url())
console.log('BODY 1:', (await popup.locator('body').innerText()).slice(0, 1500))
await popup.screenshot({ path: '/tmp/google-step1.png', fullPage: true })

const emailInput = popup.locator('input[type="email"]')
await emailInput.fill(EMAIL)
await popup.keyboard.press('Enter')
await popup.waitForTimeout(5000)

console.log('POPUP URL 2:', popup.url())
console.log('BODY 2:', (await popup.locator('body').innerText()).slice(0, 2000))
await popup.screenshot({ path: '/tmp/google-step2.png', fullPage: true })

await browser.close()
