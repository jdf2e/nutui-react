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

test('should keep AI actions below the input and preserve search and clear events', () => {
  const onSearch = vi.fn()
  const onClear = vi.fn()
  const { container, getByText, getByRole } = render(
    <SearchBar
      mode="ai"
      defaultValue="空调"
      leftIn={<span>智能模式</span>}
      rightIn={<button onClick={() => onSearch('空调')}>搜索</button>}
      onSearch={onSearch}
      onClear={onClear}
    />
  )
  const input = getByRole('searchbox')
  const actions = container.querySelector('.nut-searchbar-actions')
  expect(actions).toContainElement(getByText('智能模式'))
  expect(actions).toContainElement(getByText('搜索'))
  expect(actions).not.toContainElement(input)
  fireEvent.keyDown(input, { key: 'Enter' })
  expect(onSearch).toHaveBeenCalledWith('空调')
  fireEvent.click(container.querySelector('.nut-searchbar-clear') as Element)
  expect(input).toHaveValue('')
  expect(onClear).toHaveBeenCalledTimes(1)
  expect(container.querySelector('.nut-searchbar-clear')).toBeNull()
  fireEvent.change(input, { target: { value: '卧室空调' } })
  expect(container.querySelector('.nut-searchbar-clear')).toBeInTheDocument()
})

test('should preserve the input value when switching between normal and AI layouts', () => {
  const onSearch = vi.fn()
  const { getByRole, rerender } = render(
    <SearchBar defaultValue="空调" onSearch={onSearch} />
  )
  fireEvent.change(getByRole('searchbox'), { target: { value: '卧室空调' } })
  rerender(<SearchBar mode="ai" defaultValue="空调" onSearch={onSearch} />)
  expect(getByRole('searchbox')).toHaveValue('卧室空调')
  fireEvent.keyDown(getByRole('searchbox'), { key: 'Enter' })
  expect(onSearch).toHaveBeenCalledWith('卧室空调')
  rerender(<SearchBar defaultValue="空调" onSearch={onSearch} />)
  expect(getByRole('searchbox')).toHaveValue('卧室空调')
})

test('should keep the default search icon while focusing and entering text', () => {
  const { container, getByRole } = render(<SearchBar />)
  const input = getByRole('searchbox')
  expect(container.querySelector('.nut-searchbar-leftin')).toBeInTheDocument()
  fireEvent.focus(input)
  expect(container.querySelector('.nut-searchbar-leftin')).toBeInTheDocument()
  fireEvent.change(input, { target: { value: '空调' } })
  fireEvent.blur(input)
  expect(container.querySelector('.nut-searchbar-leftin')).toBeInTheDocument()
  fireEvent.click(container.querySelector('.nut-searchbar-clear') as Element)
  fireEvent.blur(input)
  expect(container.querySelector('.nut-searchbar-leftin')).toBeInTheDocument()
})

test('should hide leading content only when leftIn is explicitly null', () => {
  const { container, getByRole } = render(<SearchBar leftIn={null} />)
  const input = getByRole('searchbox')
  expect(container.querySelector('.nut-searchbar-leftin')).toBeNull()
  fireEvent.focus(input)
  fireEvent.change(input, { target: { value: '空调' } })
  fireEvent.blur(input)
  expect(container.querySelector('.nut-searchbar-leftin')).toBeNull()
})

test('should keep custom leading content while editing', () => {
  const { getByRole, getByText } = render(<SearchBar leftIn="业务名" />)
  fireEvent.focus(getByRole('searchbox'))
  expect(getByText('业务名')).toBeInTheDocument()
})

test('should not focus an empty tag search until clicked', async () => {
  const onFocus = vi.fn()
  render(<SearchBar tag onFocus={onFocus} />)
  await new Promise((resolve) => {
    setTimeout(resolve, 10)
  })
  expect(onFocus).not.toHaveBeenCalled()
})

test('should return to capsule presentation after editing a keyword', async () => {
  const { container, getByRole } = render(
    <SearchBar tag defaultValue="空调" leftIn={null} />
  )
  const input = getByRole('searchbox')
  expect(container.querySelector('.nut-searchbar-value')).toHaveTextContent(
    '空调'
  )
  fireEvent.focus(input)
  expect(container.querySelector('.nut-searchbar-value')).toBeNull()
  fireEvent.change(input, { target: { value: '卧室空调' } })
  fireEvent.blur(input)
  await waitFor(() => {
    expect(container.querySelector('.nut-searchbar-value')).toHaveTextContent(
      '卧室空调'
    )
  })
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
