import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Skeleton } from '../skeleton'

test('should allow to disable animation', () => {
  const { container } = render(<Skeleton rows={1} animated={false} />)
  expect(container.querySelector('.skeleton-animation')).toBeFalsy()
})

test('should change avatar size when using avatarSize prop', () => {
  const { container } = render(<Skeleton avatar avatarSize="20px" />)
  expect(container.querySelector('.nut-avatar')).toHaveStyle({
    width: '20px',
    height: '20px',
  })
  expect(container).toMatchSnapshot()
})

test('should change avatar shape when using avatarShape prop', () => {
  const { container } = render(<Skeleton avatar avatarShape="square" />)
  expect(container.querySelector('.nut-avatar')).toMatchSnapshot()
})
