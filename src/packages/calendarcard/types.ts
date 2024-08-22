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
