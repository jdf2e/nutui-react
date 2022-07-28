import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Progress } from '../progress'

test('should render progress when use props', async () => {
  const { asFragment, container } = render(<Progress percentage={100} />)
  expect(asFragment()).toMatchSnapshot()
})
test('should render different height and color when use color height props', async () => {
  const { container } = render(
    <Progress percentage={50} strokeColor="blue" strokeWidth="20" textColor="red" />
  )
  let inner = container.querySelector('.nut-progress-inner')
  expect(inner?.getAttribute('style')).toBe('width: 50%; border-radius: 12px; background: blue;')
  let span = container.querySelector('.nut-progress-text span')
  expect(span?.getAttribute('style')).toBe('color: red;')
})

test('should hide percentage when use showText props', () => {
  const { container } = render(<Progress percentage={30} showText={false} />)
  let text = container.querySelector('.nut-progress-text')
  expect(text).toBeNull()
})

test('should render inside percentage when use textInside props', () => {
  const { container } = render(<Progress percentage={50} textInside={true} />)
  let text = container.querySelector('.nut-progress-text')
  expect(text).toHaveClass('nut-progress-text nut-progress-insidetext')
})

test('should render custom size when use size props', () => {
  const { container } = render(<Progress percentage={50} size="large" />)
  expect(container.querySelector('.nut-progress-outer')).toHaveClass('nut-progress-large')
})
