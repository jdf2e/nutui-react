import { isEqual, date2Str, getNumTwoBit } from '@/utils/date'
import { CalendarDay, CalendarMonthInfo } from './types'

export const splitDate = (date: string) => {
  const split = date.indexOf('-') !== -1 ? '-' : '/'
  return date.split(split)
}

export const isMultiple = (day: string, days: string[]) => {
  if (days.length > 0) {
    return days.some((item: string) => {
      return isEqual(item, day)
    })
  }
  return false
}

export const isCurrDay = (month: CalendarMonthInfo, day: string | number) => {
  const date = `${month.curData[0]}/${month.curData[1]}/${day}`
  return isEqual(date, date2Str(new Date(), '/'))
}

export const getCurrDate = (day: CalendarDay, month: CalendarMonthInfo) => {
  return `${month.curData[0]}/${month.curData[1]}/${getNumTwoBit(+day.day)}`
}

export const isStart = (day: string, days: string[]) => {
  return isEqual(days[0], day)
}

export const isEnd = (day: string, days: string[]) => {
  return isEqual(days[1], day)
}

// 开始结束时间是否相等
export const isStartAndEnd = (days: string[]) => {
  return days.length >= 2 && isEqual(days[0], days[1])
}

/*
 * 以下用于 view 模式
 */

// 获取当前年月前的月份
export const getPreMonths = (type: string, year: number, month: number) => {
  const preMonth = +month - 1
  const months = Array.from(Array(preMonth), (v, k) => {
    return {
      year,
      month: k + 1,
      yearAndMonth: formatMonth(year, k + 1),
      type,
    }
  })
  return months
}

// 获取当前年月后的月份
export const getMonths = (
  type: string,
  year: number,
  month: number,
  endMonth: number = 12
) => {
  const nextMonth = endMonth - month + 1
  const months = Array.from(Array(nextMonth), (v, k) => {
    return {
      year,
      month: k + month,
      yearAndMonth: formatMonth(year, k + month),
      type,
    }
  })
  return months
}

export const formatMonth = (year: number, month: number) => {
  return `${year}-${String(month).padStart(2, '0')}`
}

export const formatQuarter = (year: number, quarter: number) => {
  return `${year}-Q${quarter}`
}

/**
 * 判断某年某月某日属于哪一个季度
 * @param year 年份
 * @param month 月份（1-12）
 * @param day 日期（1-31）
 * @returns 季度编号（1、2、3、4）
 */
export const getQuarter = (month: number): number => {
  if (month < 1 || month > 12) {
    throw new Error('月份必须在 1 到 12 之间')
  }
  // 计算季度
  const quarter = Math.floor((month - 1) / 3) + 1
  return quarter
}

// 当前年份包含的季度
export const getQuarters = (
  type: string,
  year: number,
  month: number,
  endMonth: number = 12
) => {
  const quarters = []
  // 当前月区间数据所在的季度
  const startIndex = month // 从1开始计算
  const endIndex = endMonth
  for (let index = startIndex; index <= endIndex; index += 3) {
    const quarter = getQuarter(index)
    quarters.push({
      year,
      quarter,
      yearAndQuarter: formatQuarter(year, quarter),
      type,
    })
  }
  return quarters
}

// 当前月之前的在当年的月所在的季度
export const getPreQuarters = (type: string, year: number, month: number) => {
  const quarters = []
  const startIndex = 1 // 从1开始计算
  const endIndex = month - 3 // 当前月份不能算进之前的季度，-3 判断。
  for (let index = startIndex; index <= endIndex; index += 3) {
    const quarter = getQuarter(index)
    quarters.push({
      year,
      quarter,
      yearAndQuarter: formatQuarter(year, quarter),
      type,
    })
  }
  return quarters
}

// 当前月之后的当年内的月所在的季度
export const getNextQuarters = (
  type: string,
  year: number,
  month: number,
  endMonth: number = 12
) => {
  const quarters = []
  const startIndex = month + 3
  const endIndex = endMonth
  for (let index = startIndex; index <= endIndex; index += 3) {
    const quarter = getQuarter(index)
    quarters.push({
      year,
      quarter,
      yearAndQuarter: formatQuarter(year, quarter),
      type,
    })
  }
  return quarters
}
