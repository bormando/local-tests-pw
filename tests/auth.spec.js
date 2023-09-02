const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization', () => {
  test('Sign in with existing credentials', async ({ page }) => {
    await page.goto('https://coding.pasv.us/user/login')

    await page.locator('#normal_login_email').fill('test@example.com')
    await page.locator('#normal_login_password').fill('Qwerty!23')
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with not existing credentials', async ({ page }) => {
    await page.goto('https://coding.pasv.us/user/login')

    await page.locator('#normal_login_email').fill('invalid@example.com')
    await page.locator('#normal_login_password').fill('invalid')
    await page.locator('button[type="submit"]').click()

    const toast = page.locator('.ant-notification-notice-message')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('User login. Fail')
  })
})
