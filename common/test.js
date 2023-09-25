import {test as base, expect} from '@playwright/test'
import LoginPage from '../pages/login'
import ProfilePage from '../pages/profile'

const test = base.extend({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
  profilePage: async ({page}, use) => {
    await use(new ProfilePage(page))
  },
})

export {test, expect}
