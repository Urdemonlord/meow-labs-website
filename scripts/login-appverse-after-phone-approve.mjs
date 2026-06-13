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

await page.goto('https://appverse.id/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(3000)
await page.getByRole('button', { name: /Masuk dengan Google/i }).click({ force: true })
await page.waitForTimeout(4000)

const pages = context.pages()
const popup = pages[pages.length - 1]
await popup.waitForTimeout(2000)
await popup.locator('input').first().fill(EMAIL, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })
await popup.waitForTimeout(3000)
await popup.locator('input[name="Passwd"]').fill(PASSWORD, { force: true })
await popup.getByRole('button', { name: /^Next$/i }).click({ force: true })

for (let i = 1; i <= 24; i++) {
  await page.waitForTimeout(5000)
  let popupUrl = ''
  let popupText = ''
  try {
    popupUrl = popup.url()
    popupText = (await popup.locator('body').innerText()).slice(0, 1200)
  } catch {}
  const mainUrl = page.url()
  const mainText = (await page.locator('body').innerText()).slice(0, 1200)
  console.log(`WAIT_${i}: main=${mainUrl} popup=${popupUrl}`)
  if (!mainUrl.includes('/login')) break
  if (/tap 39|Check your Infinix|Verify it.?s you|Enter code|Try another way/i.test(popupText)) {
    console.log('POPUP_TEXT:', popupText)
  }
}

console.log('FINAL_MAIN_URL:', page.url())
console.log('FINAL_MAIN_TITLE:', await page.title())
console.log('FINAL_MAIN_TEXT:', (await page.locator('body').innerText()).slice(0, 2500))
await page.screenshot({ path: '/tmp/appverse-after-phone-approve-check.png', fullPage: true })
console.log('SCREENSHOT:/tmp/appverse-after-phone-approve-check.png')
await context.storageState({ path: '/tmp/appverse-storage.json' })
console.log('STORAGE_STATE_SAVED:/tmp/appverse-storage.json')
await browser.close()
