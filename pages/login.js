export default class LoginPage {
  constructor(page) {
    this.page = page

    this.inputEmail = page.locator('#normal_login_email')
    this.inputPassword = page.locator('#normal_login_password')
    this.buttonSubmit = page.locator('button[type="submit"]')
    this.toast = page.locator('.ant-notification-notice-message')
  }

  async open() {
    return this.page.goto('/user/login')
  }

  async logIn(email, password) {
    await this.inputEmail.fill(email)
    await this.inputPassword.fill(password)
    await this.buttonSubmit.click()
  }
}
