import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Indicator } from '../indicator'
import Cell from '@/packages/cell'

test('should match snapshot', () => {
  const { asFragment } = render(<Indicator total={3} current={3} />)
  expect(asFragment()).toMatchSnapshot()
})

test('should be shown when passing size and current', () => {
  const { container } = render(
    <Cell>
      <Indicator total={3} current={2} />
    </Cell>
  )
  expect(container.querySelectorAll('.nut-indicator-dot')).toHaveLength(3)
  expect(container.querySelectorAll('.nut-indicator-active')).toHaveLength(1)
})

test('should be shown when custom node', () => {
  const { container } = render(
    <Cell>
      <Indicator total={6} current={5}>
        <div className="number">{5}</div>
      </Indicator>
    </Cell>
  )
  expect(container.querySelectorAll('.nut-indicator-dot')).toHaveLength(5)
})

test('should be shown when custom node', () => {
  const { container } = render(
    <Cell>
      <Indicator total={6} current={5}>
        <div className="number">{5}</div>
      </Indicator>
    </Cell>
  )
  expect(container.querySelectorAll('.nut-indicator-dot')).toHaveLength(5)
})
