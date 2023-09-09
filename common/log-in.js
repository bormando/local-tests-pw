export const logIn = async (page, email, password) => {
  await page.goto('/user/login')

  await page.locator('#normal_login_email').fill(email)
  await page.locator('#normal_login_password').fill(password)
  await page.locator('button[type="submit"]').click()
}
