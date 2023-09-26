import Page from './page'

export default class DeliveryPage extends Page {
  constructor(page) {
    super(page)

    this.input = {
      city: page.locator('#city'),
    }

    this.button = {
      save: page.locator('button[type="submit"]'),
    }
  }

  async open() {
    return this.page.goto('/settings/delivery')
  }
}
