import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Demo13 from '../demos/h5/demo13'
import { skinActiveOverlay, skinBoard, skinIcons } from '../demos/skin-assets'

test('skin demo keeps labels separate while switching the selected images', () => {
  const { container } = render(<Demo13 />)
  const board = container.querySelector('.nut-tabbar-wrap-skin')
  const items = Array.from(container.querySelectorAll('.nut-tabbar-item'))

  expect(
    board?.querySelector('.nut-tabbar-skin-background img')
  ).toHaveAttribute('src', skinBoard)
  expect(items).toHaveLength(5)
  expect(items.every((item) => item.textContent === '文案')).toBe(true)
  expect(items[0].querySelector('.nut-tabbar-skin-icon img')).toHaveAttribute(
    'src',
    skinIcons[0].normal
  )
  expect(items[4].querySelector('.nut-tabbar-skin-icon img')).toHaveAttribute(
    'src',
    skinIcons[0].normal
  )
  expect(items[1]).toHaveClass('nut-tabbar-item-active')
  expect(
    items[1].querySelectorAll('.nut-tabbar-skin-icon img')[0]
  ).toHaveAttribute('src', skinActiveOverlay)
  expect(
    items[1].querySelectorAll('.nut-tabbar-skin-icon img')[1]
  ).toHaveAttribute('src', skinIcons[1].pressed)

  fireEvent.click(items[3])
  expect(items[3]).toHaveClass('nut-tabbar-item-active')
  expect(items[1]).not.toHaveClass('nut-tabbar-item-active')
  expect(items[1].textContent).toBe('文案')
  expect(items[3].textContent).toBe('文案')
  expect(
    items[3].querySelectorAll('.nut-tabbar-skin-icon img')[0]
  ).toHaveAttribute('src', skinActiveOverlay)
  expect(
    items[3].querySelectorAll('.nut-tabbar-skin-icon img')[1]
  ).toHaveAttribute('src', skinIcons[3].pressed)
})
