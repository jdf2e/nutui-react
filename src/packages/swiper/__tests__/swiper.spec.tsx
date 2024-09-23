import React, { useRef } from 'react'
import { fireEvent, render, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Swiper, { SwiperRef } from '../index'
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

  const onChange = vi.fn()

  const Wraper = () => {
    const ref = useRef<SwiperRef>(null)
    return (
      <>
        <div
          data-testid="prev"
          onClick={() => {
            ref.current?.prev()
          }}
        >
          prev
        </div>
        <div
          data-testid="next"
          onClick={() => {
            ref.current?.next()
          }}
        >
          next
        </div>
        <div
          data-testid="to"
          onClick={() => {
            ref.current?.to(1)
          }}
        >
          to
        </div>
        <Swiper
          style={{ width: '375px', height: '150px' }}
          autoPlay
          defaultValue={0}
          onChange={onChange}
          ref={ref}
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
      </>
    )
  }
  const { container, getByTestId } = render(<Wraper />)
  const swiper = container.querySelectorAll('.nut-swiper')[0]
  expect(swiper).toHaveStyle({
    height: '150px',
    width: '375px',
  })

  fireEvent.click(getByTestId('next'))
  fireEvent.click(getByTestId('prev'))
  fireEvent.click(getByTestId('to'))
})
test('should render initpage', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
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
  const swiper = container.querySelectorAll('.nut-swiper-slide')[0]
  expect(swiper).toHaveStyle({
    transform: 'translate3d(-100%,0,0)',
  })
})
test('should render direction', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]

  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      loop
      direction="vertical"
      defaultValue={1}
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
  const swiper = container.querySelectorAll('.nut-swiper-slide')[0]
  expect(swiper).toHaveStyle({
    transform: 'translate3d(0,-100%,0)',
  })
})
test('should render indicator', () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const onChange = (e: number) => {}

  const { container } = render(
    <Swiper
      slideSize={300}
      defaultValue={1}
      onChange={onChange}
      indicator
      style={{
        width: '375px',
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
  const indicatorItem = container.querySelectorAll('.nut-swiper-indicator-item')
})

test('should render loop and auto-play', async () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const onChange = (e: number) => {}
  const { container } = render(
    <Swiper
      style={{ width: '375px' }}
      slideSize={300}
      defaultValue={0}
      onChange={onChange}
      autoPlay
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

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]

  const { container } = render(
    <Swiper
      style={{ width: '375px' }}
      slideSize={300}
      defaultValue={0}
      onChange={onChange}
      touchable={false}
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
  const swiper = container.querySelectorAll('.nut-swiper')[0]
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
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  let _container: any
  act(() => {
    const { container } = render(
      <Swiper
        style={{ width: '375px' }}
        slideSize={300}
        defaultValue={3}
        loop={false}
        autoPlay
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
