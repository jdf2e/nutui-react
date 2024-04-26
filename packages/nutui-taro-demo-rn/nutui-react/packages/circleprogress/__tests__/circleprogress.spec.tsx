import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CircleProgress } from '../circleprogress'

test('should change stoke when use width props', () => {
  const { getByTestId } = render(
    <CircleProgress
      data-testid="circle-prop"
      percent={40}
      strokeWidth={10}
      radius={60}
    />
  )
  expect(getByTestId('circle-prop').style.width).toBe('120px')
  expect(getByTestId('circle-prop').style.height).toBe('120px')
})

test('should change color when use color props', () => {
  const { container } = render(<CircleProgress percent={40} color="red" />)
  expect(container.querySelectorAll('path')[1].style.stroke).toBe('red')
})

test('渐变色', async () => {
  const color = {
    '0%': '#FF5E5E',
    '100%': '#FFA062',
  }
  const { container } = render(
    <CircleProgress percent={40} clockwise={false} color={color} />
  )
  expect(container.querySelector('stop')).toBeVisible()
})
