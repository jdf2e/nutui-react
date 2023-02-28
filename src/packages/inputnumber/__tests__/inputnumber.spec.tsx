import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { InputNumber } from '../inputnumber'

test('should render modelValue', () => {
  const { container } = render(<InputNumber modelValue={12} />)
  expect(container.querySelector('input')?.value).toBe('12')
})

test('should add step 2 when trigger click plus button', () => {
  const overlimit = jest.fn()
  const add = jest.fn()
  const change = jest.fn()
  const { container } = render(
    <InputNumber
      modelValue={1}
      step={2}
      onOverlimit={overlimit}
      onAdd={add}
      onChangeFuc={change}
    />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-plus')[0]
  fireEvent.click(iconPlus)
  expect(overlimit).not.toBeCalled()
  expect(add).toBeCalled()
  expect(change.mock.calls[0][0]).toBe('3')
})

test('should minis step 2 when trigger click minis button', () => {
  const overlimit = jest.fn()
  const reduce = jest.fn()
  const change = jest.fn()
  const { container } = render(
    <InputNumber
      modelValue={3}
      step={2}
      onOverlimit={overlimit}
      onReduce={reduce}
      onChangeFuc={change}
    />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-minus')[0]
  fireEvent.click(iconMinus)
  expect(overlimit).not.toBeCalled()
  expect(reduce).toBeCalled()
  expect(change.mock.calls[0][0]).toBe('1')
})

test('should render max props', () => {
  const overlimit = jest.fn()
  const add = jest.fn()
  const change = jest.fn()
  const { container } = render(
    <InputNumber
      modelValue={100}
      min="2"
      max="100"
      onOverlimit={overlimit}
      onAdd={add}
      onChangeFuc={change}
    />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-plus')[0]
  fireEvent.click(iconPlus)
  expect(overlimit).toBeCalled()
  expect(add).toBeCalled()
  expect(change).not.toBeCalled()
})

test('should render min props', () => {
  const overlimit = jest.fn()
  const reduce = jest.fn()
  const change = jest.fn()
  const { container } = render(
    <InputNumber
      modelValue={2}
      min="2"
      max="100"
      onOverlimit={overlimit}
      onReduce={reduce}
      onChangeFuc={change}
    />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-minus')[0]
  fireEvent.click(iconMinus)
  expect(overlimit).toBeCalled()
  expect(reduce).toBeCalled()
  expect(change).not.toBeCalled()
})

test('should not trigger click when disabled props to be true', () => {
  const { container } = render(<InputNumber modelValue={1} disabled />)

  const iconPlus = container.querySelectorAll('.nut-icon-plus')[0]
  fireEvent.click(iconPlus)
  expect(container.querySelector('input')?.value).toBe('1')

  const iconMinus = container.querySelectorAll('.nut-icon-minus')[0]
  fireEvent.click(iconMinus)

  expect(container.querySelector('input')?.value).toBe('1')
})

test('should not focus input when readonly props to be true', () => {
  const focus = jest.fn()
  const { container } = render(
    <InputNumber readonly modelValue={2} onFocus={focus} />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-minus')[0]
  fireEvent.click(iconMinus)
  expect(container.querySelector('input')?.value).toBe('1')
  expect(focus).not.toBeCalled()
})

test('should render decimal when step props to be 0.2', () => {
  const { container } = render(
    <InputNumber step="0.2" decimalPlaces="1" modelValue={2} />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-plus')[0]
  fireEvent.click(iconPlus)
  expect(container.querySelector('input')?.value).toBe('2.2')
})

test('should render size when buttonSize and inputWidth props setted', () => {
  const { container } = render(
    <InputNumber buttonSize="30px" inputWidth="120px" modelValue={2} />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-plus')[0]
  const input = container.querySelectorAll('input')[0]
  expect(iconPlus).toHaveStyle({ fontSize: '30px' })
  expect(input.style.width).toEqual('120px')
})

test('should update input value when inputValue overlimit', () => {
  const change = jest.fn()
  const blur = jest.fn()
  const { container } = render(
    <InputNumber
      modelValue={2}
      max="100"
      onChangeFuc={change}
      onBlurFuc={blur}
    />
  )
  const input = container.querySelectorAll('input')[0]
  input.value = '200'
  fireEvent.blur(input)
  expect(container.querySelector('input')?.value).toBe('100')
})
