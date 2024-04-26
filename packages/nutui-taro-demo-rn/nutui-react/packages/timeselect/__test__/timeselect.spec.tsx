import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { TimeSelect } from '../timeselect'

const options = [
  {
    value: '20230520',
    text: '520',
    children: [
      { value: '09', text: '09:00-10:00' },
      { value: '10', text: '10:00-11:00' },
      { value: '11', text: '11:00-12:00' },
    ],
  },
  {
    value: '20230521',
    text: '521',
    children: [
      { value: '09', text: '09:00-10:00' },
      { value: '10', text: '10:00-11:00' },
    ],
  },
]

test('timeselect props test', async () => {
  const App = () => {
    return <TimeSelect visible options={options} />
  }
  const { container } = render(<App />)
  await waitFor(() => {
    expect(container.outerHTML).toMatchSnapshot()
  })
})

test('timeselect event test', async () => {
  const handleDateChange = vi.fn()
  const handleTimeChange = vi.fn()
  const App = () => {
    return (
      <TimeSelect
        visible
        options={options}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    )
  }
  const { container } = render(<App />)
  await waitFor(() => {
    const date = container.querySelector('.nut-timepannel')
    ReactTestUtils.Simulate.click(date as HTMLElement)
    expect(handleDateChange).toBeCalledWith(options[0], [])

    const time = container.querySelector('.nut-timedetail-item')
    ReactTestUtils.Simulate.click(time as HTMLElement)
    expect(handleTimeChange).toBeCalledWith(options[0].children[0], [
      {
        value: '20230520',
        children: [options[0].children[0]],
      },
    ])
  })
})
