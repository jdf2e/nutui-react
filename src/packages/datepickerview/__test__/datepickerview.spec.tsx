import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DatePickerView } from '../datepickerview'

const currentYear = new Date().getFullYear()
test('Show Chinese', async () => {
  const { container } = render(
    <DatePickerView
      title="日期选择"
      visible
      defaultValue={new Date(currentYear - 10, 0, 1)}
      showChinese
    />
  )

  expect(
    container.querySelectorAll('.nut-pickerview-roller-item')[0]
  ).toHaveTextContent('年')
})

test('Min date & Max date', async () => {
  const { container, rerender } = render(
    <DatePickerView
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
    />
  )

  const columns = container.querySelectorAll('.nut-pickerview-list')
  const lists = columns[0].querySelectorAll('.nut-pickerview-roller-item-tiled')
  expect(lists.length).toBe(3)
  rerender(
    <DatePickerView
      title="日期选择"
      visible
      type="datetime"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
    />
  )
  rerender(
    <DatePickerView
      title="日期选择"
      visible
      type="year-month"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
    />
  )
  rerender(
    <DatePickerView
      title="日期选择"
      visible
      type="hour-minutes"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
    />
  )
  rerender(
    <DatePickerView
      title="日期选择"
      visible
      type="month-day"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
    />
  )
  const formatter = (type: string, option: any) => {
    switch (type) {
      case 'year':
        option.label += ''
        break
      case 'month':
        option.label += 'M'
        break
      case 'day':
        option.label += 'D'
        break
      case 'hour':
        option.label += 'H'
        break
      case 'minute':
        option.label += 'M'
        break
      default:
        option.label += ''
    }
    return option
  }
  rerender(
    <DatePickerView
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      formatter={formatter}
    />
  )
})

test('Increment step setting', async () => {
  const { container } = render(
    <DatePickerView
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      minuteStep={5}
      type="time"
    />
  )

  const columns = container.querySelectorAll('.nut-pickerview-list')
  const lists = columns[1].querySelectorAll('.nut-pickerview-roller-item')
  expect(lists.length).toBe(12)
})

test('Filter Time', async () => {
  const filter = vi.fn((type, options) => {
    if (type === 'hour') {
      return options.filter((option: any) => Number(option.value) % 6 === 0)
    }
    return options
  })

  const { container } = render(
    <DatePickerView
      title="日期选择"
      visible
      type="datehour"
      defaultValue={new Date(2022, 0, 1)}
      filter={filter}
    />
  )

  const columns = container.querySelectorAll('.nut-pickerview-list')
  const lists = columns[3].querySelectorAll('.nut-pickerview-roller-item')
  expect(lists.length).toBe(4)
})
