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
