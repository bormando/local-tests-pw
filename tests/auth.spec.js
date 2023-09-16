import {test, expect} from '../common/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({page, loginPage}) => {
    await loginPage.input.email.fill(process.env.EMAIL)
    await loginPage.input.password.fill(process.env.PASSWORD)
    await loginPage.button.submit.click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with not existing credentials', async ({loginPage}) => {
    await loginPage.input.email.fill('invalid@example.com')
    await loginPage.input.password.fill('invalid')
    await loginPage.button.submit.click()

    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
  })
})
