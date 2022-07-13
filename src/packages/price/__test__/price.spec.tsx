import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Price } from '../price'

test('props test', () => {
  const { container } = render(
    <Price price={1010} needSymbol={false} thousands />
  )
  expect(container.querySelector('.nut-price__big')?.innerHTML).toBe('1,010')
  expect(container.querySelector('.nut-price__small')?.innerHTML).toBe('00')
  expect(container).toMatchSnapshot()
})

test('props thousands test', () => {
  const { container } = render(
    <Price price={10010.01} needSymbol symbol="$" thousands={false} />
  )
  expect(container.querySelector('.nut-price__big')?.innerHTML).toBe('10010')
  expect(container.querySelector('.nut-price__small')?.innerHTML).toBe('01')
  expect(container).toMatchSnapshot()
})

test('props needSymbol and symbol test', () => {
  const { container } = render(<Price price={10010} needSymbol symbol="$" />)
  expect(container.querySelector('.nut-price__symbol')).toBeInTheDocument()
  expect(container.querySelector('.nut-price__symbol')?.innerHTML).toBe('$')
  expect(container).toMatchSnapshot()
})

test('props decimalDigits test', () => {
  const { container } = render(<Price price={15213.1221} decimalDigits={3} />)
  expect(container.querySelector('.nut-price__small')?.innerHTML).toBe('122')
  expect(container).toMatchSnapshot()
})
