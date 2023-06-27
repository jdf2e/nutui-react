export interface Day {
  day: string | number
  type: string
}

export interface MonthInfo {
  curData: string[] | string
  title: string
  monthData: Day[]
  cssHeight?: number
  scrollTop?: number
}

export type InputDate = string | string[]

export type SelectedType = 'single' | 'range' | 'multiple' | 'week'
