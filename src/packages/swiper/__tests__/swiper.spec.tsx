import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import Swiper from '../index'
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
    defaultValue: 0,
    width: 375,
  }
  const { height, defaultValue, width } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      autoPlay="2000"
      defaultValue={defaultValue}
      onChange={onChange}
      indicator
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
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
    defaultValue: 1,
    width: 375,
  }
  const { height, defaultValue, width } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      defaultValue={defaultValue}
      onChange={onChange}
      loop
      indicator
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
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
    defaultValue: 1,
    width: 375,
    direction: 'vertical',
  }
  const { height, defaultValue, width, direction } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      loop
      direction={direction}
      defaultValue={defaultValue}
      onChange={onChange}
      indicator
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper__inner')[0]
  expect(swiper).toHaveStyle({
    transform: 'translate3D(0,-150px,0)',
  })
})
test('should render indicator', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const state: any = {
    height: 150,
    defaultValue: 1,
    width: 375,
  }
  const { height, defaultValue, width } = state
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      height={height}
      width={width}
      defaultValue={defaultValue}
      onChange={onChange}
      indicator
      style={{
        '--nutui-indicator-color': '#426543',
        '--nutui-indicator-dot-color': '#426ddd',
      }}
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const indicatorItem = container.querySelectorAll(
    '.nut-swiper__indicator-item'
  )
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
    defaultValue: 0,
    width: 375,
    direction: 'vertical',
  }
  const { height, defaultValue, width, direction } = state
  const onChange = (e: number) => {}
  const { container } = render(
    <Swiper
      height={height}
      width={width}
      defaultValue={defaultValue}
      onChange={onChange}
      autoPlay="100"
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
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
    defaultValue: 0,
    width: 375,
    direction: 'vertical',
  }
  const { height, defaultValue, width } = state
  const { container } = render(
    <Swiper
      height={height}
      width={width}
      defaultValue={defaultValue}
      onChange={onChange}
      touchable={false}
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
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
    defaultValue: 3,
    width: 375,
    direction: 'vertical',
  }
  const { height, defaultValue, width } = state
  let _container: any
  act(() => {
    const { container } = render(
      <Swiper
        height={height}
        width={width}
        defaultValue={defaultValue}
        loop={false}
        autoPlay="100"
        data-testid="swiper_container"
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
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
