import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'

export interface CalendarCardDay {
  // 上个月 | 当月 | 下个月
  type?: 'prev' | 'current' | 'next'
  year: number
  month: number
  date: number
}

export interface CalendarCardMonth {
  year: number
  month: number
}

export type CalendarCardValue = Date | Date[] | null

export type CalendarCardRef = {
  jump: (step: number) => void
  jumpTo: (year: number, month: number) => void
}

export interface BaseCalendarCard extends BaseProps {
  // 日视图-选择一个日期 | 日视图-选择多个日期 | 日视图-选择范围 | 周视图-选择某一周
  type: 'single' | 'multiple' | 'range' | 'week'
  title: ReactNode
  value: CalendarCardValue
  defaultValue: CalendarCardValue
  firstDayOfWeek: number // 0-6
  startDate: Date
  endDate: Date
  disableDay: (day: CalendarCardDay) => boolean
  renderDay: (day: CalendarCardDay) => ReactNode
  renderDayTop: (day: CalendarCardDay) => ReactNode
  renderDayBottom: (day: CalendarCardDay) => ReactNode
  onDayClick: (day: CalendarCardDay) => void
  onPageChange: (data: CalendarCardMonth) => void
  onChange: (value: CalendarCardValue) => void
}
