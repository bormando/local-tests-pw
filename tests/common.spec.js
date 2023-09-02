import { test, expect } from '@playwright/test'

test.describe('Common', () => {
  test('Navigation', async ({ page }) => {
    await page.goto('https://coding.pasv.us/user/login')

    await page.locator('#normal_login_email').fill('test@example.com')
    await page.locator('#normal_login_password').fill('Qwerty!23')
    await page.locator('button[type="submit"]').click()

    await page.getByTestId('topmenu-Курсы').click()
    await expect(page).toHaveURL('https://coding.pasv.us/course')
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await page.getByTestId('topmenu-Задачи').click()
    await expect(page).toHaveURL('https://coding.pasv.us/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await page.getByTestId('topmenu-Интервью').click()
    await expect(page).toHaveURL('https://coding.pasv.us/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await page.getByTestId('topmenu-Дневник').click()
    await expect(page).toHaveURL('https://coding.pasv.us/diary?page=1')
    await expect(page.getByText('Дневник успеваемости помогает достигать больших целей')).toBeVisible()
  })
})
