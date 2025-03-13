export interface CalendarDay {
  day: string | number
  type: string
}

export interface CalendarMonth {
  year: number
  month: number
  yearAndMonth?: string
  type?: string
}

export interface CalendarQuarter {
  year: number
  quarter: number
  yearAndQuarter?: string
  type?: string
}

export interface CalendarMonthInfo {
  curData: string[] | string
  title: string
  monthData: CalendarDay[]
  weekNo?: string[]
  cssHeight?: number
  scrollTop?: number
}

export type CalendarValue = string | string[]

export type CalendarType = 'single' | 'range' | 'multiple' | 'week'

export type CalendarRef = {
  scrollToDate: (date: string) => void
}

export type CalendarMonthInfoOfPanel = {
  year: number
  months: CalendarMonth[]
  cssHeight: number
  scrollTop: number
  currYear: boolean
}

export type CalendarQuarterInfoOfPanel = {
  year: number
  quarters: CalendarQuarter[]
  cssHeight: number
  scrollTop: number
  currYear: boolean
}
