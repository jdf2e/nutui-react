import { Utils } from '@/utils/date'
import { Day, MonthInfo } from './type'

export const splitDate = (date: string) => {
  const split = date.indexOf('-') !== -1 ? '-' : '/'
  return date.split(split)
}

export const isMultiple = (day: string, days: string[]) => {
  if (days.length > 0) {
    return days.some((item: string) => {
      return Utils.isEqual(item, day)
    })
  }
  return false
}

export const isCurrDay = (month: MonthInfo, day: string | number) => {
  const date = `${month.curData[0]}/${month.curData[1]}/${day}`
  return Utils.isEqual(date, Utils.date2Str(new Date(), '/'))
}

export const getCurrDate = (day: Day, month: MonthInfo) => {
  return `${month.curData[0]}/${month.curData[1]}/${Utils.getNumTwoBit(
    +day.day
  )}`
}

export const isStart = (day: string, days: string[]) => {
  return Utils.isEqual(days[0], day)
}

export const isEnd = (day: string, days: string[]) => {
  return Utils.isEqual(days[1], day)
}

// 开始结束时间是否相等
export const isStartAndEnd = (days: string[]) => {
  return days.length >= 2 && Utils.isEqual(days[0], days[1])
}
