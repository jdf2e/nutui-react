export interface CalendarDay {
  day: string | number
  type: string
}

export interface CalendarMonthInfo {
  curData: string[] | string
  title: string
  monthData: CalendarDay[]
  cssHeight?: number
  scrollTop?: number
}

export type CalendarValue = string | string[]

export type CalendarType = 'single' | 'range' | 'multiple' | 'week'

export type CalendarRef = {
  scrollToDate: (date: string) => void
}
