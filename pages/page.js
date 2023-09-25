import Navbar from '../elements/navbar'

export default class Page {
  constructor(page) {
    this.page = page

    this.toast = page.locator('.ant-notification-notice-message')
    this.alert = page.locator('.ant-alert')
    this.navbar = new Navbar(page)
  }
}
