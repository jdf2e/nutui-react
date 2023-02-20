import * as React from 'react'
import { act, render } from '@testing-library/react'
import { trigger } from '@/utils/test/event'
import '@testing-library/jest-dom'

import { NumberKeyboard } from '../numberkeyboard'

function clickKey(key: Parameters<typeof trigger>[0]) {
  return act(() => {
    trigger(key, 'touchstart')
    trigger(key, 'touchend')
  })
}
test('should match snapshot', async () => {
  const { container } = render(<NumberKeyboard visible />)
  expect(container).toMatchSnapshot()
})
test('should match customKey snapshot', async () => {
  const { container } = render(
    <NumberKeyboard visible type="rightColumn" customKey={['.', 'x', 'r']} />
  )
  expect(container.querySelector('.finish')).toHaveTextContent('完成')
  expect(container).toMatchSnapshot()
})
test('default keyboard custom keyboard', async () => {
  const { container } = render(
    <NumberKeyboard visible customKey={['.', 'x', 'r']} />
  )
  expect(container.querySelectorAll('.key')[10]).toHaveTextContent('0')
})
test('Has title and custom keyboard length greater than 1', async () => {
  const { container } = render(
    <NumberKeyboard visible title="标题" customKey={['.', 'x', 'r']} />
  )
  expect(container.querySelectorAll('.key')[10]).toHaveTextContent('0')
})
test('Has title and custom keyboard length equal 1', async () => {
  const { container } = render(
    <NumberKeyboard visible title="标题" customKey={['.']} />
  )
  expect(container.querySelectorAll('.key')[9]).toHaveTextContent('.')
})
test('should shuffle key order when using random-key prop', async () => {
  let value = 0
  const onChange = (v: string) => {
    value = Number(v)
  }
  const { container } = render(
    <NumberKeyboard visible randomKeys onChange={onChange} />
  )
  const keys: number[] = []
  const clickKeys: number[] = []

  for (let i = 0; i < 9; i++) {
    keys.push(i + 1)
    clickKey(container.querySelectorAll('.key')[i])
    clickKeys.push(value)
  }

  expect(keys.every((v, k) => keys[k] === clickKeys[k])).toEqual(false)
})
test('should emit delete event after clicking delete key', () => {
  const onDelete = jest.fn()
  const { container } = render(<NumberKeyboard visible onDelete={onDelete} />)
  clickKey(container.querySelectorAll('.key')[11])
  expect(onDelete).toBeTruthy()
})
test('should emit close event after clicking collapse key', () => {
  const onClose = jest.fn()
  const { container } = render(<NumberKeyboard visible onClose={onClose} />)
  clickKey(container.querySelectorAll('.key')[9])
  expect(onClose).toBeTruthy()
})
test('should render title and close button correctly', () => {
  const { container } = render(<NumberKeyboard visible title="默认键盘" />)
  const title = container.querySelector('.nut-numberkeyboard__header__tit')
  expect(title).toHaveTextContent('默认键盘')
})

test('should render finish button correctly', () => {
  const { container } = render(
    <NumberKeyboard visible type="rightColumn" confirmText="支付" />
  )
  const title = container.querySelector('.finish')
  expect(title).toHaveTextContent('支付')
})
