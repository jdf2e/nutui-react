import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Skeleton } from '../skeleton'

test('should allow to disable animation', () => {
  const { container } = render(<Skeleton rows={1} animated={false} />)
  expect(container.querySelector('.skeleton-animation')).toBeFalsy()
})
