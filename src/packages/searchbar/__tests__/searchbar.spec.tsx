import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useState } from 'react'
import SearchBar from '@/packages/searchbar'

test('should render with placeholder', () => {
  const { getByPlaceholderText } = render(
    <SearchBar placeholder="请输入文字" />
  )
  expect(getByPlaceholderText('请输入文字')).toBeInTheDocument()
})

test('should limit maxlength of input value when using maxlength prop', () => {
  const { container } = render(<SearchBar shape="round" maxLength={5} />)
  const input = container.querySelector('.nut-searchbar-input')
  expect(input).toHaveAttribute('maxlength', '5')
  expect(input?.parentNode).toHaveClass('nut-searchbar-round')
})

test('should display left and right text', () => {
  const { container } = render(<SearchBar left="文本" right="确定" />)
  expect(container.querySelector('.nut-searchbar-left')?.innerHTML).toBe('文本')
  expect(container.querySelector('.nut-searchbar-right')?.innerHTML).toBe(
    '确定'
  )
})

test('should render with tags', () => {
  const { container } = render(<SearchBar tag value="add,add3" />)
  const dvalues = container.querySelectorAll('.nut-searchbar-value')
  expect(dvalues.length).toBe(2)
})

test('should render right-in element', () => {
  const { container, rerender } = render(<SearchBar rightIn="搜索" />)
  const rightin = container.querySelectorAll('.nut-searchbar-rightin')
  expect(rightin.length).toBe(1)
  rerender(<SearchBar rightIn={<div className="test">搜索</div>} />)
  const test = container.querySelectorAll('.test')
  expect(test.length).toBe(1)
})

test('should handle all events correctly', async () => {
  const handleChange = vi.fn()
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()
  const handleClick = vi.fn()
  const handleClear = vi.fn()
  const Demo = () => {
    const [value, setValue] = useState('奶茶')
    const onChange = (newValue: string) => {
      setValue(newValue) // 更新状态
      handleChange(newValue) // 调用传入的 onChange 处理函数
    }
    return (
      <SearchBar
        value={value}
        autoFocus
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInputClick={handleClick}
        onClear={handleClear}
      />
    )
  }

  const { container } = render(<Demo />)
  const inputEl = container.querySelector('.nut-searchbar-input') as Element
  expect(inputEl).toHaveValue('奶茶')
  fireEvent.click(inputEl)
  expect(handleClick).toHaveBeenCalledTimes(1)
  fireEvent.change(inputEl, { target: { value: '冰激凌' } })

  await waitFor(() => {
    expect(handleFocus).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(inputEl).toHaveValue('冰激凌')
    fireEvent.blur(inputEl)
    expect(handleBlur).toHaveBeenCalled()
  })

  const clear = container.querySelector('.nut-searchbar-clear') as Element
  fireEvent.click(clear)
  await waitFor(() => {
    expect(inputEl).toHaveValue('')
  })
})
