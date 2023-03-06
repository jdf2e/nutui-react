import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '@/packages/input'
import Button from '@/packages/button'

test('input props test', () => {
  const { container } = render(
    <Input
      name="text"
      label="文本"
      placeholder="请输入文字"
      defaultValue="初始文本"
    />
  )
  expect(container.querySelector('.label-string')?.innerHTML).toBe('文本')
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'placeholder',
    '请输入文字'
  )
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'value',
    '初始文本'
  )
  expect(container.querySelector('.input-text')).toHaveAttribute('name', 'text')
  expect(container.querySelector('.input-text')).toHaveAttribute('type', 'text')
  expect(container).toMatchSnapshot()
})

test('password test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" type="password" />
  )
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'type',
    'password'
  )
})

test('readonly test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" readonly />
  )
  expect(container.querySelector('.input-text')).toHaveAttribute('readonly')
})

test('disabled test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" disabled />
  )
  expect(container.querySelector('.input-text')).toHaveAttribute('disabled')
})

test('textarea test', () => {
  const { container } = render(
    <Input
      name="textarea"
      label="留言"
      placeholder="留言"
      type="textarea"
      showWordLimit
      rows="2"
      maxlength="50"
    />
  )
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'name',
    'textarea'
  )
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'maxlength',
    '50'
  )
  expect(container.querySelector('.nut-input-word-limit')?.innerHTML).toBe(
    `<span class="nut-input-word-num">0</span>/50`
  )
})

test('leftIcon and rightIcon test', () => {
  const { container } = render(
    <Input
      label="文本"
      placeholder="文本"
      leftIcon="dongdong"
      rightIcon="ask2"
    />
  )
  expect(container.querySelector('.nut-input-left-icon')?.innerHTML).toBe(
    `<i class="nutui-iconfont nut-icon nut-icon-dongdong "></i>`
  )
  expect(container.querySelector('.nut-input-right-icon')?.innerHTML).toBe(
    `<i class="nutui-iconfont nut-icon nut-icon-ask2 "></i>`
  )
})

test('clearable and clear event test', () => {
  const handleClear = jest.fn()
  const { container } = render(
    <Input
      label="文本"
      defaultValue="清除文本"
      clearable
      clearSize="14"
      onClear={handleClear}
    />
  )
  const inputEl = container.querySelector('.nut-input-inner') as Element
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'value',
    '清除文本'
  )
  fireEvent.focus(inputEl)
  setTimeout(() => {
    expect(inputEl.querySelector('.nut-input-clear')).toHaveClass(
      'nut-icon-mask-close'
    )
    expect(inputEl.querySelector('.nut-input-clear')).toHaveAttribute(
      'style',
      'font-size:14px;width:14p;height:14px;'
    )
    const clearBtn = inputEl.querySelector('.nut-input-clear') as Element
    fireEvent.click(clearBtn)
    expect(handleClear).toBeCalled()
    expect(container.querySelector('.input-text')).toHaveAttribute('value', '')
  }, 300)
})

test('disabled test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" disabled />
  )
  expect(container.querySelector('.input-text')).toHaveAttribute('disabled')
})

test('required test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" required />
  )
  expect(container.querySelector('.nut-input')).toHaveClass(
    'nut-input-required'
  )
})

test('error test', () => {
  const { container } = render(<Input label="文本" placeholder="文本" error />)
  expect(container.querySelector('.nut-input')).toHaveClass('nut-input-error')
})

test('errorMessage test', () => {
  const { container } = render(
    <Input label="文本" placeholder="文本" errorMessage="底部错误提示文案" />
  )
  expect(container.querySelector('.nut-input-error-message')?.innerHTML).toBe(
    '底部错误提示文案'
  )
})

test('slotButton test', () => {
  const { container } = render(
    <Input
      label="短信验证码"
      placeholder="请输入"
      clearable
      center
      slotButton={
        <Button size="small" type="primary">
          发送验证码
        </Button>
      }
    />
  )
  expect(container.querySelector('.nut-button__warp')?.innerHTML).toBe(
    '<div class="">发送验证码</div>'
  )
})

test('clearable and clear event test', () => {
  const handleChange = jest.fn()
  const handleFocus = jest.fn()
  const handleBlur = jest.fn()
  const handleClick = jest.fn()
  const handleClickInput = jest.fn()
  const handleClickLeftIcon = jest.fn()
  const handleClickRightIcon = jest.fn()
  const { container } = render(
    <Input
      label="文本"
      defaultValue="文本"
      clearable
      clearSize="14"
      leftIcon="dongdong"
      rightIcon="ask2"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onClickInput={handleClickInput}
      onClickLeftIcon={handleClickLeftIcon}
      onClickRightIcon={handleClickRightIcon}
    />
  )
  const inputEl = container.querySelector('.input-text') as Element
  expect(container.querySelector('.input-text')).toHaveAttribute(
    'value',
    '文本'
  )
  fireEvent.click(inputEl)
  expect(handleClick).toBeCalled()
  fireEvent.change(inputEl, { target: { value: '文字改变' } })
  setTimeout(() => {
    expect(handleFocus).toBeCalled()
    expect(handleChange).toBeCalled()
    expect(container.querySelector('.input-text')).toHaveAttribute(
      'value',
      '文字改变'
    )
    fireEvent.blur(inputEl)
    expect(handleBlur).toBeCalled()
  }, 300)
})
