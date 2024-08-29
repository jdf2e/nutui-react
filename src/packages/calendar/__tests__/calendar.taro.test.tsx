import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Calendar } from '../calendar.taro'

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
describe('calendar-taro', () => {
  execFn(
    'show-title prop',
    Calendar,
    {
      visible: true,
      defaultValue: '2022-03-18',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
    },
    () => {
      const canlendarTitle1 = testUtils.queries.querySelectorAll(
        '.nut-calendar-header .nut-calendar-title'
      )
      expect(canlendarTitle1.length).toBe(1)
    }
  )

  execFn(
    'show-sub-title prop',
    Calendar,
    {
      visible: true,
      showSubTitle: true,
      defaultValue: '2022-03-18',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
    },
    () => {
      const curMonth1 = testUtils.queries.querySelectorAll(
        '.nut-calendar-sub-title'
      )

      expect(curMonth1.length).toBe(1)
    }
  )

  execFn(
    'show-today prop',
    Calendar,
    {
      visible: true,
      showToday: false,
      defaultValue: '2022-03-18',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
    },
    () => {
      const tipCurr = testUtils.queries.querySelectorAll(
        '.nut-calendar-day-info-curr'
      )
      expect(tipCurr.length).toBe(0)
    }
  )
})
