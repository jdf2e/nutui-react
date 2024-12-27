import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Check } from '@nutui/icons-react'
import { Badge } from '../badge'

test('should match snapshot', () => {
  const { asFragment } = render(<Badge value={8} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match value is string', () => {
  const { container } = render(<Badge value="new" />)
  const badgeContent = container.querySelectorAll('.nut-badge-sup')[0]
  expect(badgeContent).toHaveTextContent('new')
})

test('should match max size', () => {
  const { container } = render(<Badge value={200} max={9} />)
  const badgeContent = container.querySelectorAll('.nut-badge-sup')[0]
  expect(badgeContent.textContent).toBe('9+')
})

test('should match dot', () => {
  const { container } = render(<Badge value={10} dot />)
  const badgeContent = container.querySelectorAll('.nut-badge-dot')
  expect(badgeContent.length).toBe(1)
})

test('should match top、right: bad number', () => {
  const { container } = render(<Badge value={10} top="10" right="0" />)
  const badgeContent = container.querySelectorAll('.nut-badge-sup')[0]
  expect(badgeContent).toHaveStyle({ top: '10px' })
})

test('should match top、right: float', () => {
  const { container } = render(<Badge value={10} top="10.8" right="0.5" />)
  const badgeContent = container.querySelectorAll('.nut-badge-sup')[0]
  expect(badgeContent).toHaveStyle({ top: '10.8px', right: '0.5px' })
})

test('should match custom icon', () => {
  const { asFragment } = render(<Badge value={<Check />} />)
  expect(asFragment()).toMatchSnapshot()
})
