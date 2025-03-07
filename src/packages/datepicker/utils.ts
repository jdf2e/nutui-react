import { padZero } from '@/utils/pad-zero'
import { isDate } from '@/utils/is-date'
import {
  PickerOption,
  PickerOptions,
  PickerValue,
} from '@/packages/pickerview/types'

/**
 * 获取指定年份和月份的最后一天
 * @param year - 年份
 * @param month - 月份（1 到 12）
 * @returns 返回该月份的最后一天
 */
export function getLastDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

/**
 * 根据类型和日期值，计算并返回日期边界值（年、月、日、时、分、秒）
 * @param type 边界类型：'min' 表示最小值，'max' 表示最大值
 * @param value 传入的日期值
 * @param startDate 传入的开始时间
 * @param endDate 传入的结束时间
 * @returns 返回包含边界值的对象
 */
export const calculateDateBoundary = (
  type: 'min' | 'max',
  value: Date,
  startDate: Date,
  endDate: Date
) => {
  const boundary = type === 'min' ? startDate : endDate
  const year = boundary.getFullYear()
  const isMax = type === 'max'
  let month = isMax ? 12 : 1
  let date = isMax
    ? getLastDayOfMonth(value.getFullYear(), value.getMonth() + 1)
    : 1
  let hour = isMax ? 23 : 0
  let minute = isMax ? 59 : 0

  if (value.getFullYear() === year) {
    month = boundary.getMonth() + 1

    if (value.getMonth() + 1 === month) {
      date = boundary.getDate()

      if (value.getDate() === date) {
        hour = boundary.getHours()

        if (value.getHours() === hour) {
          minute = boundary.getMinutes()
        }
      }
    }
  }

  // 返回边界值的对象
  return {
    [`${type}Year`]: year,
    [`${type}Month`]: month,
    [`${type}Date`]: date,
    [`${type}Hour`]: hour,
    [`${type}Minute`]: minute,
    [`${type}Seconds`]: minute, // 返回秒数（与分钟相同）
  }
}

/**
 * 根据选中的日期和类型，生成日期选择器的范围配置
 * @returns {Array} 返回日期选择器的范围配置数组
 */
export const generateDatePickerRanges = (
  type: string,
  selectedDate: number,
  startDate: Date,
  endDate: Date
) => {
  const selected = new Date(selectedDate)
  if (!selected) return []

  // 获取最大和最小边界值
  const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } =
    calculateDateBoundary('max', selected, startDate, endDate)
  const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } =
    calculateDateBoundary('min', selected, startDate, endDate)

  const fullRanges = [
    { type: 'year', range: [minYear, maxYear] },
    { type: 'month', range: [minMonth, maxMonth] },
    { type: 'day', range: [minDate, maxDate] },
    { type: 'hour', range: [minHour, maxHour] },
    { type: 'minute', range: [minMinute, maxMinute] },
    { type: 'seconds', range: [minSeconds, maxSeconds] },
  ]

  // 根据类型返回对应的范围配置
  switch (type.toLocaleLowerCase()) {
    case 'date':
      return fullRanges.slice(0, 3)
    case 'datetime':
      return fullRanges.slice(0, 5)
    case 'time':
      return fullRanges.slice(3, 6)
    case 'year-month':
      return fullRanges.slice(0, 2)
    case 'hour-minutes':
      return fullRanges.slice(3, 5)
    case 'month-day':
      return fullRanges.slice(1, 3)
    case 'datehour':
      return fullRanges.slice(0, 4)
    default:
      return fullRanges
  }
}

/**
 * 根据类型获取日期对象中对应的值
 * @param type 需要获取的日期部分（如 'year', 'month', 'day' 等）
 * @param selectedDate 选中的日期时间戳
 * @returns 返回日期对象中对应部分的值，如果类型无效或日期无效，返回 0
 */
export const getDatePartValue = (
  type: string,
  selectedDate: number
): number => {
  const date = new Date(selectedDate)

  if (!selectedDate) return 0

  switch (type) {
    case 'year':
      return date.getFullYear()
    case 'month':
      return date.getMonth() + 1
    case 'day':
      return date.getDate()
    case 'hour':
      return date.getHours()
    case 'minute':
      return date.getMinutes()
    case 'seconds':
      return date.getSeconds()
    default:
      return 0
  }
}

/**
 * 生成 Picker 的列数据，并触发回调函数返回选中索引
 * @param min 最小值
 * @param max 最大值
 * @param currentValue 当前选中的值
 * @param type 列的类型（如 'year', 'month', 'minute' 等）
 * @param minuteStep 分钟步长（仅当类型为 'minute' 时生效）
 * @param callback 回调函数，用于返回选中索引
 * @returns 返回生成的 Picker 列数据
 */
export const generatePickerColumnWithCallback = (
  min: number,
  max: number,
  currentValue: number | string,
  type: string,
  minuteStep: number,
  callback: (selectedIndex: number, options: PickerOptions) => void,
  showChinese: boolean,
  zhCNType: { [key: string]: string },
  formatter?: (type: string, option: PickerOption) => PickerOption
): PickerOptions => {
  let currentMin = min
  const options: PickerOptions = []
  let selectedIndex = 0

  // 遍历从最小值到最大值的范围
  while (currentMin <= max) {
    // 将当前值格式化为 PickerOption 并添加到数组中
    options.push(
      formatPickerOption(type, currentMin, showChinese, zhCNType, formatter)
    )

    // 根据类型决定步长：如果是分钟，使用 minuteStep，否则步长为 1
    if (type === 'minute') {
      currentMin += minuteStep
    } else {
      currentMin++
    }

    // 如果当前值小于等于选中的值，更新选中索引
    if (currentMin <= Number(currentValue)) {
      selectedIndex++
    }
  }

  callback(selectedIndex, options)

  return options
}

/**
 * 格式化 Picker 选项
 * @param type 选项类型（如 'year', 'month', 'minute' 等）
 * @param value 选项的值
 * @param showChinese 是否显示中文文本
 * @param zhCNType 中文文本映射对象
 * @param formatter 自定义格式化函数
 * @returns 返回格式化后的 Picker 选项
 */
export const formatPickerOption = (
  type: string,
  value: string | number,
  showChinese: boolean,
  zhCNType: { [key: string]: string },
  formatter?: (type: string, option: PickerOption) => PickerOption
): PickerOption => {
  if (formatter) {
    return formatter(type, {
      label: padZero(value, 2),
      value: padZero(value, 2),
    })
  }

  const paddedValue = padZero(value, 2)

  const chineseText = showChinese ? zhCNType[type] : ''

  return {
    label: paddedValue + chineseText,
    value: paddedValue,
  }
}

/**
 * 格式化日期值，确保其在 startDate 和 endDate 之间
 */
export const formatValue = (
  value: Date | null,
  startDate: Date,
  endDate: Date
) => {
  if (!value || (value && !isDate(value))) {
    value = startDate
  }
  return Math.min(
    Math.max(value.getTime(), startDate.getTime()),
    endDate.getTime()
  )
}

/**
 * 处理 Picker 值变化的逻辑
 * @param selectedOptions 选中的选项数组
 * @param selectedValue 选中的值数组
 * @param index 当前列的索引
 */
export const handlePickerValueChange = (
  selectedOptions: PickerOptions,
  selectedValue: PickerValue[],
  index: number,
  type: string,
  defaultDate: Date,
  handleDateComparison: (
    newDate: Date | null,
    selectedOptions: PickerOptions,
    index: number
  ) => void
) => {
  const rangeType = type.toLocaleLowerCase()

  if (
    ['date', 'datetime', 'datehour', 'month-day', 'year-month'].includes(
      rangeType
    )
  ) {
    const formattedDate: PickerValue[] = []

    selectedValue.forEach((item) => {
      formattedDate.push(item)
    })

    if (rangeType === 'month-day' && formattedDate.length < 3) {
      formattedDate.unshift(new Date(defaultDate).getFullYear())
    }

    if (rangeType === 'year-month' && formattedDate.length < 3) {
      formattedDate.push(new Date(defaultDate).getDate())
    }

    const year = Number(formattedDate[0])
    const month = Number(formattedDate[1]) - 1
    const day = Math.min(
      Number(formattedDate[2]),
      getLastDayOfMonth(year, month + 1)
    )

    let date: Date | null = null

    if (
      rangeType === 'date' ||
      rangeType === 'month-day' ||
      rangeType === 'year-month'
    ) {
      date = new Date(year, month, day)
    } else if (rangeType === 'datetime') {
      date = new Date(
        year,
        month,
        day,
        Number(formattedDate[3]),
        Number(formattedDate[4])
      )
    } else if (rangeType === 'datehour') {
      date = new Date(year, month, day, Number(formattedDate[3]))
    }

    handleDateComparison(date, selectedOptions, index)
  } else {
    const [hour, minute, seconds] = selectedValue
    const currentDate = new Date(defaultDate)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDate()

    const date = new Date(
      year,
      month,
      day,
      Number(hour),
      Number(minute),
      rangeType === 'time' ? Number(seconds) : 0
    )

    handleDateComparison(date, selectedOptions, index)
  }
}
