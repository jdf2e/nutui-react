import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Badge } from '../badge'
import Button from '../../button'

test('should match snapshot', () => {
  const { asFragment } = render(<Badge value={8} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match max size', () => {
  const { asFragment } = render(<Badge value={200} max={9} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match custom color', () => {
  const { asFragment } = render(
    <Badge
      value={200}
      color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
    />
  )
  expect(asFragment()).toMatchSnapshot()
})
