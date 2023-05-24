import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ConfigProvider from '@/packages/configprovider'
import Searchbar from '@/packages/searchbar'

test('basic usage', () => {
  const { container } = render(<Searchbar placeholder="请输入文字" />)
  expect(container.querySelector('.nut-searchbar__input')).toHaveAttribute(
    'placeholder',
    '请输入文字'
  )
})

test('should limit maxlength of input value when using maxlength prop', () => {
  const { container } = render(<Searchbar shape="round" maxLength={5} />)
  expect(container.querySelector('.nut-searchbar__input')).toHaveAttribute(
    'maxlength',
    '5'
  )
  expect(container.querySelector('.nut-searchbar__input')).toHaveClass(
    'nut-searchbar__round'
  )
})

test('Background settings inside and outside the search box', () => {
  const { container } = render(
    <ConfigProvider
      theme={{
        nutuiSearchbarBackground: 'red',
        nutuiSearchbarInputBackground: 'green',
        nutuiSearchbarInputTextAlign: 'right',
      }}
    >
      <Searchbar />
    </ConfigProvider>
  )
  expect(container.querySelector('.nut-searchbar')).toHaveAttribute(
    'style',
    'background: red;'
  )
  expect(container.querySelector('.nut-searchbar__content')).toHaveAttribute(
    'style',
    'background: green;'
  )
  expect(container.querySelector('.nut-searchbar__input')).toHaveClass(
    'nut-searchbar__right'
  )
})

test('Search box text settings', () => {
  const { container } = render(<Searchbar left="文本" actionText="确定" />)
  expect(container.querySelector('.nut-searchbar__left')?.innerHTML).toBe(
    '文本'
  )
  expect(container.querySelector('.nut-searchbar__right')?.innerHTML).toBe(
    '确定'
  )
})
