import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AnimatingNumbers } from '../animatingnumbers'

vi.useFakeTimers()
test('test value props', () => {
  const { container } = render(<AnimatingNumbers.CountUp value="678.94" />)

  const listNumbers = container.querySelectorAll('.nut-countup-number')
  expect(listNumbers[0]).toHaveAttribute(
    'style',
    'transition: transform 1s ease-in-out;'
  )
  const defaultDelay = 300
  vi.advanceTimersByTime(defaultDelay)
  expect(listNumbers[0]).toHaveAttribute(
    'style',
    'transition: transform 1s ease-in-out; transform: translate(0, -30%);'
  )
  expect(listNumbers.length).toBe(5)
})

test('test aysnc value and  duration props', async () => {
  let value = '1570.99'
  const { container, rerender } = render(
    <AnimatingNumbers.CountUp value={value} duration={1.2} length={6} />
  )
  const listNumbers = container.querySelectorAll('.nut-countup-number')
  expect(listNumbers.length).toBe(8)
  const defaultDelay = 300
  vi.advanceTimersByTime(defaultDelay)
  expect(listNumbers[0]).toHaveAttribute(
    'style',
    'transition: transform 1.2s ease-in-out; transform: translate(0, -50%);'
  )

  for (let i = 0; i < 5; i++) {
    value = `${Math.floor(Math.random() * 999999)}.${Math.floor(
      Math.random() * 89 + 10
    )}`
    rerender(<AnimatingNumbers.CountUp value={value} duration={0} length={6} />)
    vi.runAllTimers()
    const listNumbers2 = container.querySelectorAll('.nut-countup-number')
    const lastlen = value.length - 1
    const lastNumber = Number(value.slice(lastlen))
    const percentage = lastNumber === 0 ? 50 : 5 * lastNumber
    const style = `transition: transform 0s ease-in-out; transform: translate(${0}, -${percentage}%);`
    expect(listNumbers2[7]).toHaveAttribute('style', style)
  }
})
