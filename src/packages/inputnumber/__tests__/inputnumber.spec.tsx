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

test('should render correct structure order: minus, divider, input, divider, add', () => {
  const { container } = render(<InputNumber defaultValue={1} />)
  const root = container.querySelector('.nut-inputnumber')!
  const children = Array.from(root.children)
  expect(children[0]).toHaveClass('nut-inputnumber-minus')
  expect(children[1]).toHaveClass('nut-inputnumber-divider')
  expect(children[2].tagName).toBe('INPUT')
  expect(children[3]).toHaveClass('nut-inputnumber-divider')
  expect(children[4]).toHaveClass('nut-inputnumber-add')
})

test('should add disabled class when disabled', () => {
  const { container } = render(<InputNumber defaultValue={1} disabled />)
  expect(container.querySelector('.nut-inputnumber')).toHaveClass(
    'nut-inputnumber-disabled'
  )
  expect(container.querySelector('input')).toBeDisabled()
})

test('should add input-disabled class when disabled', () => {
  const { container } = render(<InputNumber defaultValue={1} disabled />)
  expect(container.querySelector('input')).toHaveClass(
    'nut-inputnumber-input-disabled'
  )
})

test('should add icon-disabled class when value equals min', () => {
  const { container } = render(
    <InputNumber defaultValue={1} min={1} max={10} />
  )
  const minusIcon = container.querySelector('.nut-inputnumber-icon-minus')
  expect(minusIcon).toHaveClass('nut-inputnumber-icon-disabled')
})

test('should add icon-disabled class when value equals max', () => {
  const { container } = render(
    <InputNumber defaultValue={10} min={1} max={10} />
  )
  const plusIcon = container.querySelector('.nut-inputnumber-icon-plus')
  expect(plusIcon).toHaveClass('nut-inputnumber-icon-disabled')
})

test('should trigger onFocus when input is focused', () => {
  const focus = vi.fn()
  const { container } = render(<InputNumber defaultValue={5} onFocus={focus} />)
  const input = container.querySelector('input')!
  fireEvent.focus(input)
  expect(focus).toHaveBeenCalled()
})

test('should trigger onBlur when input loses focus', () => {
  const blur = vi.fn()
  const { container } = render(<InputNumber defaultValue={5} onBlur={blur} />)
  const input = container.querySelector('input')!
  fireEvent.focus(input)
  fireEvent.blur(input)
  expect(blur).toHaveBeenCalled()
})

test('should support controlled value', () => {
  const { container, rerender } = render(<InputNumber value={5} />)
  expect(container.querySelector('input')?.value).toBe('5')
  rerender(<InputNumber value={10} />)
  expect(container.querySelector('input')?.value).toBe('10')
})

test('should support string value', () => {
  const { container } = render(<InputNumber defaultValue="8" />)
  expect(container.querySelector('input')?.value).toBe('8')
})

test('should block change when beforeChange returns false', async () => {
  const change = vi.fn()
  const { container } = render(
    <InputNumber
      defaultValue={1}
      beforeChange={() => Promise.resolve(false)}
      onChange={change}
    />
  )
  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  await act(async () => {
    fireEvent.click(iconPlus)
  })
  expect(change).not.toBeCalled()
  expect(container.querySelector('input')?.value).toBe('1')
})

test('should support custom className and style', () => {
  const { container } = render(
    <InputNumber
      defaultValue={1}
      className="custom-class"
      style={{ marginTop: '10px' }}
    />
  )
  const root = container.querySelector('.nut-inputnumber')!
  expect(root).toHaveClass('custom-class')
  expect(root).toHaveStyle({ marginTop: '10px' })
})

test('should format value with formatter', () => {
  const { container } = render(
    <InputNumber defaultValue={1000} formatter={(v) => `$${v}`} />
  )
  expect(container.querySelector('input')?.value).toBe('$1000')
})

test('should handle input change', async () => {
  const change = vi.fn()
  const { container } = render(
    <InputNumber defaultValue={1} onChange={change} />
  )
  const input = container.querySelector('input')!
  await act(async () => {
    fireEvent.input(input, { target: { value: '5' } })
  })
  expect(change).toHaveBeenCalled()
})

test('should clamp value on blur when exceeding max', async () => {
  const { container } = render(
    <InputNumber defaultValue={5} min={1} max={10} />
  )
  const input = container.querySelector('input')!
  fireEvent.focus(input)
  await act(async () => {
    fireEvent.input(input, { target: { value: '20' } })
  })
  fireEvent.blur(input)
  await waitFor(() => {
    expect(container.querySelector('input')?.value).toBe('10')
  })
})

test('should render with digits precision', async () => {
  const { container } = render(
    <InputNumber defaultValue={1} digits={2} step={1} />
  )
  expect(container.querySelector('input')?.value).toBe('1.00')
  const iconPlus = container.querySelectorAll('.nut-icon-Plus')[0]
  await act(async () => {
    fireEvent.click(iconPlus)
  })
  expect(container.querySelector('input')?.value).toBe('2.00')
})
