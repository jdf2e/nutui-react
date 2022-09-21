import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AnimatingNumbers } from '../animatingnumbers'

test('test endNumber props', () => {
  const { container } = render(<AnimatingNumbers.CountUp endNumber="678.94" />)

  const listNumbers = container.querySelectorAll('.nut-countup__number')
  expect(listNumbers[0]).toHaveAttribute(
    'style',
    'transition: transform 1s ease-in-out; transform: translate(0, -30%); webkit-transform: translate(0, -30%);'
  )
  expect(listNumbers.length).toBe(5)
})

test('test aysnc endNumber and  easeSpeed props', async () => {
  let endNumber = '1570.99'
  const { container, rerender } = render(
    <AnimatingNumbers.CountUp
      endNumber={endNumber}
      easeSpeed={1.2}
      maxLen={6}
      className="custom-coutup"
    />
  )
  const listNumbers = container.querySelectorAll('.nut-countup__number')
  expect(listNumbers.length).toBe(8)
  expect(listNumbers[0]).toHaveAttribute(
    'style',
    'transition: transform 1.2s ease-in-out; transform: translate(0, -50%); webkit-transform: translate(0, -50%);'
  )
  endNumber = `${Math.floor(Math.random() * 999999)}.${Math.floor(
    Math.random() * 89 + 10
  )}`
  rerender(
    <AnimatingNumbers.CountUp
      endNumber={endNumber}
      easeSpeed={0}
      className="custom-coutup"
    />
  )
  await waitFor(() => {
    const listNumbers2 = container.querySelectorAll('.nut-countup__number')
    const lastlen = endNumber.length - 1
    const lastNumber = Number(endNumber.slice(lastlen))
    const percentage = lastNumber === 0 ? 50 : 5 * lastNumber
    const style = `transition: transform 0s ease-in-out; transform: translate(${0}, -${percentage}%); webkit-transform: translate(0, -${percentage}%);`
    expect(listNumbers2[7]).toHaveAttribute('style', style)
  })
})
