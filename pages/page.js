import Navbar from '../elements/navbar'

export default class Page {
  constructor(page) {
    this.page = page

    this.toast = page.locator('.ant-notification-notice-message')
    this.navbar = new Navbar(page)
  }
}
