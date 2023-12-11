import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Price } from '../price'

test('props test', () => {
  const { container } = render(<Price price={1010} symbol="" thousands />)
  expect(container.querySelector('.nut-price-integer')?.innerHTML).toBe('1,010')
  expect(container.querySelectorAll('.nut-price-decimal')[1]?.innerHTML).toBe(
    '00'
  )
  expect(container).toMatchSnapshot()
})

test('props thousands test', () => {
  const { container } = render(
    <Price price={10010.01} symbol="$" thousands={false} />
  )
  expect(container.querySelector('.nut-price-integer')?.innerHTML).toBe('10010')
  expect(container.querySelectorAll('.nut-price-decimal')[1]?.innerHTML).toBe(
    '01'
  )
  expect(container).toMatchSnapshot()
})

test('props symbol test', () => {
  const { container } = render(<Price price={10010} symbol="$" />)
  expect(container.querySelector('.nut-price-symbol')).toBeInTheDocument()
  expect(container.querySelector('.nut-price-symbol')?.innerHTML).toBe('$')
  expect(container).toMatchSnapshot()
})

test('props digits test', () => {
  const { container } = render(<Price price={15213.1221} digits={3} />)
  expect(container.querySelectorAll('.nut-price-decimal')[1]?.innerHTML).toBe(
    '122'
  )
  expect(container).toMatchSnapshot()
})
