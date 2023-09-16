export default class Navbar {
  constructor(page) {
    this.page = page

    this.courses = page.getByTestId('topmenu-Курсы')
    this.tasks = page.getByTestId('topmenu-Задачи')
    this.interview = page.getByTestId('topmenu-Интервью')
    this.diary = page.getByTestId('topmenu-Дневник')
  }
}
