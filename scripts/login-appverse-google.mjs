import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
const PASSWORD = process.env.APPVERSE_PASSWORD
if (!EMAIL || !PASSWORD) throw new Error('Missing APPVERSE_EMAIL / APPVERSE_PASSWORD')

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
})
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
})
const page = await context.newPage()

page.on('pageerror', err => console.log('PAGE ERROR:', err.message))
page.on('requestfailed', req => {
  const u = req.url()
  if (u.includes('_rsc=')) return
  console.log('REQ FAILED:', u, req.failure()?.errorText)
})

await page.goto('https://appverse.id/login', { waitUntil: 'networkidle', timeout: 60000 })

const [popup] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('button', { name: /Masuk dengan Google/i }).click()
])

await popup.waitForLoadState('domcontentloaded', { timeout: 60000 })
console.log('POPUP URL 1:', popup.url())

await popup.getByLabel(/Email or phone|Email atau ponsel/i).fill(EMAIL)
await popup.keyboard.press('Enter')
await popup.waitForTimeout(2000)

await popup.getByLabel(/Enter your password|Masukkan sandi anda|Enter your password/i).fill(PASSWORD)
await popup.keyboard.press('Enter')

await popup.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {})
await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {})
await page.waitForTimeout(5000)

console.log('FINAL PAGE URL:', page.url())
console.log('FINAL PAGE TITLE:', await page.title())
console.log('FINAL BODY:', (await page.locator('body').innerText()).slice(0, 1200))
await page.screenshot({ path: '/tmp/appverse-after-login.png', fullPage: true })

await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')

await browser.close()
