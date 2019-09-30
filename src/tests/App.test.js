import puppeteer from 'puppeteer'

import productLabels from '../dictionary/product.json'

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    devtools: true
  })
  page = await browser.newPage()
  await page.goto('http://localhost:3000/')
  page.setViewport({ width: 1920, height: 1080 })
})

afterAll(() => {
    browser.close()
})

describe('test product page', () => {
  test('check DOM elements', async() => {
    const activeTab = await page.$eval('.ant-tabs-tab-active', e => e.innerText)
    const defaultImage = await page.$eval('.product_item_product_image__3x5kp', e => e.currentSrc)
    const dropDownSelected =  await page.$eval('.ant-select-selection-selected-value', e => e.innerHTML)
    const btmButton =  await page.$eval('.ant-btn', e => e.firstChild.innerHTML)

    expect(activeTab).toBe('Description')
    expect(defaultImage).toBe('http://localhost:3000/static/media/black.eb57ad5c.jpg')
    expect(dropDownSelected).toBe('black')
    expect(btmButton).toBe('ADD TO CART')

  }, 16000)

  test('test add to cart button', async() => {

    // const btmButton =  await page.$eval('.ant-btn')
    await page.$eval('.ant-btn', e => e.click())
    const btmButton = await page.$eval('.ant-btn', e => e.firstChild.innerHTML)

    expect(btmButton).toBe(productLabels.btmBtnLoading)
    expect(btmButton).toBe(productLabels.btmBtnLoading)

    setTimeout(async () => {
      const btmButton = await page.$eval('.ant-btn', e => e.firstChild.innerHTML)
      expect(btmButton).toBe(productLabels.btmBtnLoadingDone)
    }, 3000)
  }, 16000)

  test('test color select dropdown', async() => {
    await page.$eval('.ant-select-selection__rendered', e => e.click())
    await page.$eval('.ant-select-dropdown-menu', e => e.lastChild.click())

    const image = await page.$eval('.product_item_product_image__3x5kp', e => e.currentSrc)
    expect(image).toBe('http://localhost:3000/static/media/brown.cbde25c1.jpg')

    setTimeout(async () => {
      await page.$eval('.ant-select-selection__rendered', e => e.click())
      await page.$eval('.ant-select-dropdown-menu', e => e.firstChild.click())
      expect(image).toBe('http://localhost:3000/static/media/black.eb57ad5c.jpg')
    }, 3000)
  }, 16000)
})
