import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as sass from 'sass'
import Demo12 from '../demos/h5/demo12'
import { skinActiveOverlay, skinBoard, skinIcons } from '../demos/skin-assets'

test('skin demo keeps labels separate while switching the selected images', () => {
  const { container } = render(<Demo12 />)
  const board = container.querySelector('.nut-tabbar-wrap-skin')
  const items = Array.from(container.querySelectorAll('.nut-tabbar-item'))

  expect(
    board?.querySelector('.nut-tabbar-skin-background img')
  ).toHaveAttribute('src', skinBoard)
  expect(items).toHaveLength(5)
  expect(items.every((item) => item.textContent === '文案')).toBe(true)
  expect(items[0].querySelector('.tabbar-skin-demo-icon img')).toHaveAttribute(
    'src',
    skinIcons[0].normal
  )
  expect(items[4].querySelector('.tabbar-skin-demo-icon img')).toHaveAttribute(
    'src',
    skinIcons[0].normal
  )
  expect(items[1]).toHaveClass('nut-tabbar-item-active')
  const demoCss = sass.compile('src/packages/tabbar/demos/skin-demo.scss').css
  expect(demoCss).toContain(
    '.tabbar-skin-demo .nut-tabbar-wrap-skin .tabbar-skin-demo-item.nut-tabbar-item-active'
  )
  expect(demoCss).toContain('background: transparent')
  expect(
    items[1].querySelectorAll('.tabbar-skin-demo-icon img')[0]
  ).toHaveAttribute('src', skinActiveOverlay)
  expect(
    items[1].querySelectorAll('.tabbar-skin-demo-icon img')[1]
  ).toHaveAttribute('src', skinIcons[1].pressed)

  fireEvent.click(items[3])
  expect(items[3]).toHaveClass('nut-tabbar-item-active')
  expect(items[1]).not.toHaveClass('nut-tabbar-item-active')
  expect(items[1].textContent).toBe('文案')
  expect(items[3].textContent).toBe('文案')
  expect(
    items[3].querySelectorAll('.tabbar-skin-demo-icon img')[0]
  ).toHaveAttribute('src', skinActiveOverlay)
  expect(
    items[3].querySelectorAll('.tabbar-skin-demo-icon img')[1]
  ).toHaveAttribute('src', skinIcons[3].pressed)
})
