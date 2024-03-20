// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import TextArea from '@/packages/textarea'

test('textarea props test', () => {
  const { container } = render(
    <TextArea defaultValue="基础用法" showCount maxLength={20} />
  )
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '基础用法'
  )
  expect(container.querySelector('.nut-textarea-limit')?.innerHTML).toBe('4/20')
  expect(container).toMatchSnapshot()
})

test('textarea readOnly test', () => {
  const { container } = render(<TextArea readOnly />)
  expect(container.querySelector('.nut-textarea-textarea')).toHaveAttribute(
    'readonly'
  )
})

test('textarea disabled test', () => {
  const { container } = render(<TextArea disabled />)
  expect(container.querySelector('.nut-textarea-textarea')).toHaveAttribute(
    'disabled'
  )
  expect(container.querySelector('.nut-textarea')).toHaveClass(
    'nut-textarea-disabled'
  )
})

test('textarea onChange event test', () => {
  const handleChange = vi.fn()
  const TextareaDemo = () => {
    const [value, setValue] = useState('文字')
    return (
      <TextArea
        data-testid="textarea"
        defaultValue={value}
        onChange={handleChange}
      />
    )
  }

  const { container } = render(<TextareaDemo />)
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '文字'
  )
  const textareaEl = container.querySelector(
    '.nut-textarea-textarea'
  ) as Element
  fireEvent.change(textareaEl, { target: { value: '文字改变' } })
  expect(handleChange).toBeCalled()
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '文字改变'
  )
})

test('textarea onFocus event test', () => {
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()
  const TextareaDemo = () => {
    return (
      <TextArea
        data-testid="textarea"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    )
  }

  const { container } = render(<TextareaDemo />)

  const textareaEl = container.querySelector(
    '.nut-textarea-textarea'
  ) as Element
  fireEvent.focus(textareaEl)
  expect(handleFocus).toBeCalled()
  fireEvent.blur(textareaEl)
  expect(handleBlur).toBeCalled()
})
