import React, { useRef } from 'react'
import { fireEvent, render, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Swiper, { SwiperRef } from '../index'
import { triggerDrag } from '@/utils/event-mocker'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

test('should render width and height', () => {
  const onChange = vi.fn()

  const Wraper = () => {
    const ref = useRef<SwiperRef>(null)
    return (
      <>
        <div data-testid="prev" onClick={() => ref.current?.prev()}>
          prev
        </div>
        <div data-testid="next" onClick={() => ref.current?.next()}>
          next
        </div>
        <div data-testid="to" onClick={() => ref.current?.to(1)}>
          to
        </div>
        <Swiper
          ref={ref}
          style={{ width: '375px', height: '150px' }}
          defaultValue={0}
          autoplay
          indicator
          onChange={onChange}
        >
          {list.map((item) => (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          ))}
        </Swiper>
      </>
    )
  }
  const { container, getByTestId } = render(<Wraper />)
  const swiper = container.querySelector('.nut-swiper')
  expect(swiper).toHaveStyle({
    height: '150px',
    width: '375px',
  })

  fireEvent.click(getByTestId('next'))
  fireEvent.click(getByTestId('prev'))
  fireEvent.click(getByTestId('to'))
})

test('should render initpage', () => {
  const onChange = (e: number) => {}
  const { container } = render(
    <Swiper defaultValue={1} onChange={onChange} loop indicator>
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelector('.nut-swiper-slide')
  expect(swiper).toHaveStyle({
    transform: 'translate3d(-100%,0,0)',
  })
})

test('should render vertical direction', () => {
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper loop direction="vertical" defaultValue={1} onChange={onChange}>
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelector('.nut-swiper-slide')
  expect(swiper).toHaveStyle({
    transform: 'translate3d(0,-100%,0)',
  })
})

test('should render indicator', () => {
  const { container } = render(
    <Swiper defaultValue={1} indicator>
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
    '.nut-swiper-indicator .nut-indicator-dot'
  )
  expect(indicatorItem.length).toEqual(4)
})

test('should render effect', () => {
  const { container } = render(
    <Swiper defaultValue={1} effect={{ name: 'focus', scale: 1 }}>
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper-slide')[0]
  expect(swiper).toHaveStyle({ transform: 'translate3d(-100%,0,0) scale(1)' })
})

test('should render auto-play', async () => {
  const { container } = render(
    <Swiper style={{ width: '375px' }} defaultValue={0} autoplay>
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper-slide')[0]
  await waitFor(() => {
    expect(swiper).toHaveStyle({
      transform: 'none',
    })
  })
})

test('should render auto-play width number', async () => {
  const { container } = render(
    <Swiper style={{ width: '375px' }} defaultValue={0} autoplay={300}>
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelectorAll('.nut-swiper-slide')[0]
  await waitFor(() => {
    expect(swiper).toHaveStyle({
      transform: 'none',
    })
  })
})

test('should not allow to drag when touchable is false', () => {
  const onChange = vi.fn()
  const clickFn = vi.fn()
  const { container } = render(
    <Swiper
      style={{ width: '375px' }}
      slideSize={200}
      defaultValue={0}
      onChange={onChange}
    >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img onClick={clickFn} src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
  const swiper = container.querySelector('.nut-swiper')
  const swiperItem = container.querySelector('.nut-swiper-slide')
  triggerDrag(swiper, 220, 0)
  expect(swiperItem).toHaveStyle({
    transform: 'none',
  })
  const img = container.querySelector('img')
  if (img) {
    fireEvent.click(img)
    expect(clickFn).toBeCalled()
  }
})

test('should not allow to drag when loop is false', async () => {
  let _container: any
  act(() => {
    const { container } = render(
      <Swiper
        style={{ width: '375px' }}
        slideSize={300}
        defaultValue={3}
        loop={false}
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
      await sleep(3000)
      const swiper = _container.querySelectorAll('.nut-swiper-slide')[0]
      expect(swiper).toHaveStyle({
        transform: 'translate3d(-300%,0,0)',
      })
    },
    {
      timeout: 4000,
    }
  )
})
