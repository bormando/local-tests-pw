import {test as base, expect} from '@playwright/test'
import LoginPage from '../pages/login'
import ProfilePage from '../pages/profile'
import DeliveryPage from '../pages/delivery'

const test = base.extend({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
  profilePage: async ({page}, use) => {
    await use(new ProfilePage(page))
  },
  deliveryPage: async ({page}, use) => {
    await use(new DeliveryPage(page))
  },
})

export {test, expect}
