import {test, expect} from '../common/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({page, loginPage}) => {
    await loginPage.inputEmail.fill(process.env.EMAIL)
    await loginPage.inputPassword.fill(process.env.PASSWORD)
    await loginPage.buttonSubmit.click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with not existing credentials', async ({loginPage}) => {
    await loginPage.inputEmail.fill('invalid@example.com')
    await loginPage.inputPassword.fill('invalid')
    await loginPage.buttonSubmit.click()

    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
  })
})
