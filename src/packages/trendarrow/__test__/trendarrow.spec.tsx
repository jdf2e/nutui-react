// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TrendArrow from '@/packages/trendarrow'

test('should render rate when used', async () => {
  const { container } = render(<TrendArrow rate={12.325} />)
  expect(container.querySelector('.nut-trendarrow__rate')?.innerHTML).toBe(
    '12.33%'
  )
})

test('should render digits when used', async () => {
  const { container } = render(<TrendArrow rate={12.325} digits={1} />)
  expect(container.querySelector('.nut-trendarrow__rate')?.innerHTML).toBe(
    '12.3%'
  )
})

test('should render showSign when used', async () => {
  const { container } = render(<TrendArrow rate={12.325} showSign />)
  expect(container.querySelector('.nut-trendarrow__rate')?.innerHTML).toBe(
    '+12.33%'
  )
})

test('should render showZero when used ', async () => {
  const { container } = render(<TrendArrow rate={0} showSign showZero />)
  expect(container.querySelector('.nut-trendarrow__rate')?.innerHTML).toBe(
    '0.00%'
  )
})

test('should not render 0  when showZero is false', async () => {
  const { container } = render(
    <TrendArrow rate={0} showSign showZero={false} />
  )
  expect(container.querySelector('.nut-trendarrow__rate')?.innerHTML).toBe('--')
})

test('should render left icon when arrowLeft', async () => {
  const { container } = render(<TrendArrow rate={12.325} arrowLeft />)
  expect(
    container.querySelectorAll('.nut-trendarrow__icon-before')?.length
  ).toBe(0)
  expect(
    container.querySelectorAll('.nut-trendarrow__icon-after')?.length
  ).toBe(1)
})

test('should render sync text color when syncTextColor is true', async () => {
  const { container } = render(<TrendArrow rate={12.325} syncTextColor />)
  expect(container.querySelector('.nut-trendarrow__rate')).toHaveAttribute(
    'style',
    'color: rgb(250, 44, 25);'
  )
})

test('should render sync text color when textColor is true', async () => {
  const { container } = render(
    <TrendArrow
      rate={12.325}
      syncTextColor={false}
      textColor="rgb(39,197,48)"
    />
  )
  expect(container.querySelector('.nut-trendarrow__rate')).toHaveAttribute(
    'style',
    'color: rgb(39, 197, 48);'
  )
})

test('should render sync text color when riseColor is true', async () => {
  const { container } = render(
    <TrendArrow rate={12.325} riseColor="rgb(73,143,242)" />
  )
  expect(container.querySelector('.nut-trendarrow__rate')).toHaveAttribute(
    'style',
    'color: rgb(73, 143, 242);'
  )
})

test('should render sync text color when dropColor is true', async () => {
  const { container } = render(
    <TrendArrow rate={-10} dropColor="rgb(73,143,242)" showSign />
  )
  expect(container.querySelector('.nut-trendarrow__rate')).toHaveAttribute(
    'style',
    'color: rgb(73, 143, 242);'
  )
})
