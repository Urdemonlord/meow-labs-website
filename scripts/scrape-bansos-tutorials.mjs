import { chromium } from 'playwright'
import { writeFileSync } from 'fs'
import { join } from 'path'

const EMAIL = 'urdemonlord@gmail.com'
const PASSWORD = 'azazel1701'

// Bansos slugs to scrape
const BANSOS_SLUGS = [
  '8da34385-e906-4c5c-90f8-b5ac4f406c24',
  'faf4d298-d2be-4b3e-a921-f3539e8f1d4b',
  '843c8dd0-3e62-4545-978e-42271e6670d8',
  '088afbbf-96eb-485b-b825-a7e11e25a54b',
  '5e9abec0-735e-4f38-9c61-a3c7bf985aa0',
  'a1234567-b890-cdef-1234-567890abcdef', // will add more
]

async function loginToAppVerse(page) {
  console.log('Navigating to AppVerse login...')
  await page.goto('https://appverse.id/login', { waitUntil: 'networkidle' })

  // Click Google login button
  console.log('Clicking Google login...')
  const googleButton = await page.locator('button:has-text("Google")').first()
  await googleButton.click()

  // Wait for Google login popup
  const [popup] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('button:has-text("Google")').first().click(),
  ])

  console.log('Logging in with Google...')
  await popup.fill('input[type="email"]', EMAIL)
  await popup.press('input[type="email"]', 'Enter')
  await popup.waitForTimeout(1000)
  await popup.fill('input[type="password"]', PASSWORD)
  await popup.press('input[type="password"]', 'Enter')

  // Wait for redirect back to AppVerse
  await page.waitForURL('https://appverse.id/**', { timeout: 10000 })
  console.log('Login successful!')
}

async function scrapeBansosTutorial(page, slug) {
  const url = `https://appverse.id/bansos-ai/resources/${slug}/go`
  console.log(`\nScraping: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })

    // Extract tutorial content
    const title = await page.locator('h1, h2').first().textContent()
    const description = await page.locator('p').first().textContent()
    
    // Try to get tutorial steps
    const steps = await page.locator('li, ol li, ul li').allTextContents()
    const tutorialContent = await page.locator('[class*="tutorial"], [class*="content"], [class*="guide"]').first().textContent()

    const result = {
      slug,
      title: title?.trim() || 'Tutorial',
      description: description?.trim() || '',
      steps: steps.slice(0, 10), // First 10 list items
      tutorialContent: tutorialContent?.trim() || '',
      timestamp: new Date().toISOString(),
    }

    console.log(`✓ Scraped: ${result.title}`)
    return result
  } catch (err) {
    console.error(`✗ Failed to scrape ${slug}: ${err.message}`)
    return null
  }
}

async function main() {
  const browser = await chromium.launch()
  const context = await browser.createBrowserContext()
  const page = await context.newPage()

  try {
    await loginToAppVerse(page)

    const tutorials = []
    for (const slug of BANSOS_SLUGS) {
      const tutorial = await scrapeBansosTutorial(page, slug)
      if (tutorial) tutorials.push(tutorial)
      await page.waitForTimeout(1000) // Rate limit
    }

    // Save results
    const outputPath = join(process.cwd(), 'lib', 'bansos-tutorials-data.json')
    writeFileSync(outputPath, JSON.stringify(tutorials, null, 2))
    console.log(`\n✓ Saved ${tutorials.length} tutorials to ${outputPath}`)
  } finally {
    await browser.close()
  }
}

main().catch(console.error)
