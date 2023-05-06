import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '@/packages/input'

test('input props test', () => {
  const { container } = render(
    <Input name="text" placeholder="请输入文字" defaultValue="初始文本" />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'placeholder',
    '请输入文字'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'value',
    '初始文本'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'name',
    'text'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'text'
  )
  expect(container).toMatchSnapshot()
})

test('password test', () => {
  const { container } = render(<Input placeholder="文本" type="password" />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'password'
  )
})

test('readOnly test', () => {
  const { container } = render(<Input placeholder="文本" readOnly />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'readOnly'
  )
})

test('disabled test', () => {
  const { container } = render(<Input placeholder="文本" disabled />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'disabled'
  )
})

test('textarea test', () => {
  const { container } = render(
    <Input name="textarea" placeholder="留言" maxLength={50} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'name',
    'textarea'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'maxlength',
    '50'
  )
})

test('clearable and clear event test', () => {
  const handleClear = jest.fn()
  const { container } = render(
    <Input defaultValue="清除文本" clearable onClear={handleClear} />
  )
  const inputEl = container.querySelector('.nut-input-native') as HTMLElement
  expect(inputEl).toHaveAttribute('value', '清除文本')
  fireEvent.focus(inputEl)
  setTimeout(() => {
    expect(inputEl.querySelector('.nut-input-clear')).toHaveClass(
      'nut-icon-MaskClose'
    )
    const clearBtn = inputEl.querySelector('.nut-input-clear') as Element
    fireEvent.click(clearBtn)
    expect(handleClear).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      ''
    )
  }, 300)
})

test('disabled test', () => {
  const { container } = render(<Input placeholder="文本" disabled />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'disabled'
  )
})

test('clearable and clear event test', () => {
  const handleChange = jest.fn()
  const handleFocus = jest.fn()
  const handleBlur = jest.fn()
  const handleClick = jest.fn()
  const { container } = render(
    <Input
      defaultValue="文本"
      clearable
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    />
  )
  const inputEl = container.querySelector('.nut-input-native') as Element
  expect(inputEl).toHaveAttribute('value', '文本')
  fireEvent.click(inputEl)
  expect(handleClick).toBeCalled()
  fireEvent.change(inputEl, { target: { value: '文字改变' } })
  setTimeout(() => {
    expect(handleFocus).toBeCalled()
    expect(handleChange).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      '文字改变'
    )
    fireEvent.blur(inputEl)
    expect(handleBlur).toBeCalled()
  }, 300)
})
