export interface CalendarCardDay {
  // 上个月 | 当月 | 下个月
  type?: 'prev' | 'current' | 'next'
  year: number
  month: number
  date: number
}
