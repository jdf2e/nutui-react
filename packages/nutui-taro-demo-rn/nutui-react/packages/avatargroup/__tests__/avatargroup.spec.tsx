import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { AvatarGroup } from '../avatargroup'

test('size prop', () => {
  const { container } = render(<AvatarGroup size="small" />)
  expect(container).toMatchSnapshot()
})
