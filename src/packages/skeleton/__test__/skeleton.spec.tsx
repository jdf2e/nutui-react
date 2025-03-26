import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Skeleton } from '../skeleton'

test('should allow to disable animation', () => {
  const { container } = render(<Skeleton rows={1} animated={false} />)
  expect(container.querySelector('.nut-skeleton-animation')).toBeFalsy()
})

test('should set duration', () => {
  const { container } = render(<Skeleton rows={1} duration={2} />)
  const animation = container.querySelector('.nut-skeleton-animated')
  expect(animation).toHaveStyle({
    animationDuration: '2s',
  })
})
