import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Card } from '../card.taro'

const testUtils = new TestUtils()
const execFn = (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    cb()
    testUtils.unmout()
  })
}
const state = {
  src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title:
    '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDescription: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>',
}
describe('card-taro', () => {
  execFn(
    'props test',
    Card,
    {
      src: state.src,
      title: state.title,
      price: state.price,
      vipPrice: state.vipPrice,
      shopDescription: state.shopDescription,
      delivery: state.delivery,
      shopName: state.shopName,
    },
    async () => {
      const priceDoms = testUtils.queries.querySelectorAll(
        '.nut-price-integer-normal'
      )
      const tagDoms = testUtils.queries.querySelectorAll('.nut-tag')
      expect(
        testUtils.queries
          .querySelector('.nut-card-left img')
          ?.getAttribute('src')
      ).toBe(state.src)
      expect(
        testUtils.queries.querySelector('.nut-card-right-title')
      ).toContainHTML(state.title)
      expect(priceDoms[0].innerHTML).toBe(state.price)
      expect(priceDoms[1].innerHTML).toBe(state.vipPrice)
      expect(tagDoms[0]).toContainHTML(
        `<div class="nut-tag nut-tag-danger"><span class="nut-tag-text">${state.shopDescription}</span></div>`
      )
      expect(tagDoms[1]).toContainHTML(
        `<div class="nut-tag nut-tag-default nut-tag-plain"><span class="nut-tag-text">${state.delivery}</span></div>`
      )
      expect(
        testUtils.queries.querySelector('.nut-card-right-shop-name')
      ).toContainHTML(state.shopName)
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
})
