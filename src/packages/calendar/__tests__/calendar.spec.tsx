import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CalendarDay, CalendarType } from '@/packages/calendar/types'
import { Calendar } from '../calendar'

test('single prop', async () => {
  const onConfirm = vi.fn()
  const { container, rerender } = render(
    <Calendar
      visible
      title="test"
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
      startText="start"
      endText="end"
      confirmText="confirm"
      onConfirm={onConfirm}
    />
  )
  const canlendarTitle1 = container.querySelectorAll(
    '.nut-calendar-header .nut-calendar-title'
  )
  expect(canlendarTitle1.length).toBe(1)
  const curMonth1 = container.querySelectorAll('.nut-calendar-sub-title')
  expect(curMonth1.length).toBe(1)
  const calendarConfirmBtn = container.querySelectorAll(
    '.calendar-confirm-btn'
  )[0]

  fireEvent.click(calendarConfirmBtn)
  expect(onConfirm).toBeCalled()
  rerender(
    <Calendar
      visible
      showTitle={false}
      showSubTitle={false}
      showToday={false}
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )
  const canlendarTitle2 = container.querySelectorAll(
    '.nut-calendar-header .nut-calendar-title'
  )
  expect(canlendarTitle2.length).toBe(0)
  const curMonth2 = container.querySelectorAll('.nut-calendar-sub-title')
  expect(curMonth2.length).toBe(0)
  const tipCurr = container.querySelectorAll('.nut-calendar-day-info-curr')
  expect(tipCurr.length).toBe(0)
})

test('week prop', async () => {
  const { container } = render(
    <Calendar
      visible
      type="week"
      showToday={false}
      defaultValue={['2025-02-16']}
      startDate="2025-01-01"
      endDate="2025-3-31"
      firstDayOfWeek={1}
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('range prop', async () => {
  const { container } = render(
    <Calendar
      visible
      type="range"
      showToday={false}
      defaultValue={['2024-12-16', '2025-04-01']}
      startDate="2025-01-01"
      endDate="2025-3-31"
      firstDayOfWeek={1}
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('viewmode prop', async () => {
  const onItemClick = vi.fn()
  const { container } = render(
    <Calendar
      viewMode="quarter"
      defaultValue="2025-Q1"
      startDate="2025-01-01"
      endDate="2025-3-31"
      onItemClick={onItemClick}
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-viewmode-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('should render calendar in quarter view with extended date range', async () => {
  const { container } = render(
    <Calendar
      viewMode="quarter"
      defaultValue="2025-Q1"
      startDate="2025-01-01"
      endDate="2027-3-31"
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-viewmode-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('should render calendar in month view with onItemClick', async () => {
  const onItemClick = vi.fn()
  const { container } = render(
    <Calendar
      viewMode="month"
      defaultValue="2025-01"
      startDate="2025-01-01"
      endDate="2025-3-31"
      onItemClick={onItemClick}
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-viewmode-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('should render calendar in month view with extended date range', async () => {
  const onItemClick = vi.fn()
  const { container } = render(
    <Calendar
      viewMode="month"
      defaultValue="2025-01"
      startDate="2025-01-01"
      endDate="2027-3-31"
      onItemClick={onItemClick}
    />
  )
  const viewArea = container.querySelector(
    '.nut-calendar-viewmode-pannel'
  ) as HTMLElement
  expect(viewArea.innerHTML).toMatchSnapshot()
})

test('popup prop', async () => {
  const { container } = render(
    <Calendar
      popup={false}
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
    />
  )
  const popupNode = container.querySelectorAll('.nut-popup')
  expect(popupNode.length).toBe(0)
})

test('should render slot correctly', async () => {
  const renderHeaderButtons = () => <div className="d_div"> 最近七天</div>
  const renderDay = (date: CalendarDay) => <span>custom{date.day}</span>
  const renderDayTop = (date: CalendarDay) => (
    <span>{Number(date.day) === 10 ? '复盘' : ''}</span>
  )
  const renderDayBottom = (date: CalendarDay) => (
    <span>{Number(date.day) <= 10 ? '上旬' : '下旬'}</span>
  )
  const { container } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-03-01"
      endDate="2022-4-31"
      renderHeaderButtons={renderHeaderButtons}
      renderDay={renderDay}
      renderDayTop={renderDayTop}
      renderDayBottom={renderDayBottom}
    />
  )
  const topSlot = container.querySelector(
    '.nut-calendar-header-buttons'
  ) as HTMLElement
  const viewArea = container.querySelector(
    '.nut-calendar-pannel'
  ) as HTMLElement
  expect(topSlot.innerHTML).toContain('<div class="d_div"> 最近七天</div>')
  expect(viewArea.innerHTML).toMatchSnapshot()
})

const testClickEvent = (
  type: CalendarType,
  startDate: string,
  endDate: string,
  offset: number,
  expected: string,
  defaultValue: string | string[] = '2025-01-03'
) => {
  const onDayClick = vi.fn()
  const { container } = render(
    <Calendar
      visible
      type={type}
      defaultValue={defaultValue}
      startDate={startDate}
      endDate={endDate}
      onDayClick={onDayClick}
    />
  )
  const calendarMonthDay =
    container.querySelectorAll('.nut-calendar-day')[offset]
  fireEvent.click(calendarMonthDay)
  expect(onDayClick).toBeCalled()
  const start = container.querySelectorAll(
    '.nut-calendar-day-active .nut-calendar-day-day'
  )[0]
  expect(start.innerHTML).toBe(expected)
}

test('select event when click item', () => {
  testClickEvent('single', '2025-01-01', '2025-12-31', 3, '1')
})

test('week select event when click item', () => {
  testClickEvent('week', '2025-01-01', '2025-01-31', 15, '12', ['2025-01-04'])
  testClickEvent('week', '2025-01-01', '2025-01-31', 4, '1', ['2025-01-27'])
  testClickEvent('week', '2025-01-01', '2025-01-31', 30, '26')
})

test('multiple select event when click item', () => {
  const onDayClick = vi.fn()
  const { container } = render(
    <Calendar
      visible
      type="multiple"
      defaultValue={['2025-01-01']}
      startDate="2025-01-01"
      endDate="2025-06-31"
      onDayClick={onDayClick}
    />
  )

  const start1 = container.querySelectorAll(
    '.nut-calendar-day-active .nut-calendar-day-day'
  )[0]
  expect(start1.innerHTML).toBe('1')

  const calendarMonthDay = container.querySelectorAll('.nut-calendar-day')[15]
  fireEvent.click(calendarMonthDay)
  expect(onDayClick).toBeCalled()
  const start2 = container.querySelectorAll(
    '.nut-calendar-day-active .nut-calendar-day-day'
  )[1]
  expect(start2.innerHTML).toBe('13')

  const calendarMonthDay2 = container.querySelectorAll('.nut-calendar-day')[16]
  fireEvent.click(calendarMonthDay2)
  expect(onDayClick).toBeCalled()
  const start3 = container.querySelectorAll(
    '.nut-calendar-day-active .nut-calendar-day-day'
  )[2]
  expect(start3.innerHTML).toBe('14')
})

test('range select event when click item', () => {
  const onDayClick = vi.fn()
  const { container } = render(
    <Calendar
      visible
      type="range"
      startDate="2025-01-01"
      endDate="2025-06-31"
      onDayClick={onDayClick}
    />
  )
  const calendarMonthDay = container.querySelectorAll('.nut-calendar-day')[15]
  fireEvent.click(calendarMonthDay)
  expect(onDayClick).toBeCalled()
  const start = container.querySelectorAll(
    '.nut-calendar-day-active .nut-calendar-day-day'
  )[0]
  expect(start.innerHTML).toBe('10')

  const calendarMonthDay2 = container.querySelectorAll('.nut-calendar-day')[20]
  fireEvent.click(calendarMonthDay2)
  expect(onDayClick).toBeCalled()
  const next = container.querySelectorAll(
    '.nut-calendar-day-choose .nut-calendar-day-day'
  )[0]
  expect(next.innerHTML).toBe('11')
})
