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

const tryAnother = popup.getByText(/Try another way/i)
if (await tryAnother.count()) {
  await tryAnother.click({ force: true }).catch(() => {})
  await popup.waitForTimeout(3000)
}

const emailOption = popup.getByText(/Get a verification code at has/i)
await emailOption.click({ force: true })
await popup.waitForTimeout(5000)
console.log('AFTER_EMAIL_OPTION_URL:', popup.url())
console.log('AFTER_EMAIL_OPTION_TEXT:', (await popup.locator('body').innerText()).slice(0, 2000))
await popup.screenshot({ path: '/tmp/google-email-code-step.png', fullPage: true })

await context.storageState({ path: '/tmp/appverse-storage-precode.json' })
console.log('READY_FOR_CODE')

await browser.close()
