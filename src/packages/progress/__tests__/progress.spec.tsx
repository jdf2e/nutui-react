import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Progress } from '../progress'

test('should render progress when use props', async () => {
  const { asFragment, container } = render(<Progress percent={100} />)
  expect(asFragment()).toMatchSnapshot()
})
test('should render different height and color when use color height props', async () => {
  const { container } = render(
    <Progress percent={50} color="blue" strokeWidth="20" />
  )
  const inner = container.querySelector('.nut-progress-inner')
  expect(inner?.getAttribute('style')).toBe('width: 50%; background: blue;')
})

test('should show percent when use showText props', () => {
  const { container } = render(<Progress percent={30} showText />)
  const text = container.querySelector('.nut-progress-text')
  expect(text).toBeTruthy()
})
