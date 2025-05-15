import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Star } from '@nutui/icons-react'
import { Loading } from '../loading'

test('type test', () => {
  const { container } = render(<Loading type="circular" />)
  expect(container.querySelector('svg')).toHaveClass('nut-icon-Loading1')
})

test('text test', () => {
  const { container } = render(<Loading>加载中</Loading>)
  const el: any = container.querySelectorAll('.nut-loading-text').length
  expect(el > 0).toBe(true)
})

test('orientation test', () => {
  const { container } = render(<Loading direction="vertical">加载中</Loading>)
  expect(container.querySelector('.nut-loading')).toHaveClass(
    'nut-loading-vertical'
  )
})

test('custom icon test', () => {
  const { container } = render(
    <Loading icon={<Star width="30" height="30" color="red" />} />
  )
  expect(container.querySelector('svg')).toHaveClass('nut-icon-Star')
})
