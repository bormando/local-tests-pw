import {test, expect} from '@playwright/test'
import {logIn} from '../common/log-in'

test.describe('Common', () => {
  test.beforeEach(async ({page}) => {
    await logIn(page, process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page}) => {
    await page.getByTestId('topmenu-Курсы').click()
    await expect(page).toHaveURL('/course')
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await page.getByTestId('topmenu-Задачи').click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await page.getByTestId('topmenu-Интервью').click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await page.getByTestId('topmenu-Дневник').click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(
      page.getByText('Дневник успеваемости помогает достигать больших целей')
    ).toBeVisible()
  })
})
