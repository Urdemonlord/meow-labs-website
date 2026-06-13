import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const browser = await chromium.launch({ headless: false, args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] })
const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const page = await context.newPage()

await page.goto('https://appverse.id/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4000)
await page.getByRole('button', { name: /Masuk dengan Google/i }).click({ force: true })
await page.waitForTimeout(5000)
const target = context.pages()[context.pages().length - 1]
await target.waitForTimeout(4000)
console.log('STEP1_URL:', target.url())
console.log('STEP1_TEXT:', (await target.locator('body').innerText()).slice(0, 2000))
await target.screenshot({ path: '/tmp/google-step1-current.png', fullPage: true })

const emailInputs = await target.locator('input').count()
console.log('INPUT_COUNT_1:', emailInputs)
if (EMAIL && emailInputs > 0) {
  await target.locator('input').first().fill(EMAIL, { force: true }).catch(e => console.log('EMAIL_FILL_ERR:', e.message))
  await target.getByRole('button', { name: /^Next$/i }).click({ force: true }).catch(e => console.log('NEXT1_ERR:', e.message))
  await target.waitForTimeout(6000)
  console.log('STEP2_URL:', target.url())
  console.log('STEP2_TEXT:', (await target.locator('body').innerText()).slice(0, 2500))
  await target.screenshot({ path: '/tmp/google-step2-current.png', fullPage: true })
  console.log('INPUT_COUNT_2:', await target.locator('input').count())
}

await browser.close()
