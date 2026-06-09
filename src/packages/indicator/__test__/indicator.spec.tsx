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
  expect(container.querySelectorAll('.nut-indicator-dot-active')).toHaveLength(
    1
  )
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

test('should be shown when slide', () => {
  const { container } = render(
    <Cell>
      <Indicator type="slide" total={6} current={5} />
    </Cell>
  )
  expect(container.querySelectorAll('.nut-indicator-line-active')).toHaveLength(
    1
  )
})

test('should render dualScreen type with fixed-width', () => {
  const { container } = render(
    <Indicator type="dualScreen" total={2} current={0} />
  )
  expect(
    container.querySelector('.nut-indicator-fixed-width')
  ).toBeInTheDocument()
  expect(container.querySelectorAll('.nut-indicator-dot')).toHaveLength(2)
})

test('should render white color variant', () => {
  const { container } = render(
    <Indicator total={3} current={1} color="default" />
  )
  expect(container.querySelector('.nut-indicator-white')).toBeInTheDocument()
})

test('should render vertical direction', () => {
  const { container } = render(
    <Indicator total={3} current={1} direction="vertical" />
  )
  expect(container.querySelector('.nut-indicator-vertical')).toBeInTheDocument()
})

test('should render placement outside', () => {
  const { container } = render(
    <Indicator total={3} current={1} placement="outside" />
  )
  expect(container.querySelector('.nut-indicator-outside')).toBeInTheDocument()
})

test('should render placement inside-top-right', () => {
  const { container } = render(
    <Indicator total={3} current={1} placement="inside-top-right" />
  )
  expect(
    container.querySelector('.nut-indicator-inside-top-right')
  ).toBeInTheDocument()
})

test('should render placement inside-bottom-center', () => {
  const { container } = render(
    <Indicator total={3} current={1} placement="inside-bottom-center" />
  )
  expect(
    container.querySelector('.nut-indicator-inside-bottom-center')
  ).toBeInTheDocument()
})

test('should render placement inside-bottom-left', () => {
  const { container } = render(
    <Indicator total={3} current={1} placement="inside-bottom-left" />
  )
  expect(
    container.querySelector('.nut-indicator-inside-bottom-left')
  ).toBeInTheDocument()
})

test('slide type should set CSS custom properties for transform', () => {
  const { container } = render(<Indicator type="slide" total={3} current={1} />)
  const line = container.querySelector(
    '.nut-indicator-line-active'
  ) as HTMLElement
  expect(line).toBeInTheDocument()
  expect(line.style.getPropertyValue('--nutui-indicator-current')).toBe('1')
  expect(line.style.getPropertyValue('--nutui-indicator-total')).toBe('3')
})
