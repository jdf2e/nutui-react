import * as React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'

import { InputNumber } from '../inputnumber'

test('should render modelValue', () => {
  const { container } = render(<InputNumber defaultValue={12} />)
  expect(container.querySelector('input')?.value).toBe('12')
})

test('should add step 2 when trigger click plus button', async () => {
  const overlimit = vi.fn()
  const add = vi.fn()
  const change = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue={1}
      step={2}
      onOverlimit={overlimit}
      onPlus={add}
      onChange={change}
    />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  await act(async () => {
    fireEvent.click(iconPlus)
  })

  expect(overlimit).not.toBeCalled()
  expect(add).toHaveBeenCalled()
  expect(change.mock.calls[0][0]).toBe(3)
})

test('should minis step 2 when trigger click minis button', async () => {
  const overlimit = vi.fn()
  const reduce = vi.fn()
  const change = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue={3}
      step={2}
      onOverlimit={overlimit}
      onMinus={reduce}
      onChange={change}
    />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-Minus')[0]
  await act(async () => {
    fireEvent.click(iconMinus)
  })
  expect(overlimit).not.toBeCalled()
  expect(reduce).toBeCalled()
  expect(change.mock.calls[0][0]).toBe(1)
})

test('should render max props', async () => {
  const overlimit = vi.fn()
  const add = vi.fn()
  const change = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue={100}
      min={2}
      max={100}
      onOverlimit={overlimit}
      onPlus={add}
      onChange={change}
    />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  await act(async () => {
    fireEvent.click(iconPlus)
  })
  expect(overlimit).toBeCalled()
  expect(add).toBeCalled()
  expect(change).not.toBeCalled()
})

test('should render min props', async () => {
  const overlimit = vi.fn()
  const reduce = vi.fn()
  const change = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue={2}
      min={2}
      max={100}
      onOverlimit={overlimit}
      onMinus={reduce}
      onChange={change}
    />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-Minus')[0]
  await act(async () => {
    fireEvent.click(iconMinus)
  })
  expect(overlimit).toBeCalled()
  expect(reduce).toBeCalled()
  expect(change).not.toBeCalled()
})

test('should not trigger click when disabled props to be true', () => {
  const { container } = render(<InputNumber defaultValue={1} disabled />)

  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  fireEvent.click(iconPlus)
  expect(container.querySelector('input')?.value).toBe('1')

  const iconMinus = container.querySelectorAll('.nut-icon-Minus')[0]
  fireEvent.click(iconMinus)

  expect(container.querySelector('input')?.value).toBe('1')
})

test('should not focus input when readOnly props to be true', async () => {
  const focus = vi.fn()
  const { container } = render(
    <InputNumber readOnly defaultValue={2} onFocus={focus} />
  )
  const iconMinus = container.querySelectorAll('.nut-icon-Minus')[0]
  await act(async () => {
    fireEvent.click(iconMinus)
  })
  expect(container.querySelector('input')?.value).toBe('1')
  expect(focus).not.toBeCalled()
})

test('should render decimal when step props to be 0.2', async () => {
  const { container } = render(
    <InputNumber step={0.2} digits={1} defaultValue={2} />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  await act(async () => {
    fireEvent.click(iconPlus)
  })
  expect(container.querySelector('input')?.value).toBe('2.2')
})

test('should update input value when inputValue overlimit', () => {
  const change = vi.fn()
  const blur = vi.fn()
  const { container } = render(
    <InputNumber defaultValue={2} max={100} onChange={change} onBlur={blur} />
  )
  const input = container.querySelectorAll('input')[0]
  input.value = '200'
  fireEvent.blur(input)
  waitFor(() => {
    expect(container.querySelector('input')?.value).toBe('100')
  })
})

test('allowEmpty', () => {
  const change = vi.fn()
  const blur = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue="2"
      onChange={change}
      onBlur={blur}
      formatter={(v) => String(v)}
    />
  )
  const input = container.querySelectorAll('input')[0]
  input.value = ''
  fireEvent.focus(input)
  fireEvent.blur(input)
  waitFor(() => {
    expect(container.querySelector('input')?.value).toBe('')
  })
})

test('should overlimit when input', async () => {
  const overlimit = vi.fn()
  const { container } = render(
    <InputNumber defaultValue={2} max={100} onOverlimit={overlimit} />
  )
  const input = container.querySelectorAll('input')[0]
  input.value = '200'
  await act(async () => {
    fireEvent.input(input)
  })
  expect(overlimit).toBeCalled()
})
