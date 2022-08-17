import * as React from 'react'

import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReactTestUtils from 'react-dom/test-utils'

import { TimeSelect } from '../timeselect'

const state = {
  visible1: true,
  height: '50%',
  title: '取件时间 1',
  currentKey: 0,
  dates: [
    {
      'pannel-key': '0',
      date: '5月20日(今天)',
    },
    {
      'pannel-key': '1',
      date: '5月21日(星期三)',
    },
  ],
  times: [
    {
      key: '0',
      list: ['9:00-10:00', '10:00-11:00', '11:00-12:00'],
    },
    {
      key: '1',
      list: ['9:00-10:00', '10:00-11:00'],
    },
  ],
}
test('timeselect props test', async () => {
  const App = () => {
    return (
      <TimeSelect
        visible={state.visible1}
        height={state.height}
        title={state.title}
        multiple
        currentKey={state.currentKey}
        dates={state.dates}
        times={state.times}
      />
    )
  }
  const { container } = render(<App />)

  await waitFor(
    () => {
      const titleDoms = container.querySelectorAll('.nut-timeselect__title')
      expect(titleDoms[0].innerHTML).toBe(state.title)
      container.querySelectorAll('.nut-timepannel').forEach((item, index) => {
        expect(item.innerHTML).toBe(state.dates[index].date)
      })
    },
    { timeout: 2000 }
  )

  await waitFor(
    () => {
      expect(container.querySelector('.nut-timedetail')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    },
    { timeout: 2000 }
  )
})

test('timeselect event test', async () => {
  const App = () => {
    return (
      <TimeSelect
        visible={state.visible1}
        height={state.height}
        title={state.title}
        multiple
        currentKey={state.currentKey}
        dates={state.dates}
        times={state.times}
      />
    )
  }
  const { container } = render(<App />)
  await waitFor(
    () => {
      container
        .querySelectorAll('.nut-timedetail__item')
        .forEach((item, index) => {
          ReactTestUtils.Simulate.click(item)
          expect(item).toHaveClass('nut-timedetail__item-active')
        })
    },
    { timeout: 2000 }
  )
})
