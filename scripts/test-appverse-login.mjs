import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
})
const page = await browser.newPage({
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
})

page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()))
page.on('pageerror', err => console.log('PAGE ERROR:', err.message))
page.on('requestfailed', req => console.log('REQ FAILED:', req.url(), req.failure()?.errorText))

await page.goto('https://appverse.id/login', { waitUntil: 'networkidle', timeout: 60000 })
await page.screenshot({ path: '/tmp/pw-appverse-login.png', fullPage: true })
console.log('TITLE:', await page.title())
console.log('URL:', page.url())
console.log('BODY_TEXT:', (await page.locator('body').innerText()).slice(0, 1000))
console.log('BUTTONS:', await page.locator('button').allInnerTexts())
await browser.close()
