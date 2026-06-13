import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
if (!EMAIL) throw new Error('Missing APPVERSE_EMAIL')

const browser = await chromium.launch({ headless: false, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] })
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const page = await context.newPage()

await page.goto('https://appverse.id/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4000)
await page.getByRole('button', { name: /Masuk dengan Google/i }).click({ force: true })
await page.waitForTimeout(5000)
const target = context.pages()[context.pages().length - 1]
await target.waitForTimeout(4000)
await target.locator('input').first().fill(EMAIL, { force: true })
await target.getByRole('button', { name: /^Next$/i }).click({ force: true })
await target.waitForTimeout(7000)
const body = await target.locator('body').innerText()
console.log('URL:', target.url())
console.log('BODY_START')
console.log(body.slice(0, 3000))
console.log('BODY_END')
console.log('HAS_PASSWORD:', await target.locator('input[name="Passwd"]').count())
const nums = [...body.matchAll(/\b\d{1,3}\b/g)].map(m => m[0])
console.log('NUMBERS:', JSON.stringify(nums))
await target.screenshot({ path: '/tmp/google-after-email-state.png', fullPage: true })
console.log('SCREENSHOT:/tmp/google-after-email-state.png')
await browser.close()
