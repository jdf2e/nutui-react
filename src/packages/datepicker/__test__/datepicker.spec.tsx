import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import DatePicker from '../datepicker'

const currentYear = new Date().getFullYear()
test('Show Chinese', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
      defaultValue={new Date(currentYear - 10, 0, 1)}
      showChinese
      threeDimensional={false}
      onConfirm={(options) => confirm(options)}
    />
  )

  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() => {
    expect(
      confirm.mock.calls[0][0].map((option: any) => option.label).join('')
    ).toEqual(`${currentYear - 10}年01月01日`)
  })
})

test('Min date & Max date', async () => {
  const confirm = vi.fn()
  const { container, rerender } = render(
    <DatePicker
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
    />
  )

  const columns = container.querySelectorAll('.nut-pickerview-list')
  const lists = columns[0].querySelectorAll('.nut-pickerview-roller-item-tiled')
  expect(lists.length).toBe(3)
  rerender(
    <DatePicker
      title="日期选择"
      visible
      type="datetime"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
    />
  )
  rerender(
    <DatePicker
      title="日期选择"
      visible
      type="year-month"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
    />
  )
  rerender(
    <DatePicker
      title="日期选择"
      visible
      type="hour-minutes"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
    />
  )
  rerender(
    <DatePicker
      title="日期选择"
      visible
      type="month-day"
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
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
    <DatePicker
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      threeDimensional={false}
      onConfirm={confirm}
      formatter={formatter}
    />
  )
})

test('should pick defaultValue', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
      defaultValue={new Date(2021, 2, 1)}
      startDate={new Date(2020, 0, 1)}
      endDate={new Date(2022, 0, 1)}
      onConfirm={(options, values) => confirm(options)}
    />
  )

  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() =>
    expect(
      confirm.mock.calls[0][0].map((option: any) => option.label).join('')
    ).toEqual('20210301')
  )
})

test('Increment step setting', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
      defaultValue={new Date(2022, 0, 1)}
      minuteStep={5}
      type="time"
      onConfirm={confirm}
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
    <DatePicker
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
