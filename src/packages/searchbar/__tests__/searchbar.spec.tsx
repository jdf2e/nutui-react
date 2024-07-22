import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '@/packages/searchbar'

test('basic usage', () => {
  const { container } = render(<SearchBar placeholder="请输入文字" />)
  expect(container.querySelector('.nut-searchbar-input')).toHaveAttribute(
    'placeholder',
    '请输入文字'
  )
})

test('should limit maxlength of input value when using maxlength prop', () => {
  const { container } = render(<SearchBar shape="round" maxLength={5} />)
  expect(container.querySelector('.nut-searchbar-input')).toHaveAttribute(
    'maxlength',
    '5'
  )
  expect(container.querySelector('.nut-searchbar-content')).toHaveClass(
    'nut-searchbar-round'
  )
})

test('Search box text settings', () => {
  const { container } = render(<SearchBar left="文本" right="确定" />)
  expect(container.querySelector('.nut-searchbar-left')?.innerHTML).toBe('文本')
  expect(container.querySelector('.nut-searchbar-right')?.innerHTML).toBe(
    '确定'
  )
})

test('Search clear & change', () => {
  const change = vi.fn()
  const { container } = render(
    <SearchBar value="123" onChange={change} maxLength={10} />
  )
  const input = container.querySelector('.nut-searchbar-input')
  expect(input?.getAttribute('value')).toBe('123')
  const clear = container.querySelector('.nut-searchbar-clear')
  fireEvent.click(clear as Element)
  expect(change).toBeCalledWith('')
  expect(input?.getAttribute('value')).toBe('')
})
