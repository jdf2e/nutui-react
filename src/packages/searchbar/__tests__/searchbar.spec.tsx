import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Searchbar from '@/packages/searchbar'
import Icon from '@/packages/icon'

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
    <Searchbar background="red" inputBackground="green" align="right" />
  )
  expect(container.querySelector('.nut-searchbar')).toHaveAttribute(
    'style',
    'background: red;'
  )
  expect(container.querySelector('.nut-searchbar__input')).toHaveAttribute(
    'style',
    'background: green;'
  )
  expect(container.querySelector('.nut-searchbar__input')).toHaveClass(
    'nut-searchbar__right'
  )
})

test('Search box text settings', () => {
  const { container } = render(<Searchbar label="文本" actionText="确定" />)
  expect(container.querySelector('.nut-searchbar__label')?.innerHTML).toBe(
    '文本'
  )
  expect(
    container.querySelector('.nut-searchbar__action-text')?.innerHTML
  ).toBe('确定')
})

test('custom icon settings', () => {
  const { container } = render(
    <Searchbar
      leftoutIcon={<Icon name="heart-fill1" />}
      rightoutIcon={<Icon name="star-fill" />}
    />
  )

  expect(
    container.querySelector('.nut-searchbar__leftout-icon')?.innerHTML
  ).toBe(`<i class="nutui-iconfont nut-icon nut-icon-heart-fill1 "></i>`)
  expect(
    container.querySelector('.nut-searchbar__rightout-icon')?.innerHTML
  ).toBe(`<i class="nutui-iconfont nut-icon nut-icon-star-fill "></i>`)
})
