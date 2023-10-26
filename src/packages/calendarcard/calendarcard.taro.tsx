import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Left, Right, DoubleLeft, DoubleRight } from './icon.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  convertDateToDay,
  convertDayToDate,
  getCurrentMonthDays,
  getCurrentWeekDays,
  getPrevMonthDays,
} from './utils'
import { useConfig } from '@/packages/configprovider/configprovider'
import { CalendarDay } from './type'

interface CalendarMonth {
  year: number
  month: number
}

export type CalendarValue = Date | Date[] | null

export interface CalendarCardProps extends BasicComponent {
  // 日视图-选择一个日期 | 日视图-选择多个日期 | 日视图-选择范围 | 周视图-选择某一周
  type: 'single' | 'multiple' | 'range' | 'week'
  value?: CalendarValue
  defaultValue?: CalendarValue
  firstDayOfWeek?: number // 0-6
  startDate?: Date
  endDate?: Date
  disableDay?: (day: CalendarDay) => boolean
  renderDay?: (day: CalendarDay) => JSX.Element
  onDayClick?: (day: CalendarDay) => void
  onPageChange: (data: CalendarMonth) => void
  onChange: (value: CalendarValue) => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  firstDayOfWeek: 1,
}

type CalendarCardRef = {
  jump: (step: number) => void
  jumpTo: (year: number, month: number) => void
}

export const CalendarCard = React.forwardRef<
  CalendarCardRef,
  Partial<CalendarCardProps>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    type,
    value,
    defaultValue,
    firstDayOfWeek,
    startDate,
    endDate,
    disableDay,
    renderDay,
    onDayClick,
    onPageChange,
    onChange,
  } = { ...defaultProps, ...props }

  // 当前月份信息
  const [month, setMonth] = useState<CalendarMonth>(() => {
    let date = new Date(Date.now())
    const val = value || defaultValue
    if (Array.isArray(val)) {
      if (val.length) {
        date = val[0]
      }
    } else if (val) {
      date = val
    }
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    }
  })

  // 当前月份对应的日期(6 * 7 视图)
  const [days, setDays] = useState<CalendarDay[]>([])

  const valueToRange = (val?: CalendarValue) => {
    if (Array.isArray(val)) {
      return val.map((date: Date) => {
        return convertDateToDay(date)
      })
    }
    return val ? [convertDateToDay(val)] : []
  }

  const rangeTovalue = (range?: CalendarDay[]) => {
    if (Array.isArray(range)) {
      return range.map((day: CalendarDay) => {
        return convertDayToDate(day)
      })
    }
    return range ? [convertDayToDate(range)] : []
  }

  const [innerValue, setInnerValue] = useState<CalendarDay[]>(() => {
    const val = (
      value || defaultValue ? valueToRange(value || defaultValue) : []
    ) as CalendarDay[]
    return val
  })

  useEffect(() => {
    const val = (
      value || defaultValue ? valueToRange(value || defaultValue) : []
    ) as CalendarDay[]
    setInnerValue(val)
  }, [value])

  const change = (v: CalendarDay[]) => {
    setInnerValue(v)
    if (type === 'single') {
      const date = convertDayToDate(v[0])
      onChange?.(date)
    } else if (type === 'multiple' || type === 'range' || type === 'week') {
      const val = rangeTovalue(v) as CalendarValue
      onChange?.(val)
    }
  }

  const getDays = (month: CalendarMonth) => {
    const y = month.year
    const m = month.month
    const days = [
      ...getPrevMonthDays(y, m, firstDayOfWeek),
      ...getCurrentMonthDays(y, m),
    ] as CalendarDay[]
    const size = days.length
    const yearOfNextMonth = month.month === 12 ? month.year + 1 : month.year
    const monthOfNextMonth = month.month === 12 ? 1 : month.month + 1
    // 补全 6 行 7 列视图
    for (let i = 1; i <= 42 - size; i++) {
      days.push({
        type: 'next',
        year: yearOfNextMonth,
        month: monthOfNextMonth,
        date: i,
      })
    }
    return days
  }

  useEffect(() => {
    const newDays = getDays(month)
    setDays(newDays)
    onPageChange?.(month)
  }, [month])

  const isSameDay = (day1: CalendarDay, day2: CalendarDay) => {
    return (
      day1?.year === day2?.year &&
      day1?.month === day2?.month &&
      day1?.date === day2?.date
    )
  }

  const compareDay = (day1: CalendarDay, day2: CalendarDay) => {
    if (day1 && day2) {
      if (day1.year === day2.year) {
        if (day1.month === day2.month) {
          return day1.date - day2.date
        }
        return day1.month - day2.month
      }
      return day1.year - day2.year
    }
  }

  const isDisable = (day: CalendarDay) => {
    if (disableDay && disableDay(day)) {
      return true
    }
    if (
      startDate &&
      Number(compareDay(day, convertDateToDay(startDate) as CalendarDay)) < 0
    ) {
      return true
    }
    if (
      endDate &&
      Number(compareDay(day, convertDateToDay(endDate) as CalendarDay)) > 0
    ) {
      return true
    }
    return false
  }

  const isActive = (day: CalendarDay) => {
    if (type === 'single' || type === 'multiple') {
      for (const val of innerValue) {
        if (isSameDay(day, val)) {
          return true
        }
      }
    } else if (
      type === 'range' &&
      innerValue.length === 1 &&
      isSameDay(innerValue[0], day)
    ) {
      return true
    }
    return false
  }

  const isStart = (day: CalendarDay) => {
    return (
      (type === 'range' || type === 'week') &&
      innerValue.length === 2 &&
      isSameDay(day, innerValue[0])
    )
  }

  const isEnd = (day: CalendarDay) => {
    return (
      (type === 'range' || type === 'week') &&
      innerValue.length === 2 &&
      isSameDay(day, innerValue[1])
    )
  }

  const isMid = (day: CalendarDay) => {
    if (type === 'range' || type === 'week') {
      if (innerValue.length === 2) {
        const c1 = compareDay(innerValue[0], day)
        const c2 = compareDay(day, innerValue[1])
        if (c1 && c1 < 0 && c2 && c2 < 0) {
          return true
        }
      }
    }
    return false
  }

  const getClasses = (day: CalendarDay) => {
    /**
     * active: single、multiple 激活日期
     * start: 范围开始日期
     * end: 范围结束日期
     * mid: 范围中间日期
     */
    if (isDisable(day)) {
      return ['disabled']
    }
    const res = []
    if (day.type === 'current') {
      if (isActive(day)) {
        res.push('active')
      }
      if (isStart(day)) {
        res.push('start')
      }
      if (isEnd(day)) {
        res.push('end')
      }
      if (isMid(day)) {
        res.push('mid')
      }
    }
    return res
  }

  const jumpTo = (year: number, month: number) => {
    setMonth({ year, month })
  }

  const jump = (step = 1) => {
    const current = month.year * 12 + month.month
    let newMonth = (current + step) % 12
    if (newMonth === 0) {
      newMonth = 12
    }
    const newYear = Math.floor((current + step - newMonth) / 12)
    setMonth({
      year: newYear,
      month: newMonth,
    })
  }

  React.useImperativeHandle(ref, () => {
    return {
      jump,
      jumpTo,
    }
  })

  const handleDayClick = (day: CalendarDay) => {
    if (isDisable(day)) {
      return
    }
    onDayClick?.(day)
    if (day.type === 'prev') {
      jump(-1)
    } else if (day.type === 'next') {
      jump(1)
    }
    switch (type) {
      case 'single': {
        if (innerValue[0] && isSameDay(innerValue[0], day)) {
          change([])
        } else {
          change([day])
        }
        break
      }
      case 'multiple': {
        const t = innerValue.find((i) => isSameDay(i, day))
        if (t) {
          change(innerValue.filter((i) => i !== t))
        } else {
          change([...innerValue, day])
        }
        break
      }
      case 'range': {
        const len = innerValue.length
        if (len === 0 || len === 2) {
          change([day])
        } else if (len === 1) {
          const t = compareDay(innerValue[0], day)
          if (t === 0 || t === null || t === undefined) {
            change([])
          } else if (t < 0) {
            change([innerValue[0], day])
          } else {
            change([day, innerValue[0]])
          }
        } else {
          console.warn('[NutUI] Calendar range error')
        }
        break
      }
      case 'week': {
        if (innerValue.length === 2 || innerValue.length === 0) {
          const [left, right] = getCurrentWeekDays(day, firstDayOfWeek)
          change([left, right])
        } else {
          console.warn('[NutUI] Calendar week error')
        }
        break
      }
      default: {
        console.warn('[NutUI] Calendar type error')
      }
    }
  }

  const monthTitle = locale.calendaritem.monthTitle

  const renderHeader = () => {
    return (
      <div className="nut-calendarcard__header">
        <div className="nut-calendarcard__header-left">
          <div className="double-left" onClick={() => jump(-12)}>
            <DoubleLeft />
          </div>
          <div className="left" onClick={() => jump(-1)}>
            <Left />
          </div>
        </div>
        <div className="nut-calendarcard__header-title">
          {monthTitle(month.year, month.month)}
        </div>
        <div className="nut-calendarcard__header-right">
          <div className="right" onClick={() => jump(1)}>
            <Right />
          </div>
          <div className="double-right" onClick={() => jump(12)}>
            <DoubleRight />
          </div>
        </div>
      </div>
    )
  }

  const [weekHeader] = useState(() => {
    const weekdays = locale.calendaritem.weekdays
    return [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek),
    ]
  })

  const renderContent = () => {
    return (
      <div className="nut-calendarcard__content">
        <div className="nut-calendarcard-days">
          {weekHeader.map((i) => {
            return (
              <div className="nut-calendarcard-day" key={i}>
                {i}
              </div>
            )
          })}
        </div>
        <div className="nut-calendarcard-days">
          {days.map((day: CalendarDay) => (
            <div
              className={classNames(
                'nut-calendarcard-day',
                day.type,
                getClasses(day)
              )}
              key={`${day.year}-${day.month}-${day.date}`}
              onClick={() => handleDayClick(day)}
            >
              <div className="nut-calendarcard-day-inner">
                {renderDay ? renderDay(day) : day.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="nut-calendarcard" style={style}>
        {renderHeader()}
        {renderContent()}
      </div>
    </>
  )
})

CalendarCard.defaultProps = defaultProps as CalendarCardProps
CalendarCard.displayName = 'NutCalendarCard'
