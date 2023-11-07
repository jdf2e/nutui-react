export const Utils = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear(y: number): boolean {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
  },

  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay(year: number, month: number, day: number): string {
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
  },

  /**
   * 返回上一个月在当前面板中的天数
   * @return {Number}
   */
  getMonthPreDay(year: number, month: number): number {
    const date = new Date(`${year}/${month}/01`)
    let day = date.getDay()
    if (day === 0) {
      day = 7
    }
    return day
  },

  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays(year: string, month: string): number {
    if (/^0/.test(month)) {
      month = month.split('')[1]
    }
    return (
      [
        0,
        31,
        this.isLeapYear(Number(year)) ? 29 : 28,
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
  },

  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit(n: number): string {
    n = Number(n)
    return (n > 9 ? '' : '0') + n
  },

  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str(date: Date, split?: string): string {
    split = split || '-'
    const y = date.getFullYear()
    const m = this.getNumTwoBit(date.getMonth() + 1)
    const d = this.getNumTwoBit(date.getDate())
    return [y, m, d].join(split)
  },

  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay(i: number): string {
    i = i || 0
    let date = new Date()
    const diff = i * (1000 * 60 * 60 * 24)
    date = new Date(date.getTime() + diff)
    return this.date2Str(date)
  },

  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate(date1: string, date2: string): boolean {
    const startTime = new Date(date1.replace('-', '/').replace('-', '/'))
    const endTime = new Date(date2.replace('-', '/').replace('-', '/'))
    if (startTime >= endTime) {
      return false
    }
    return true
  },

  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual(date1: string, date2: string): boolean {
    const startTime = new Date((date1 || '').replace(/-/g, '/')).getTime()
    const endTime = new Date(date2.replace(/-/g, '/')).getTime()
    if (startTime === endTime) {
      return true
    }
    return false
  },
  getMonthWeek(
    year: string,
    month: string,
    date: string,
    firstDayOfWeek = 0
  ): number {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
    let w = dateNow.getDay() // 星期数
    const d = dateNow.getDate()
    let remainder = 6 - w
    if (firstDayOfWeek !== 0) {
      w = w === 0 ? 7 : w
      remainder = 7 - w
    }
    return Math.ceil((d + remainder) / 7)
  },
  getYearWeek(
    year: string,
    month: string,
    date: string,
    firstDayOfWeek = 0
  ): number {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
    const dateFirst = new Date(Number(year), 0, 1)
    const dataNumber = Math.round(
      (dateNow.valueOf() - dateFirst.valueOf()) / 86400000
    )
    return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7)
  },
  getWeekDate(
    year: string,
    month: string,
    date: string,
    firstDayOfWeek = 0
  ): string[] {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date))
    const nowTime = dateNow.getTime()
    let day = dateNow.getDay()
    if (firstDayOfWeek === 0) {
      const oneDayTime = 24 * 60 * 60 * 1000
      // 显示周日
      const SundayTime = nowTime - day * oneDayTime // 本周的周日
      // 显示周六
      const SaturdayTime = nowTime + (6 - day) * oneDayTime // 本周的周六

      const sunday = this.date2Str(new Date(SundayTime))
      const saturday = this.date2Str(new Date(SaturdayTime))
      return [sunday, saturday]
    }
    day = day === 0 ? 7 : day
    const oneDayTime = 24 * 60 * 60 * 1000
    // 显示周一
    const MondayTime = nowTime - (day - 1) * oneDayTime // 本周的周一
    // 显示周日
    const SundayTime = nowTime + (7 - day) * oneDayTime // 本周的周日

    const monday = this.date2Str(new Date(MondayTime))
    const sunday = this.date2Str(new Date(SundayTime))
    return [monday, sunday]
  },

  formatResultDate(date: string) {
    const days = [...date.split('-')]
    days[2] = Utils.getNumTwoBit(Number(days[2]))
    days[3] = `${days[0]}-${days[1]}-${days[2]}`
    days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2])
    return days
  },
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
  return [
    year,
    Utils.getNumTwoBit(month),
    Utils.getMonthDays(String(year), String(month)),
  ]
}

// 获取日期状态
export const getDaysStatus = (type: string, year: number, month: number) => {
  let days = Utils.getMonthDays(`${year}`, `${month}`)
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
  let days = Utils.getMonthPreDay(+year, +month)
  days -= firstDayOfWeek
  // 修复：当某个月的1号是周日时，月份下方会空出来一行
  if (type === 'prev' && days >= 7) {
    days -= 7
  }

  const preDates = Utils.getMonthDays(`${preYear}`, `${preMonth}`)
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
