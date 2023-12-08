import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Swipe from '../index'
import Cell from '../../cell'
import Button from '../../button'
import InputNumber from '../../inputnumber'

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
