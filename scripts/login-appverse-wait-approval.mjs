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

async function findGooglePage() {
  for (let i = 0; i < 30; i++) {
    const pages = context.pages()
    for (const p of pages) {
      const url = p.url()
      if (url.includes('accounts.google.com') || url.includes('appverse.id/login')) {
        try {
          const bodyText = await p.locator('body').innerText({ timeout: 2000 }).catch(() => '')
          if (url.includes('accounts.google.com') || /Sign in with Google|Email or phone|Enter your password|Check your .*NOTE 30|Tap Yes on the notification/i.test(bodyText)) {
            return p
          }
        } catch {}
      }
    }
    await page.waitForTimeout(1000)
  }
  throw new Error('Google auth page not found')
}

await page.goto('https://appverse.id/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4000)

const popupPromise = context.waitForEvent('page', { timeout: 15000 }).catch(() => null)
await page.getByRole('button', { name: /Masuk dengan Google/i }).click({ force: true })
let popup = await popupPromise
if (!popup) popup = await findGooglePage()

await popup.bringToFront()
await popup.waitForLoadState('domcontentloaded', { timeout: 60000 }).catch(() => {})
await popup.waitForTimeout(4000)

const emailInput = popup.locator('input[type="email"], input[autocomplete="username"], #identifierId, input[name="identifier"]').first()
await emailInput.waitFor({ timeout: 60000 })
await emailInput.fill(EMAIL, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(5000)

const passwordInput = popup.locator('input[name="Passwd"], input[type="password"]').first()
await passwordInput.waitFor({ timeout: 60000 })
await passwordInput.fill(PASSWORD, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(10000)

const body = await popup.locator('body').innerText().catch(() => '')
const nums = [...body.matchAll(/\b\d{1,3}\b/g)].map(m => m[0])
const uniqueNums = [...new Set(nums)]
console.log('POPUP_URL:', popup.url())
console.log('MATCH_NUMBERS:', JSON.stringify(uniqueNums))
console.log('POPUP_TEXT:', body.slice(0, 1200))
await popup.screenshot({ path: '/tmp/google-current-approval.png', fullPage: true })
console.log('SCREENSHOT:/tmp/google-current-approval.png')

for (let i = 1; i <= 48; i++) {
  await page.waitForTimeout(5000)
  const mainUrl = page.url()
  const popupUrl = popup.url()
  console.log(`WAIT_${i}: main=${mainUrl} popup=${popupUrl}`)

  const popupText = await popup.locator('body').innerText().catch(() => '')
  const liveNums = [...new Set([...popupText.matchAll(/\b\d{1,3}\b/g)].map(m => m[0]))]
  if (liveNums.length) console.log(`LIVE_NUMBERS_${i}: ${JSON.stringify(liveNums)}`)

  if (mainUrl.includes('appverse.id') && !mainUrl.includes('/login')) {
    console.log('LOGIN_SUCCESS_MAIN')
    break
  }
}

console.log('FINAL_MAIN_URL:', page.url())
console.log('FINAL_MAIN_TITLE:', await page.title())
console.log('FINAL_MAIN_TEXT:', (await page.locator('body').innerText()).slice(0, 2000))
await page.screenshot({ path: '/tmp/appverse-after-approval-live.png', fullPage: true })
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')
await browser.close()
