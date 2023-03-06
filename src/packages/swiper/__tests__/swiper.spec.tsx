import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { Swiper } from '../swiper'
import { SwiperItem } from '../../swiperitem/swiperitem'
import { triggerDrag } from '@/utils/test/event'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

test('should render width and height', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 0,
    width: 375,
  }
  const { height, initPage, width } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      autoPlay="2000"
      initPage={initPage}
      onChange={onChange}
      paginationVisible
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  const item = container.querySelectorAll('.nut-swiper-item')[0]
  expect(swiper).toHaveStyle({
    height: '150px',
  })
  expect(item).toHaveStyle({
    width: '375px',
  })
})
test('should render initpage', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 1,
    width: 375,
  }
  const { height, initPage, width } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      initPage={initPage}
      onChange={onChange}
      paginationVisible
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  expect(swiper).toHaveStyle({
    transform: 'translate3D(-375px,0,0)',
  })
})
test('should render direction', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 1,
    width: 375,
    direction: 'vertical',
  }
  const { height, initPage, width, direction } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      direction={direction}
      initPage={initPage}
      onChange={onChange}
      paginationVisible
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  expect(swiper).toHaveStyle({
    transform: 'translate3D(0,-150px,0)',
  })
})
test('should render pagination', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 1,
    width: 375,
    paginationColor: 'red',
  }
  const { height, initPage, width, paginationColor } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      initPage={initPage}
      onChange={onChange}
      paginationVisible
      paginationColor={paginationColor}
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const paginationItem = container.querySelectorAll(
    '.nut-swiper__pagination-item'
  )
  // expect(paginationItem).toHaveLength(4)
  // expect(paginationItem[1]).toHaveStyle({
  //   backgroundColor: 'red',
  // })
})

test('should render loop and auto-play', async () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 0,
    width: 375,
    direction: 'vertical',
  }
  const { height, initPage, width, direction } = state
  const onChange = (e: number) => {}
  const { container } = render(
    <Swiper
      height={height}
      width={width}
      initPage={initPage}
      onChange={onChange}
      autoPlay="100"
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  await waitFor(() => {
    expect(swiper).toHaveStyle({
      transform: 'translate3D(-375px,0,0)',
    })
  })
})
test('should not allow to drag when touchable is false', () => {
  const onChange = jest.fn()

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 0,
    width: 375,
    direction: 'vertical',
  }
  const { height, initPage, width, direction } = state
  const { container } = render(
    <Swiper
      height={height}
      width={width}
      initPage={initPage}
      onChange={onChange}
      touchable={false}
    >
      {list.map((item) => {
        return (
          <SwiperItem key={item}>
            <img src={item} alt="" />
          </SwiperItem>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  triggerDrag(swiper, 220, 0)
  expect(swiper).toHaveStyle({
    transform: 'translate3D(0px,0,0)',
  })
})
test('should not allow to drag when loop is false', async () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    initPage: 3,
    width: 375,
    direction: 'vertical',
  }
  const { height, initPage, width, direction } = state
  let _container: any
  act(() => {
    const { container } = render(
      <Swiper
        height={height}
        width={width}
        initPage={initPage}
        loop={false}
        autoPlay="100"
        data-testid="swiper_container"
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
          )
        })}
      </Swiper>
    )
    _container = container
  })
  await waitFor(
    async () => {
      await sleep(2000)
      const swiper = _container.querySelectorAll('.nut-swiper__inner')[0]
      expect(swiper).toHaveStyle({
        transform: 'translate3D(-1125px,0,0)',
      })
    },
    {
      timeout: 3000,
    }
  )
})
