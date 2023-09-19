import {test, expect} from '../common/test'
import {logInWithApi} from '../common/log-in-with-api'

test.describe('Common', () => {
  test.beforeEach(async ({page, request, context}) => {
    await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page, loginPage}) => {
    await loginPage.navbar.courses.click()
    await expect(page).toHaveURL('/course')
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await loginPage.navbar.tasks.click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await loginPage.navbar.interview.click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await loginPage.navbar.diary.click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(
      page.getByText('Дневник успеваемости помогает достигать больших целей')
    ).toBeVisible()
  })
})
