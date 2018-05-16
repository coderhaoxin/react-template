
import puppeteer from 'puppeteer'

import { host } from '../config'

describe('# basic flow', () => {
  let browser
  let page

  beforeAll(async () => {
    let width = 375
    let height = 812

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    })

    page = await browser.newPage()

    await page.setViewport({ width, height })
  })

  it('perfect', async () => {
    await page.goto(host)

    await page.click('#app > main > button')
    await page.click('#app > main > button')

    const f = () => document
      .querySelector('#app > main > span')
      .textContent
    const result = await page.evaluate(f)

    expect(result).toBe('count:6')
  })

  afterAll(() => {
    browser.close()
  })
})
