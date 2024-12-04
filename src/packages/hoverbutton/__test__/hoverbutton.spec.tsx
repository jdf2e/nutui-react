import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cart } from '@nutui/icons-react'
import { HoverButton } from '../hoverbutton'

test('emit click event', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <HoverButton data-testid="position" icon={<Cart />} onClick={handleClick} />
  )
  expect(container.querySelector('.nut-hoverbutton')?.childElementCount).toBe(1)
  fireEvent.click(container)
  expect(handleClick).toBeCalled
  expect(container).toMatchSnapshot()
})

test('child element count', () => {
  const { container } = render(
    <HoverButton>
      <HoverButton.Item icon={<Cart />} />
      <HoverButton.Item icon={<Cart />} />
      <HoverButton.Item icon={<Cart />} />
      <HoverButton.Item icon={<Cart />}>购物</HoverButton.Item>
    </HoverButton>
  )
  expect(container.querySelector('.nut-hoverbutton')?.childElementCount).toBe(4)
  expect(container).toMatchSnapshot()
})

test('tabbar height', () => {
  const { container } = render(
    <HoverButton icon={<Cart />} tabbarHeight={48} />
  )

  expect(container.querySelector('.nut-hoverbutton-container')).toHaveAttribute(
    'style',
    'bottom: 108px;'
  )
  expect(container).toMatchSnapshot()
})
