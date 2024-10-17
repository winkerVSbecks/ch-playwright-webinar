import { test, expect, takeSnapshot } from '@chromatic-com/playwright'

test('Home page loads', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Mealdrop - find your next meal/)

  await page.waitForTimeout(3000)
})
