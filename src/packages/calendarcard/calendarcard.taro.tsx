import React, { useState, useEffect, ReactNode } from 'react'
import classNames from 'classnames'
import { ArrowLeft, ArrowRight, DoubleLeft, DoubleRight } from './icon.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  convertDateToDay,
  convertDayToDate,
  getCurrentMonthDays,
  getCurrentWeekDays,
  getPrevMonthDays,
} from './utils'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import type {
  CalendarCardDay,
  CalendarCardMonth,
  CalendarCardRef,
  CalendarCardValue,
} from './types'
import { usePropsValue } from '@/utils/use-props-value'

export interface CalendarCardProps extends BasicComponent {
  // 日视图-选择一个日期 | 日视图-选择多个日期 | 日视图-选择范围 | 周视图-选择某一周
  type: 'single' | 'multiple' | 'range' | 'week'
  value?: CalendarCardValue
  defaultValue?: CalendarCardValue
  firstDayOfWeek?: number // 0-6
  startDate?: Date
  endDate?: Date
  disableDay?: (day: CalendarCardDay) => boolean
  renderDay?: (day: CalendarCardDay) => ReactNode
  renderDayTop?: (day: CalendarCardDay) => ReactNode
  renderDayBottom?: (day: CalendarCardDay) => ReactNode
  onDayClick?: (day: CalendarCardDay) => void
  onPageChange: (data: CalendarCardMonth) => void
  onChange: (value: CalendarCardValue) => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  firstDayOfWeek: 0,
}

const prefixCls = 'nut-calendarcard'

export const CalendarCard = React.forwardRef<
  CalendarCardRef,
  Partial<CalendarCardProps>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    type,
    value,
    defaultValue,
    firstDayOfWeek,
    startDate,
    endDate,
    disableDay,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onDayClick,
    onPageChange,
    onChange,
  } = { ...defaultProps, ...props }

  // 当前月份信息
  const [month, setMonth] = useState<CalendarCardMonth>(() => {
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
  const [days, setDays] = useState<CalendarCardDay[]>([])

  const valueToRange = (val?: CalendarCardValue) => {
    if (Array.isArray(val)) {
      return val.map((date: Date) => {
        return convertDateToDay(date)
      })
    }
    return val ? [convertDateToDay(val)] : []
  }

  const rangeTovalue = (range?: CalendarCardDay[]) => {
    if (Array.isArray(range)) {
      return range.map((day: CalendarCardDay) => {
        return convertDayToDate(day)
      })
    }
    return range ? [convertDayToDate(range)] : []
  }

  const [innerValue, setInnerValue] = usePropsValue<CalendarCardDay[]>({
    value: value ? (valueToRange(value) as CalendarCardDay[]) : undefined,
    defaultValue: defaultValue
      ? (valueToRange(defaultValue) as CalendarCardDay[])
      : undefined,
    finalValue: [],
  })

  const change = (v: CalendarCardDay[]) => {
    setInnerValue(v)
    if (type === 'single') {
      const date = convertDayToDate(v[0])
      onChange?.(date)
    } else if (type === 'multiple' || type === 'range' || type === 'week') {
      const val = rangeTovalue(v) as CalendarCardValue
      onChange?.(val)
    }
  }

  const getDays = (month: CalendarCardMonth) => {
    const y = month.year
    const m = month.month
    const days = [
      ...getPrevMonthDays(y, m, firstDayOfWeek),
      ...getCurrentMonthDays(y, m),
    ] as CalendarCardDay[]
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

  const isSameDay = (day1: CalendarCardDay, day2: CalendarCardDay) => {
    return (
      day1?.year === day2?.year &&
      day1?.month === day2?.month &&
      day1?.date === day2?.date
    )
  }

  const compareDay = (day1: CalendarCardDay, day2: CalendarCardDay) => {
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

  const isDisable = (day: CalendarCardDay) => {
    if (disableDay && disableDay(day)) {
      return true
    }
    if (
      startDate &&
      Number(compareDay(day, convertDateToDay(startDate) as CalendarCardDay)) <
        0
    ) {
      return true
    }
    if (
      endDate &&
      Number(compareDay(day, convertDateToDay(endDate) as CalendarCardDay)) > 0
    ) {
      return true
    }
    return false
  }

  const isActive = (day: CalendarCardDay) => {
    if (type === 'single' || type === 'multiple') {
      for (const val in innerValue) {
        if (isSameDay(day, innerValue[val])) {
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

  const isStart = (day: CalendarCardDay) => {
    return (
      (type === 'range' || type === 'week') &&
      innerValue.length === 2 &&
      isSameDay(day, innerValue[0])
    )
  }

  const isEnd = (day: CalendarCardDay) => {
    return (
      (type === 'range' || type === 'week') &&
      innerValue.length === 2 &&
      isSameDay(day, innerValue[1])
    )
  }

  const isMid = (day: CalendarCardDay) => {
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

  const isWeekend = (day: CalendarCardDay) => {
    const d = new Date(day.year, day.month - 1, day.date).getDay()
    return d === 0 || d === 6
  }

  const getClasses = (day: CalendarCardDay) => {
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
      if (isWeekend(day)) {
        res.push('weekend')
      }
    }
    return res
  }

  const jumpTo = (year: number, month: number) => {
    if (startDate) {
      const c = compareDay(
        {
          year,
          month,
          date: 31,
        },
        convertDateToDay(startDate) as CalendarCardDay
      )
      if (c && c < 0) {
        return
      }
    }
    if (endDate) {
      const c = compareDay(
        {
          year,
          month,
          date: 1,
        },
        convertDateToDay(endDate) as CalendarCardDay
      )
      if (c && c > 0) {
        return
      }
    }
    setMonth({ year, month })
  }

  const jump = (step = 1) => {
    const current = month.year * 12 + month.month
    let newMonth = (current + step) % 12
    if (newMonth === 0) {
      newMonth = 12
    }
    const newYear = Math.floor((current + step - newMonth) / 12)
    jumpTo(newYear, newMonth)
  }

  React.useImperativeHandle(ref, () => {
    return {
      jump,
      jumpTo,
    }
  })

  const handleDayClick = (day: CalendarCardDay) => {
    onDayClick?.(day)
    if (day.type === 'prev' || day.type === 'next' || isDisable(day)) {
      return
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
          if (t === null || t === undefined) {
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
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-header-left`}>
          <div className="double-left" onClick={() => jump(-12)}>
            <DoubleLeft />
          </div>
          <div className="left" onClick={() => jump(-1)}>
            <ArrowLeft />
          </div>
        </div>
        <div className={`${prefixCls}-header-title`}>
          {monthTitle(month.year, month.month)}
        </div>
        <div className={`${prefixCls}-header-right`}>
          <div className="right" onClick={() => jump(1)}>
            <ArrowRight />
          </div>
          <div className="double-right" onClick={() => jump(12)}>
            <DoubleRight />
          </div>
        </div>
      </div>
    )
  }

  const [weekHeader] = useState(() => {
    const weekdays = locale.calendaritem.weekdays.map((day, index) => {
      return {
        name: day,
        key: index,
      }
    })
    return [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek),
    ]
  })

  const renderContent = () => {
    return (
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-days`}>
          {weekHeader.map((day) => {
            return (
              <div
                className={classNames(`${prefixCls}-day`, 'header', {
                  weekend: day.key === 0 || day.key === 6,
                })}
                key={day.key}
              >
                {day.name}
              </div>
            )
          })}
        </div>
        <div className={`${prefixCls}-days`}>
          {days.map((day: CalendarCardDay) => (
            <div
              className={classNames(
                `${prefixCls}-day`,
                day.type,
                getClasses(day)
              )}
              key={`${day.year}-${day.month}-${day.date}`}
              onClick={() => handleDayClick(day)}
            >
              <div className={`${prefixCls}-day-top`}>
                {renderDayTop ? renderDayTop(day) : ''}
              </div>
              <div className={`${prefixCls}-day-inner`}>
                {renderDay ? renderDay(day) : day.date}
              </div>
              <div className={`${prefixCls}-day-bottom`}>
                {renderDayBottom ? renderDayBottom(day) : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return days.length > 0 ? (
    <div className={classNames(prefixCls, className)} style={style}>
      {renderHeader()}
      {renderContent()}
    </div>
  ) : null
})

CalendarCard.displayName = 'NutCalendarCard'
