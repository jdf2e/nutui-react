import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { CalendarCard } from '../calendarcard.taro'

const testUtils = new TestUtils()
const execFn = (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    cb()
    testUtils.unmout()
  })
}

describe('calendarcard-taro', () => {
  execFn(
    'test defaultValue render',
    CalendarCard,
    {
      defaultValue: new Date('2023-01-25'),
    },
    () => {
      const activeDay = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-day.current.active .nut-calendarcard-day-inner'
      )
      expect(activeDay.length).toBe(1)
      expect(activeDay[0].innerHTML).toBe('25')
      // prev
      const prevDays = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-day.prev'
      )
      expect(prevDays.length).toBe(0)

      // next
      const nextDays = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-day.next'
      )
      expect(nextDays.length).toBe(11)

      // current
      const currentDays = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-day.current'
      )
      expect(currentDays.length).toBe(42 - 0 - 11)
    }
  )
  execFn(
    'test startDate & endDate',
    CalendarCard,
    {
      defaultValue: new Date('2023-01-24'),
      startDate: new Date('2022-12-01'),
      endDate: new Date('2023-03-01'),
    },
    () => {
      const title1 = testUtils.queries.querySelector(
        '.nut-calendarcard-header-title'
      )
      expect(title1?.innerHTML).toBe('2023年01月')

      const left = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-header .left'
      )
      const doubleRight = testUtils.queries.querySelectorAll(
        '.nut-calendarcard-header .double-right'
      )
    }
  )
})
