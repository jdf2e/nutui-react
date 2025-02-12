/**
 * 是否为闫年
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
  const date = new Date(`${year}/${month}/${day}`)
  const index = date.getDay()
  const dayNames = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  return dayNames[index]
}

/**
 * 返回上一个月在当前面板中的天数
 * @return {Number}
 */
export const getMonthPreDay = (year: number, month: number): number => {
  const date = new Date(`${year}/${month}/01`)
  let day = date.getDay()
  if (day === 0) {
    day = 7
  }
  return day
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
  n = Number(n)
  return (n > 9 ? '' : '0') + n
}

/**
 * 日期对象转成字符串
 * @return {string}
 */
export const date2Str = (date: Date, split?: string): string => {
  split = split || '-'
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
export const getDay = (i: number): string => {
  i = i || 0
  let date = new Date()
  const diff = i * (1000 * 60 * 60 * 24)
  date = new Date(date.getTime() + diff)
  return date2Str(date)
}

/**
 * 时间比较
 * @return {Boolean}
 */
export const compareDate = (date1: string, date2: string): boolean => {
  const startTime = new Date(date1.replace('-', '/').replace('-', '/'))
  const endTime = new Date(date2.replace('-', '/').replace('-', '/'))
  if (startTime >= endTime) {
    return false
  }
  return true
}

/**
 * 时间是否相等
 * @return {Boolean}
 */
export const isEqual = (date1: string, date2: string): boolean => {
  const startTime = new Date((date1 || '').replace(/-/g, '/')).getTime()
  const endTime = new Date(date2.replace(/-/g, '/')).getTime()
  if (startTime === endTime) {
    return true
  }
  return false
}
export const getMonthWeek = (
  year: string,
  month: string,
  date: string,
  firstDayOfWeek = 0
): number => {
  const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
  let w = dateNow.getDay() // 星期数
  const d = dateNow.getDate()
  let remainder = 6 - w
  if (firstDayOfWeek !== 0) {
    w = w === 0 ? 7 : w
    remainder = 7 - w
  }
  return Math.ceil((d + remainder) / 7)
}
export const getYearWeek = (
  year: string,
  month: string,
  date: string,
  firstDayOfWeek = 0
): number => {
  const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
  const dateFirst = new Date(Number(year), 0, 1)
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
  const days = [...date.split('-')]
  days[2] = getNumTwoBit(Number(days[2]))
  days[3] = `${days[0]}-${days[1]}-${days[2]}`
  days[4] = getWhatDay(+days[0], +days[1], +days[2])
  return days
}

// 获取当前月数据
export const getCurrMonthData = (type: string, year: number, month: number) => {
  switch (type) {
    case 'prev':
      month === 1 && (year -= 1)
      month = month === 1 ? 12 : --month
      break
    case 'next':
      month === 12 && (year += 1)
      month = month === 12 ? 1 : ++month
      break
    default:
      break
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

// 获取当前年月前的月份
export const getPreMonths = (type: string, year: number, month: number) => {
  const preMonth = +month - 1
  const months = Array.from(Array(preMonth), (v, k) => {
    return {
      year,
      month: k + 1,
      type,
    }
  })
  return months
}

// 获取当前年月前的月份
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
      type,
    }
  })
  return months
}

// 获取当前年共有多少周
export const getTotalWeeksInYear = (year: number, firstDayOfWeek?: number) => {
  const weeks = []
  const firstDayOfYear = new Date(year, 0, 1)
  firstDayOfWeek = firstDayOfWeek || firstDayOfYear.getDay()

  console.log('firstDayOfWeek', firstDayOfWeek, firstDayOfYear.getDay())

  // 计算第一周的周一
  const daysUntilFirstMonday = (1 - firstDayOfWeek + 7) % 7
  const firstMonday = new Date(firstDayOfYear)
  firstMonday.setDate(firstMonday.getDate() + daysUntilFirstMonday)

  // 计算最后一天
  const lastDayOfYear = new Date(year, 11, 31)
  const lastDayOfWeek = lastDayOfYear.getDay()

  // 计算最后一个周的周一
  const lastMonday = new Date(lastDayOfYear)
  if (lastDayOfWeek !== 1) {
    const daysUntilLastMonday = (1 - lastDayOfWeek + 7) % 7
    lastMonday.setDate(lastMonday.getDate() - daysUntilLastMonday)
  }

  // 计算每一周的起止时间
  const currentMonday = new Date(firstMonday)
  while (currentMonday <= lastMonday) {
    const startOfWeek = new Date(currentMonday)
    const endOfWeek = new Date(currentMonday)
    endOfWeek.setDate(endOfWeek.getDate() + 6) // 结束日期是周一加6天

    weeks.push({
      start: startOfWeek,
      end: endOfWeek,
    })

    // 移动到下一周的周一
    currentMonday.setDate(currentMonday.getDate() + 7)
  }

  return weeks
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
