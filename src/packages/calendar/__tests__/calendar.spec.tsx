import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Calendar } from '../calendar'

interface Day {
  day: string | number
  type: string
}

test('show-title prop', async () => {
  const { container, rerender } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )

  const canlendarTitle1 = container.querySelectorAll(
    '.nut-calendar-header .nut-calendar-title'
  )

  expect(canlendarTitle1.length).toBe(1)

  rerender(
    <Calendar
      visible
      showTitle={false}
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )

  const canlendarTitle2 = container.querySelectorAll(
    '.nut-calendar-header .nut-calendar-title'
  )

  expect(canlendarTitle2.length).toBe(0)
})

test('show-sub-title prop', async () => {
  const { container, rerender } = render(
    <Calendar
      visible
      showSubTitle
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )

  const curMonth1 = container.querySelectorAll('.nut-calendar-sub-title')

  expect(curMonth1.length).toBe(1)

  rerender(
    <Calendar
      visible
      showSubTitle={false}
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )

  const curMonth2 = container.querySelectorAll('.nut-calendar-sub-title')

  expect(curMonth2.length).toBe(0)
})

test('show-today prop', async () => {
  const { container } = render(
    <Calendar
      visible
      showToday={false}
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )

  const tipCurr = container.querySelectorAll('.nut-calendar-day-info-curr')

  expect(tipCurr.length).toBe(0)
})

test('should render slot correctly', async () => {
  const renderHeaderButtons = () => {
    return <div className="d_div"> 最近七天</div>
  }

  const renderDay = (date: Day) => {
    return <span>custom{date.day}</span>
  }

  const renderDayBottom = (date: Day) => {
    return <span>{date.day <= 10 ? '上旬' : '下旬'}</span>
  }

  const { container } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
      renderHeaderButtons={renderHeaderButtons}
      renderDay={renderDay}
      renderDayBottom={renderDayBottom}
    />
  )

  const topSlot = container.querySelector(
    '.nut-calendar-header-buttons'
  ) as HTMLElement
  const viewArea = container.querySelector('.viewArea') as HTMLElement
  expect(topSlot.innerHTML).toContain('<div class="d_div"> 最近七天</div>')
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('select event when click item', () => {
  const onClickDay = jest.fn()
  const { container } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
      onClickDay={onClickDay}
    />
  )

  const calendarMonthDay = container.querySelectorAll('.nut-calendar-day')[15]

  fireEvent.click(calendarMonthDay)
  expect(onClickDay).toBeCalled()
})

test('choose event when click item', async () => {
  const onConfirm = jest.fn()
  const { container } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
      onConfirm={onConfirm}
    />
  )

  const calendarConfirmBtn = container.querySelectorAll(
    '.calendar-confirm-btn'
  )[0]

  fireEvent.click(calendarConfirmBtn)
  expect(onConfirm).toBeCalled()
})
