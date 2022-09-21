import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Badge } from '../badge'

test('should match snapshot', () => {
  const { asFragment } = render(<Badge value={8} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should match value is string', () => {
  const { container } = render(<Badge value="new" />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent).toHaveTextContent('new')
})

test('should match max size', () => {
  const { container } = render(<Badge value={200} max={9} />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent.textContent).toBe('9+')
})

test('should match dot', () => {
  const { container } = render(<Badge value={10} dot />)
  const badgeContent = container.querySelectorAll('.nut-badge__content.is-dot')
  expect(badgeContent.length).toBe(1)
})

test('should match top、right: bad number', () => {
  const { container } = render(<Badge value={10} top="--10" right="0" />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent).toHaveStyle({ top: '0px' })
})

test('should match top、right: have px', () => {
  const { container } = render(<Badge value={10} top="-10px" right="0" />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent).toHaveStyle({ top: '-10px', right: '0px' })
})

test('should match top、right: float', () => {
  const { container } = render(<Badge value={10} top="-10.8px" right="0.5px" />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent).toHaveStyle({ top: '-10.8px', right: '0.5px' })
})

test('should match custom color', () => {
  const { container } = render(<Badge value={200} color="orange" />)
  const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
  expect(badgeContent).toHaveStyle({ 'background-color': 'orange' })
})

// test('should match custom gradient color', () => {
//   const { container } = render(
//     <Badge
//       value={200}
//       color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
//     />
//   )
//   const badgeContent = container.querySelectorAll('.nut-badge__content')[0]
//   expect(badgeContent).toHaveStyle({
//     'background-color':
//       'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
//   })
// })

test('should match custom icons', () => {
  const { asFragment } = render(<Badge value={200} icons="link" />)
  expect(asFragment()).toMatchSnapshot()
})
