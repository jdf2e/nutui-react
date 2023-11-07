import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DatePicker } from '../datepicker'

const currentYear = new Date().getFullYear()
test('Show Chinese', async () => {
  const confirm = jest.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
      showChinese
      threeDimensional={false}
      onConfirm={(options) => confirm(options)}
    />
  )

  const confirmBtn = container.querySelectorAll('.nut-picker__confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() => {
    expect(
      confirm.mock.calls[0][0].map((option: any) => option.text).join('')
    ).toEqual(`${currentYear - 10}年01月01日`)
  })
})

test('Min date & Max date', async () => {
  const confirm = jest.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
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
})

test('should pick defaultValue', async () => {
  const confirm = jest.fn()
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

  const confirmBtn = container.querySelectorAll('.nut-picker__confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() =>
    expect(
      confirm.mock.calls[0][0].map((option: any) => option.text).join('')
    ).toEqual('20210301')
  )
})

test('Increment step setting', async () => {
  const confirm = jest.fn()
  const { container } = render(
    <DatePicker
      title="日期选择"
      visible
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
  const filter = jest.fn((type, options) => {
    if (type === 'hour') {
      return options.filter((option: any) => Number(option.value) % 6 === 0)
    }
    return options
  })

  const { container } = render(
    <DatePicker title="日期选择" visible type="datehour" filter={filter} />
  )

  const columns = container.querySelectorAll('.nut-picker-list')[3]
  const lists = columns.querySelectorAll('.nut-picker-roller-item')
  expect(lists.length).toBe(4)
})
