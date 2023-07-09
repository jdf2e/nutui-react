import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Category } from '@nutui/icons-react'
import { Loading } from '../loading'

test('type test', () => {
  const { container } = render(<Loading type="circular" />)
  expect(container.querySelector('svg')).toHaveClass('nut-icon-Loading1')
})

test('color test', () => {
  const { container } = render(<Loading type="circular" color="#fa2c19" />)
  expect(container.querySelector('svg')).toHaveAttribute('color', '#fa2c19')
})

test('size test', () => {
  const { container } = render(<Loading type="circular" size="20" />)
  expect(container.querySelector('svg')).toHaveAttribute(
    'style',
    'width: 20px; height: 20px;'
  )
})

test('text test', () => {
  const { container } = render(<Loading>加载中</Loading>)
  const el: any = container.querySelectorAll('.nut-loading-text').length
  expect(el > 0).toBe(true)
})

test('vertical test', () => {
  const { container } = render(<Loading vertical>加载中</Loading>)
  expect(container.querySelector('.nut-loading')).toHaveClass(
    'nut-loading-vertical'
  )
})

test('text color test', () => {
  const { container } = render(<Loading textColor="#396aca">加载中</Loading>)
  expect(container.querySelector('.nut-loading-text')).toHaveAttribute(
    'style',
    'font-size: 14px; color: rgb(57, 106, 202);'
  )
})

test('text size test', () => {
  const { container } = render(<Loading textSize="20">加载中</Loading>)
  expect(container.querySelector('.nut-loading-text')).toHaveAttribute(
    'style',
    'font-size: 20px; color: rgb(158, 169, 175);'
  )
})

test('custom icon test', () => {
  const { container } = render(
    <Loading vertical icon={<Category width="30" height="30" color="red" />} />
  )
  expect(container.querySelector('svg')).toHaveClass('nut-icon-Category')
})
