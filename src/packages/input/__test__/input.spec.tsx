import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '@/packages/input'
import ConfigProvider from '@/packages/configprovider'

test('input props test', () => {
  const blur = vi.fn()
  const { container, rerender } = render(
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
  rerender(
    <Input type="number" placeholder="1" defaultValue="1" onBlur={blur} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'tel'
  )
  const telInput = container.querySelector('.nut-input-native') as HTMLElement
  fireEvent.focus(telInput)
  fireEvent.blur(telInput)
  expect(blur).toBeCalled()

  rerender(
    <Input type="digit" placeholder="1" defaultValue="1.01" onBlur={blur} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'text'
  )
  const digitInput = container.querySelector('.nut-input-native') as HTMLElement
  fireEvent.focus(digitInput)
  fireEvent.blur(digitInput)
  expect(blur).toBeCalled()
  rerender(
    <Input
      name="text"
      formatTrigger="onBlur"
      placeholder="1"
      defaultValue="1"
      onBlur={blur}
    />
  )
  const triggerInput = container.querySelector(
    '.nut-input-native'
  ) as HTMLElement
  fireEvent.focus(triggerInput)
  fireEvent.blur(triggerInput)
  expect(blur).toBeCalled()
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
  const handleClear = vi.fn()
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

test('rtl test', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Input placeholder="文本" />
    </ConfigProvider>
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'style',
    'text-align: right;'
  )
})

test('rtl test2', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Input placeholder="文本" align="right" />
    </ConfigProvider>
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'style',
    'text-align: left;'
  )
})

test('clearable and clear event test', () => {
  const handleChange = vi.fn()
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()
  const handleClick = vi.fn()
  const handleClear = vi.fn()
  const { container } = render(
    <Input
      defaultValue="文本"
      clearable
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onClear={handleClear}
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
    expect(inputEl.querySelector('.nut-input span')).toHaveAttribute(
      'style',
      'display: flex; align-items: center;'
    )
    const clearBtn = inputEl.querySelector('.nut-input-clear') as Element
    fireEvent.click(clearBtn)
    expect(handleClear).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      ''
    )
    fireEvent.blur(inputEl)
    expect(handleBlur).toBeCalled()
  }, 300)
})
