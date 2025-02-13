/**
 * 判断是否为闰年
 * 规则：
 * 1. 能被4整除但不能被100整除，或
 * 2. 能被400整除
 * @param {number} y - 年份
 * @return {Boolse} true|false
 */
export const isLeapYear = (y: number): boolean => {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

/**
 * 返回星期数
 * @return {String}
 */
export const getWhatDay = (
  year: number,
  month: number,
  day: number
): string => {
  const date = new Date(year, month - 1, day) // 月份从0开始
  const dayNames = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  return dayNames[date.getDay()]
}

/**
 * 返回上一个月在当前面板中的天数
 * @return {Number}
 */
export const getMonthPreDay = (year: number, month: number): number => {
  const day = new Date(year, month - 1, 1).getDay() // 月份从0开始
  return day === 0 ? 7 : day // 将周日从0改为7
}

/**
 * 返回月份天数
 * @return {Number}
 */
export const getMonthDays = (year: string, month: string): number => {
  if (/^0/.test(month)) {
    month = month.split('')[1]
  }
  return (
    [
      0,
      31,
      isLeapYear(Number(year)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ] as number[]
  )[month as any]
}

/**
 * 补齐数字位数
 * @return {string}
 */
export const getNumTwoBit = (n: number): string => {
  return n > 9 ? `${n}` : `0${n}`
}

/**
 * 日期对象转成字符串
 * @return {string}
 */
export const date2Str = (date: Date, split: string = '-'): string => {
  const y = date.getFullYear()
  const m = getNumTwoBit(date.getMonth() + 1)
  const d = getNumTwoBit(date.getDate())
  return [y, m, d].join(split)
}

/**
 * 返回日期格式字符串
 * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
 * @return {string} '2014-12-31'
 */
export const getDateString = (offset: number = 0): string => {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return date2Str(date, '-')
}

/**
 * 时间比较
 * @return {Boolean}
 */
export const compareDate = (date1: string, date2: string): boolean => {
  const startTime = new Date(date1.replace('-', '/').replace('-', '/'))
  const endTime = new Date(date2.replace('-', '/').replace('-', '/'))
  return startTime < endTime
}

/**
 * 时间是否相等
 * @return {Boolean}
 */
export const isEqual = (date1: string, date2: string): boolean => {
  const startTime = new Date((date1 || '').replace(/-/g, '/')).getTime()
  const endTime = new Date(date2.replace(/-/g, '/')).getTime()
  return startTime === endTime
}

export const getMonthWeek = (
  year: number,
  month: number,
  date: number,
  firstDayOfWeek = 0
): number => {
  const dateNow = new Date(year, month - 1, date)
  let w = dateNow.getDay() // 星期数
  let remainder = 6 - w
  if (firstDayOfWeek !== 0) {
    w = w === 0 ? 7 : w
    remainder = 7 - w
  }
  return Math.ceil((date + remainder) / 7)
}
export const getYearWeek = (
  year: number,
  month: number,
  date: number,
  firstDayOfWeek = 0
): number => {
  const dateNow = new Date(year, month - 1, date)
  const dateFirst = new Date(year, 0, 1)
  const dataNumber = Math.round(
    (dateNow.valueOf() - dateFirst.valueOf()) / 86400000
  )
  return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7)
}
export const getWeekDate = (
  year: string,
  month: string,
  date: string,
  firstDayOfWeek = 0
): string[] => {
  const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
  const nowTime = dateNow.getTime()
  let day = dateNow.getDay()
  if (firstDayOfWeek === 0) {
    const oneDayTime = 24 * 60 * 60 * 1000
    // 显示周日
    const SundayTime = nowTime - day * oneDayTime // 本周的周日
    // 显示周六
    const SaturdayTime = nowTime + (6 - day) * oneDayTime // 本周的周六
    const sunday = date2Str(new Date(SundayTime))
    const saturday = date2Str(new Date(SaturdayTime))
    return [sunday, saturday]
  }
  day = day === 0 ? 7 : day
  const oneDayTime = 24 * 60 * 60 * 1000
  // 显示周一
  const MondayTime = nowTime - (day - 1) * oneDayTime // 本周的周一
  // 显示周日
  const SundayTime = nowTime + (7 - day) * oneDayTime // 本周的周日
  const monday = date2Str(new Date(MondayTime))
  const sunday = date2Str(new Date(SundayTime))
  return [monday, sunday]
}

export const formatResultDate = (date: string) => {
  const [year, month, day] = [...date.split('-')]
  const formatterDay = getNumTwoBit(Number(day))
  const formatterDate = `${year}-${month}-${day}`
  const dayOfWeek = getWhatDay(Number(year), Number(month), Number(day))
  return [year, month, formatterDay, formatterDate, dayOfWeek]
}

// 获取当前月数据
export const getCurrMonthData = (type: string, year: number, month: number) => {
  if (type === 'prev') {
    month === 1 && (year -= 1)
    month = month === 1 ? 12 : --month
  } else if (type === 'next') {
    month === 12 && (year += 1)
    month = month === 12 ? 1 : ++month
  }
  return [year, getNumTwoBit(month), getMonthDays(String(year), String(month))]
}

// 获取日期状态
export const getDaysStatus = (type: string, year: number, month: number) => {
  let days = getMonthDays(`${year}`, `${month}`)
  // 修复：当某个月的1号是周日时，月份下方会空出来一行
  if (type === 'prev' && days >= 7) {
    days -= 7
  }
  return Array.from(Array(days), (v, k) => {
    return {
      day: k + 1,
      type,
      year,
      month,
    }
  })
}

// 获取上一个月的最后一周天数，填充当月空白
export const getPreMonthDates = (
  type: string,
  year: number,
  month: number,
  firstDayOfWeek: number
) => {
  let preMonth = +month - 1
  let preYear = year
  if (preMonth <= 0) {
    preMonth = 12
    preYear += 1
  }
  let days = getMonthPreDay(+year, +month)
  days -= firstDayOfWeek
  // 修复：当某个月的1号是周日时，月份下方会空出来一行
  if (type === 'prev' && days >= 7) {
    days -= 7
  }

  const preDates = getMonthDays(`${preYear}`, `${preMonth}`)
  const months = Array.from(Array(preDates), (v, k) => {
    return {
      day: k + 1,
      type,
      preYear,
      preMonth,
    }
  })
  return months.slice(preDates - days)
}
