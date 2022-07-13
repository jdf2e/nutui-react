import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Skeleton } from '../skeleton'

test('should render with row width array correctly', () => {
  const { container } = render(<Skeleton width="100px" />)
  expect(container.querySelector('.blockClass')).toHaveStyle({ width: '100px' })
})

test('should allow to disable animation', () => {
  const { container } = render(<Skeleton row={1} animated={false} />)
  expect(container.querySelector('.skeleton-animation')).toBeFalsy()
})

test('should change avatar size when using avatarSize prop', () => {
  const { container } = render(<Skeleton avatar avatarSize="20px" />)
  expect(container.querySelector('.avatarClass')).toHaveStyle({
    width: '20px',
    height: '20px',
  })
  expect(container).toMatchSnapshot()
})

test('should change avatar shape when using avatarShape prop', () => {
  const { container } = render(<Skeleton avatar avatarShape="square" />)
  expect(container.querySelector('.avatarClass')).toMatchSnapshot()
})

test('should be round when using round prop', () => {
  const { container } = render(<Skeleton title round avatar />)
  expect(container.querySelector('.avatarClass')).toBeTruthy()
})
