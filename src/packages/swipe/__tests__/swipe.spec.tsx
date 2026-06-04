import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Swipe from '../index'
import Cell from '../../cell'
import Button from '../../button'
import InputNumber from '../../inputnumber'
import * as getRectModule from '@/utils/get-rect'

test('base swipe', () => {
  const { container } = render(
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
    >
      <Cell title="基础用法" radius={0} />
    </Swipe>
  )
  expect(
    container.querySelector('.nut-swipe .nut-cell-title')
  ).toHaveTextContent('基础用法')
})

test('disabled swipe', () => {
  const { container } = render(
    <Swipe id="swipeDisabled">
      <Cell title="禁用滑动" radius={0} />
    </Swipe>
  )
  const dom = container.querySelector('.nut-swipe-wrapper')
  expect((dom as HTMLElement).style.transform).toBe('translate3d(0px, 0, 0)')
})

test('base swipe Slots', async () => {
  const { container } = render(
    <Swipe
      leftAction={
        <Button shape="square" type="success">
          选择
        </Button>
      }
      rightAction={
        <>
          <Button shape="square" type="danger">
            删除
          </Button>
        </>
      }
    >
      <Cell title="事件" />
    </Swipe>
  )
  expect(
    container.querySelector('.nut-swipe .nut-swipe-left .nut-button-wrap')
  ).toHaveTextContent('选择')

  expect(
    container.querySelector(
      '.nut-swipe .nut-swipe-right .nut-button-danger .nut-button-wrap'
    )
  ).toHaveTextContent('删除')
})

test('base swipe content', async () => {
  const { container } = render(
    <Swipe
      rightAction={
        <>
          <Button shape="square" type="danger">
            购物车
          </Button>
        </>
      }
    >
      <Cell>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>商品</span>
          <InputNumber style={{ float: 'right' }} />
        </div>
      </Cell>
    </Swipe>
  )
  expect(
    container.querySelector('.nut-swipe-wrapper .nut-inputnumber')
  ).toBeVisible()

  expect(
    container.querySelector('.nut-swipe .nut-swipe-right .nut-button-wrap')
  ).toHaveTextContent('购物车')
})

test('swipe right to open via touch', () => {
  const spy = jest.spyOn(getRectModule, 'getRect').mockReturnValue({
    width: 80,
    height: 40,
    top: 0,
    left: 0,
    right: 80,
    bottom: 40,
  })

  const onOpen = jest.fn()
  const { container } = render(
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
      onOpen={onOpen}
    >
      <Cell title="滑动" radius={0} />
    </Swipe>
  )

  const wrapper = container.querySelector('.nut-swipe') as HTMLElement

  act(() => {
    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 200, clientY: 0, pageX: 200, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 100, clientY: 0, pageX: 100, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchEnd(wrapper, {
      changedTouches: [{ clientX: 100, clientY: 0 }],
    })
  })

  expect(onOpen).toHaveBeenCalled()
  spy.mockRestore()
})

test('swipe left to open via touch', () => {
  const spy = jest.spyOn(getRectModule, 'getRect').mockReturnValue({
    width: 80,
    height: 40,
    top: 0,
    left: 0,
    right: 80,
    bottom: 40,
  })

  const onOpen = jest.fn()
  const { container } = render(
    <Swipe
      leftAction={
        <Button type="success" shape="square">
          选择
        </Button>
      }
      onOpen={onOpen}
    >
      <Cell title="滑动" radius={0} />
    </Swipe>
  )

  const wrapper = container.querySelector('.nut-swipe') as HTMLElement

  act(() => {
    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 100, clientY: 0, pageX: 100, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 200, clientY: 0, pageX: 200, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchEnd(wrapper, {
      changedTouches: [{ clientX: 200, clientY: 0 }],
    })
  })

  expect(onOpen).toHaveBeenCalled()
  spy.mockRestore()
})

test('swipe close after opened', () => {
  const spy = jest.spyOn(getRectModule, 'getRect').mockReturnValue({
    width: 80,
    height: 40,
    top: 0,
    left: 0,
    right: 80,
    bottom: 40,
  })

  const onClose = jest.fn()
  const { container } = render(
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
      onClose={onClose}
    >
      <Cell title="滑动" radius={0} />
    </Swipe>
  )

  const wrapper = container.querySelector('.nut-swipe') as HTMLElement

  // Open first
  act(() => {
    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 200, clientY: 0, pageX: 200, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 100, clientY: 0, pageX: 100, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchEnd(wrapper, {
      changedTouches: [{ clientX: 100, clientY: 0 }],
    })
  })

  // Close by swiping back
  act(() => {
    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 100, clientY: 0, pageX: 100, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 200, clientY: 0, pageX: 200, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchEnd(wrapper, {
      changedTouches: [{ clientX: 200, clientY: 0 }],
    })
  })

  expect(onClose).toHaveBeenCalled()
  spy.mockRestore()
})

test('disabled swipe should not respond to touch', () => {
  const onOpen = jest.fn()
  const { container } = render(
    <Swipe
      disabled
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
      onOpen={onOpen}
    >
      <Cell title="禁用" radius={0} />
    </Swipe>
  )

  const wrapper = container.querySelector('.nut-swipe') as HTMLElement

  act(() => {
    fireEvent.touchStart(wrapper, {
      touches: [{ clientX: 200, clientY: 0, pageX: 200, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchMove(wrapper, {
      touches: [{ clientX: 100, clientY: 0, pageX: 100, pageY: 0 }],
    })
  })
  act(() => {
    fireEvent.touchEnd(wrapper, {
      changedTouches: [{ clientX: 100, clientY: 0 }],
    })
  })

  expect(onOpen).not.toHaveBeenCalled()
})
