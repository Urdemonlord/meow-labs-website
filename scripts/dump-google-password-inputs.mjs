import { chromium } from 'playwright'

const EMAIL = process.env.APPVERSE_EMAIL
if (!EMAIL) throw new Error('Missing APPVERSE_EMAIL')

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

const attrs = await popup.locator('input').evaluateAll(nodes => nodes.map((n, i) => ({
  i,
  type: n.getAttribute('type'),
  name: n.getAttribute('name'),
  id: n.getAttribute('id'),
  autocomplete: n.getAttribute('autocomplete'),
  ariaLabel: n.getAttribute('aria-label'),
  placeholder: n.getAttribute('placeholder'),
  visible: !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length),
  value: n.getAttribute('value') || ''
})))
console.log(JSON.stringify(attrs, null, 2))
await popup.screenshot({ path: '/tmp/google-input-dump.png', fullPage: true })
await browser.close()
