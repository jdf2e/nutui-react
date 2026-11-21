import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CalendarDay, CalendarRef } from '@/types'
import { getPreMonthDates } from '@/utils/date'
import {
  splitDate,
  isMultiple,
  isCurrDay,
  getCurrDate,
  isStart,
  isEnd,
  isStartAndEnd,
} from '../utils'

import { Calendar } from '../calendar'

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

  const renderDay = (date: CalendarDay) => {
    return <span>custom{date.day}</span>
  }

  const renderDayBottom = (date: CalendarDay) => {
    return <span>{Number(date.day) <= 10 ? '上旬' : '下旬'}</span>
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
  const onDayClick = vi.fn()
  const { container } = render(
    <Calendar
      visible
      defaultValue="2022-03-18"
      startDate="2022-01-01"
      endDate="2022-12-31"
      onDayClick={onDayClick}
    />
  )

  const calendarMonthDay = container.querySelectorAll('.nut-calendar-day')[15]

  fireEvent.click(calendarMonthDay)
  expect(onDayClick).toBeCalled()
})

test('choose event when click item', async () => {
  const onConfirm = vi.fn()
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

test('December padding days of a January month should pass year - 1 (#3580)', () => {
  // 1. 直接验证 getPreMonthDates 跨年与非跨年边界计算
  const jan2025Prev = getPreMonthDates('prev', 2025, 1, 0)
  expect(jan2025Prev).toEqual([
    { day: 29, type: 'prev', year: 2024, month: 12 },
    { day: 30, type: 'prev', year: 2024, month: 12 },
    { day: 31, type: 'prev', year: 2024, month: 12 },
  ])

  const feb2025Prev = getPreMonthDates('prev', 2025, 2, 0)
  expect(feb2025Prev).toEqual([
    { day: 26, type: 'prev', year: 2025, month: 1 },
    { day: 27, type: 'prev', year: 2025, month: 1 },
    { day: 28, type: 'prev', year: 2025, month: 1 },
    { day: 29, type: 'prev', year: 2025, month: 1 },
    { day: 30, type: 'prev', year: 2025, month: 1 },
    { day: 31, type: 'prev', year: 2025, month: 1 },
  ])

  // 2. 验证通过 Calendar 组件渲染时传给 renderDay / renderDayTop / renderDayBottom 的 CalendarDay 对象
  const prevDaysFromDay: string[] = []
  const prevDaysFromTop: string[] = []
  const prevDaysFromBottom: string[] = []

  render(
    <Calendar
      visible
      popup={false}
      defaultValue="2025-01-15"
      startDate="2025-01-01"
      endDate="2025-02-28"
      renderDay={(d: CalendarDay) => {
        if (d.type === 'prev') {
          prevDaysFromDay.push(`${d.year}-${d.month}-${d.day}`)
        }
        return d.day
      }}
      renderDayTop={(d: CalendarDay) => {
        if (d.type === 'prev') {
          prevDaysFromTop.push(`${d.year}-${d.month}-${d.day}`)
        }
        return ''
      }}
      renderDayBottom={(d: CalendarDay) => {
        if (d.type === 'prev') {
          prevDaysFromBottom.push(`${d.year}-${d.month}-${d.day}`)
        }
        return (
          <span>
            {d.year}-{d.month}
          </span>
        )
      }}
    />
  )

  expect(prevDaysFromDay.slice(0, 3)).toEqual([
    '2024-12-29',
    '2024-12-30',
    '2024-12-31',
  ])
  expect(prevDaysFromDay.slice(3)).toEqual([
    '2025-1-26',
    '2025-1-27',
    '2025-1-28',
    '2025-1-29',
    '2025-1-30',
    '2025-1-31',
  ])
  expect(prevDaysFromTop.slice(0, 3)).toEqual([
    '2024-12-29',
    '2024-12-30',
    '2024-12-31',
  ])
  expect(prevDaysFromBottom.slice(0, 3)).toEqual([
    '2024-12-29',
    '2024-12-30',
    '2024-12-31',
  ])
})

test('calendar utils and ref methods coverage', () => {
  expect(splitDate('2025-01-15')).toEqual(['2025', '01', '15'])
  expect(splitDate('2025/01/15')).toEqual(['2025', '01', '15'])
  expect(isMultiple('2025-01-15', ['2025-01-15', '2025-01-16'])).toBe(true)
  expect(isMultiple('2025-01-18', ['2025-01-15'])).toBe(false)
  expect(isMultiple('2025-01-18', [])).toBe(false)
  expect(isStart('2025-01-15', ['2025-01-15', '2025-01-20'])).toBe(true)
  expect(isEnd('2025-01-20', ['2025-01-15', '2025-01-20'])).toBe(true)
  expect(isStartAndEnd(['2025-01-15', '2025-01-15'])).toBe(true)
  expect(isStartAndEnd(['2025-01-15', '2025-01-20'])).toBe(false)

  const monthInfo = {
    curData: ['2025', '01', '15'],
    title: '2025-01',
    monthData: [],
    cssHeight: 350,
    scrollTop: 0,
  }
  expect(getCurrDate({ day: 5, type: 'active' }, monthInfo)).toBe('2025/01/05')
  expect(isCurrDay(monthInfo, '01')).toBe(false)

  const onClose = vi.fn()
  const ref = React.createRef<CalendarRef>()
  const { container } = render(
    <Calendar
      ref={ref}
      visible
      type="range"
      defaultValue={['2025-01-10', '2025-01-20']}
      startDate="2025-01-01"
      endDate="2025-03-31"
      onClose={onClose}
    />
  )

  ref.current?.scrollToDate('2025-02-01')

  const closeBtn = container.querySelector('.nut-popup-title-right')
  if (closeBtn) {
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
  }
})
