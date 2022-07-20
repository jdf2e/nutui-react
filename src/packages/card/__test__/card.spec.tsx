import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Card } from '../card'

test('props test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
    />
  )
  const priceDoms = container.querySelectorAll('.nut-price__big')
  const tagDoms = container.querySelectorAll('.nut-tag')
  expect(
    container.querySelector('.nut-card__left img')?.getAttribute('src')
  ).toBe(state.imgUrl)
  expect(container.querySelector('.nut-card__right__title')).toContainHTML(
    state.title
  )
  expect(priceDoms[0].innerHTML).toBe(state.price)
  expect(priceDoms[1].innerHTML).toBe(state.vipPrice)
  expect(tagDoms[0]).toContainHTML(
    `<span class="text">${state.shopDesc}</span>`
  )
  expect(tagDoms[1]).toContainHTML(
    `<span class="text">${state.delivery}</span>`
  )
  expect(container.querySelector('.nut-card__right__shop__name')).toContainHTML(
    state.shopName
  )
  expect(container).toMatchSnapshot()
})

test('prolistTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      prolistTpl={
        <div className="search_prolist_attr">
          {['鲜活', '礼盒', '国产'].map((item) => {
            return (
              <span className="word" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      }
    />
  )
  expect(container.querySelector('.search_prolist_attr')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('originTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const plusIconUrl =
    'https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png'

  const { container } = render(
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      originTpl={<img src={plusIconUrl} alt="" />}
    />
  )
  expect(
    container.querySelector('.nut-card__right__price img')?.getAttribute('src')
  ).toBe(plusIconUrl)
  expect(container).toMatchSnapshot()
})

test('shopTagTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      shopTagTpl={<div>这里是自定义区域</div>}
    />
  )
  expect(container.querySelector('.nut-card__right__other')?.innerHTML).toBe(
    '<div>这里是自定义区域</div>'
  )
  expect(container).toMatchSnapshot()
})

test('footerTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imgUrl={state.imgUrl}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDesc={state.shopDesc}
      delivery={state.delivery}
      shopName={state.shopName}
      footerTpl={<div style={{ fontSize: '12px' }}>自定义</div>}
    />
  )
  expect(
    container
      .querySelectorAll('.nut-card__right__shop div')[1]
      ?.getAttribute('style')
  ).toBe('font-size: 12px;')
  expect(container).toMatchSnapshot()
})
