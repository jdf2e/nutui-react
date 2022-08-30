import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Range from '@/packages/range'

test('range props test', () => {
  const { container } = render(
    <Range
      className="test-range"
      modelValue={40}
      inactiveColor="rgba(163,184,255,1)"
      buttonColor="rgba(52,96,250,1)"
      style={{ color: 'red' }}
    />
  )

  expect(container.querySelector('.nut-range-container')).toHaveClass(
    'test-range'
  )
  expect(container.querySelector('.nut-range-show-number')).toHaveAttribute(
    'style',
    'background: rgb(163, 184, 255);'
  )
  expect(container.querySelector('.nut-range-button')).toHaveAttribute(
    'style',
    'border-color: rgba(52,96,250,1);'
  )
  expect(container.querySelector('.number')?.innerHTML).toBe('40')

  expect(container).toMatchSnapshot()
})

test('range props test', () => {
  const handleChange = jest.fn()
  const { container } = render(
    <Range
      modelValue={100}
      max={10}
      min={-10}
      change={(value: any) => {
        handleChange
      }}
    />
  )

  expect(container.querySelector('.min')?.innerHTML).toBe('-10')
  expect(container.querySelector('.max')?.innerHTML).toBe('10')
})
