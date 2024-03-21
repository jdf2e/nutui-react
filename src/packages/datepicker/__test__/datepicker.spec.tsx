import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DatePicker } from '../datepicker'

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
      confirm.mock.calls[0][0].map((option: any) => option.text).join('')
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

  const columns = container.querySelectorAll('.nut-picker-list')[0]
  const lists = columns.querySelectorAll('.nut-picker-roller-item-title')
  const years = ['2020', '2021', '2022']
  expect(lists.length).toBe(3)
  lists.forEach((list, i) => {
    expect(list.textContent).toEqual(years[i])
  })
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
        option.text += ''
        break
      case 'month':
        option.text += 'M'
        break
      case 'day':
        option.text += 'D'
        break
      case 'hour':
        option.text += 'H'
        break
      case 'minute':
        option.text += 'M'
        break
      default:
        option.text += ''
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
      confirm.mock.calls[0][0].map((option: any) => option.text).join('')
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

  const columns = container.querySelectorAll('.nut-picker-list')[1]
  const lists = columns.querySelectorAll('.nut-picker-roller-item')
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

  const columns = container.querySelectorAll('.nut-picker-list')[3]
  const lists = columns.querySelectorAll('.nut-picker-roller-item')
  expect(lists.length).toBe(4)
})
