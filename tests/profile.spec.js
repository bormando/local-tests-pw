import {test, expect} from '../common/test'

test.describe('Profile', () => {
  test.beforeEach(async ({page, loginPage}) => {
    await page.route('**/user/auth', async route => {
      const response = await route.fetch()
      const json = await response.json()
      json.payload.emailConfirmation.confirmed = true
      json.payload.name = 'It Works'
      json.payload.firstName = 'It'
      json.payload.lastName = 'Works'
      await route.fulfill({response, json})
    })

    await loginPage.open()
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)
  })

  test('Email confirmation alert is not visible', async ({page, profilePage}) => {
    await page.waitForLoadState('networkidle')
    await expect(profilePage.alert).not.toBeVisible()
  })
})
