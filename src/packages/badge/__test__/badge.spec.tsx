import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Checklist } from '@nutui/icons-react'
import { Badge } from '../badge'

test('should match snapshot', () => {
  const { asFragment } = render(<Badge value={8} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match value is string', () => {
  const { container } = render(<Badge value="new" />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveTextContent('new')
})

test('should match max size', () => {
  const { container } = render(<Badge value={200} max={9} />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent.textContent).toBe('9+')
})

test('should match dot', () => {
  const { container } = render(<Badge value={10} dot />)
  const badgeContent = container.querySelectorAll('.nut-badge-dot')
  expect(badgeContent.length).toBe(1)
})

test('should match top、right: bad number', () => {
  const { container } = render(<Badge value={10} top="--10" right="0" />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveStyle({ top: '0px' })
})

test('should match top、right: have px', () => {
  const { container } = render(<Badge value={10} top="-10px" right="0" />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveStyle({ top: '-10px', right: '0px' })
})

test('should match top、right: float', () => {
  const { container } = render(<Badge value={10} top="-10.8px" right="0.5px" />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveStyle({ top: '-10.8px', right: '0.5px' })
})

test('should match custom color', () => {
  const { container } = render(<Badge value={200} color="orange" />)
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveStyle({ 'background-color': 'orange' })
})

test('should match custom icon', () => {
  const { asFragment } = render(<Badge value={<Checklist />} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match custom color when fill = outline', () => {
  const { container } = render(
    <Badge value={200} color="orange" fill="outline" />
  )
  const badgeContent = container.querySelectorAll('.nut-badge-content')[0]
  expect(badgeContent).toHaveStyle({
    border: '1px solid orange',
    color: 'orange',
    background: '#fff',
  })
})
