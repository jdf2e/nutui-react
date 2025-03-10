import { ReactNode } from 'react'
import { SimpleValue } from '../../base/atoms'
import { BaseProps } from '../../base/props'

export interface CalendarDay {
  day: SimpleValue
  type: string
}

export interface CalendarMonthInfo {
  curData: string[] | string
  title: string
  monthData: CalendarDay[]
  cssHeight: number
  scrollTop: number
}

export type CalendarValue = string | string[]

export type CalendarType = 'single' | 'range' | 'multiple' | 'week'

export type CalendarRef = {
  scrollToDate: (date: string) => void
}

export interface BaseCalendar {
  type: CalendarType
  autoBackfill: boolean
  popup: boolean
  visible: boolean
  title: string
  defaultValue: string | string[]
  startDate: string
  endDate: string
  showToday: boolean
  startText: ReactNode
  endText: ReactNode
  confirmText: ReactNode
  showTitle: boolean
  showSubTitle: boolean
  scrollAnimation: boolean
  firstDayOfWeek: number
  closeIcon?: ReactNode
  disableDate: (date: CalendarDay) => boolean
  renderHeaderButtons?: () => string | JSX.Element
  renderBottomButton?: () => string | JSX.Element
  renderDay?: (date: CalendarDay) => string | JSX.Element
  renderDayTop?: (date: CalendarDay) => string | JSX.Element
  renderDayBottom?: (date: CalendarDay) => string | JSX.Element
  onClose: () => void
  onConfirm: (param: string) => void
  onDayClick: (data: string) => void
  onPageChange: (param: string) => void
}

export interface BaseCalendarItem extends BaseProps {
  type: CalendarType
  autoBackfill: boolean
  popup: boolean
  title: string
  value: CalendarValue
  defaultValue: CalendarValue
  startDate: CalendarValue
  endDate: CalendarValue
  showToday: boolean
  startText: ReactNode
  endText: ReactNode
  confirmText: ReactNode
  showTitle: boolean
  showSubTitle: boolean
  scrollAnimation: boolean
  firstDayOfWeek: number
  disableDate: (date: CalendarDay) => boolean
  renderHeaderButtons: () => string | JSX.Element
  renderBottomButton: () => string | JSX.Element
  renderDay: (date: CalendarDay) => string | JSX.Element
  renderDayTop: (date: CalendarDay) => string | JSX.Element
  renderDayBottom: (date: CalendarDay) => string | JSX.Element
  onConfirm: (data: string) => void
  onUpdate: () => void
  onDayClick: (data: string) => void
  onPageChange: (data: any) => void
}
