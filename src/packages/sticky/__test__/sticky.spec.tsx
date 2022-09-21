import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sticky from '@/packages/sticky'
import Button from '@/packages/button'
import Cell from '@/packages/cell'

test('should match snapshot', () => {
  const { asFragment } = render(
    <Cell>
      <Sticky>
        <Button type="primary">吸顶</Button>
      </Sticky>
    </Cell>
  )
  expect(asFragment()).toMatchSnapshot()
})

test('should sticky to top after scroll', () => {
  const { container } = render(
    <>
      <Cell>
        <Sticky>
          <Button type="primary">吸顶</Button>
        </Sticky>
      </Cell>
    </>
  )
  expect(container.querySelector('.nut-sticky-box')).toHaveAttribute(
    'style',
    'top: 0px; z-index: 2000;'
  )
})
test('should sticky to bottom after scroll', () => {
  const { container } = render(
    <>
      <Cell>
        <Sticky position="bottom" bottom={20}>
          <Button type="primary">吸底</Button>
        </Sticky>
      </Cell>
    </>
  )
  expect(container.querySelector('.nut-sticky-box')).toHaveAttribute(
    'style',
    'bottom: 20px; z-index: 2000; position: fixed;'
  )
})
