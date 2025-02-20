import { padZero } from '@/utils/pad-zero'
import { isDate } from '@/utils/is-date'
import { PickerOption } from '../picker/types'
import { PickerValue } from '../pickerview/types'

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
  // 根据类型选择边界日期：'min' 使用 startDate，'max' 使用 endDate
  const boundary = type === 'min' ? startDate : endDate

  // 获取边界日期的年份
  const year = boundary.getFullYear()

  // 初始化月份、日期、小时和分钟
  const isMax = type === 'max' // 是否为 'max' 类型
  let month = isMax ? 12 : 1 // 'max' 时月份为 12，否则为 1
  let date = isMax
    ? getLastDayOfMonth(value.getFullYear(), value.getMonth() + 1)
    : 1 // 'max' 时日期为当前月份的最后一天，否则为 1
  let hour = isMax ? 23 : 0 // 'max' 时小时为 23，否则为 0
  let minute = isMax ? 59 : 0 // 'max' 时分钟为 59，否则为 0

  // 如果传入日期的年份与边界日期的年份相同
  if (value.getFullYear() === year) {
    month = boundary.getMonth() + 1 // 使用边界日期的月份

    // 如果传入日期的月份与边界日期的月份相同
    if (value.getMonth() + 1 === month) {
      date = boundary.getDate() // 使用边界日期的日期

      // 如果传入日期的日期与边界日期的日期相同
      if (value.getDate() === date) {
        hour = boundary.getHours() // 使用边界日期的小时

        // 如果传入日期的小时与边界日期的小时相同
        if (value.getHours() === hour) {
          minute = boundary.getMinutes() // 使用边界日期的分钟
        }
      }
    }
  }

  // 返回边界值的对象
  return {
    [`${type}Year`]: year, // 返回年份
    [`${type}Month`]: month, // 返回月份
    [`${type}Date`]: date, // 返回日期
    [`${type}Hour`]: hour, // 返回小时
    [`${type}Minute`]: minute, // 返回分钟
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
  // 将选中的日期转换为 Date 对象
  const selected = new Date(selectedDate)
  if (!selected) return [] // 如果选中的日期无效，返回空数组

  // 获取最大和最小边界值
  const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } =
    calculateDateBoundary('max', selected, startDate, endDate)
  const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } =
    calculateDateBoundary('min', selected, startDate, endDate)

  // 定义完整的日期范围配置
  const fullRanges = [
    { type: 'year', range: [minYear, maxYear] }, // 年份范围
    { type: 'month', range: [minMonth, maxMonth] }, // 月份范围
    { type: 'day', range: [minDate, maxDate] }, // 日期范围
    { type: 'hour', range: [minHour, maxHour] }, // 小时范围
    { type: 'minute', range: [minMinute, maxMinute] }, // 分钟范围
    { type: 'seconds', range: [minSeconds, maxSeconds] }, // 秒数范围
  ]

  // 根据类型返回对应的范围配置
  switch (type.toLocaleLowerCase()) {
    case 'date':
      return fullRanges.slice(0, 3) // 返回年、月、日
    case 'datetime':
      return fullRanges.slice(0, 5) // 返回年、月、日、时、分
    case 'time':
      return fullRanges.slice(3, 6) // 返回时、分、秒
    case 'year-month':
      return fullRanges.slice(0, 2) // 返回年、月
    case 'hour-minutes':
      return fullRanges.slice(3, 5) // 返回时、分
    case 'month-day':
      return fullRanges.slice(1, 3) // 返回月、日
    case 'datehour':
      return fullRanges.slice(0, 4) // 返回年、月、日、时
    default:
      return fullRanges // 返回完整范围
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
  // 将时间戳转换为 Date 对象
  const date = new Date(selectedDate)

  // 如果选中的日期无效，返回 0
  if (!selectedDate) return 0

  // 根据类型返回对应的日期部分值
  switch (type) {
    case 'year':
      return date.getFullYear() // 返回年份
    case 'month':
      return date.getMonth() + 1 // 返回月份（注意：getMonth() 返回 0-11，需要加 1）
    case 'day':
      return date.getDate() // 返回日期
    case 'hour':
      return date.getHours() // 返回小时
    case 'minute':
      return date.getMinutes() // 返回分钟
    case 'seconds':
      return date.getSeconds() // 返回秒数
    default:
      return 0 // 如果类型无效，返回 0
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
  callback: (selectedIndex: number, options: PickerOption[]) => void,
  showChinese: boolean,
  zhCNType: { [key: string]: string },
  formatter?: (type: string, option: PickerOption) => PickerOption
): PickerOption[] => {
  let currentMin = min // 当前最小值
  const options: PickerOption[] = [] // 存储生成的选项
  let selectedIndex = 0 // 当前选中值的索引

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

  // 触发回调函数，返回选中索引
  callback(selectedIndex, options)

  // 返回生成的选项数组
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
  // 如果提供了自定义格式化函数，则使用该函数格式化选项
  if (formatter) {
    return formatter(type, {
      text: padZero(value, 2), // 补零后的文本
      value: padZero(value, 2), // 补零后的值
    })
  }

  // 补零后的值
  const paddedValue = padZero(value, 2)

  // 如果需要显示中文，添加对应的中文文本
  const chineseText = showChinese ? zhCNType[type] : ''

  // 返回格式化后的选项
  return {
    text: paddedValue + chineseText, // 文本 = 补零后的值 + 中文文本
    value: paddedValue, // 值 = 补零后的值
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
    value = startDate // 如果值无效，使用 startDate
  }
  return Math.min(
    Math.max(value.getTime(), startDate.getTime()),
    endDate.getTime()
  ) // 确保日期在范围内
}

/**
 * 处理 Picker 值变化的逻辑
 * @param selectedOptions 选中的选项数组
 * @param selectedValue 选中的值数组
 * @param index 当前列的索引
 */
export const handlePickerValueChange = (
  selectedOptions: PickerOption[],
  selectedValue: PickerValue[],
  index: number,
  type: string,
  defaultDate: Date,
  handleDateComparison: (
    newDate: Date | null,
    selectedOptions: PickerOption[],
    index: number
  ) => void
) => {
  const rangeType = type.toLocaleLowerCase() // 获取日期选择器的类型并转换为小写

  // 处理日期相关的类型（如 'date', 'datetime', 'datehour' 等）
  if (
    ['date', 'datetime', 'datehour', 'month-day', 'year-month'].includes(
      rangeType
    )
  ) {
    const formattedDate: PickerValue[] = []

    // 将选中的值转换为数组
    selectedValue.forEach((item) => {
      formattedDate.push(item)
    })

    // 如果类型是 'month-day' 且缺少年份，补充当前年份
    if (rangeType === 'month-day' && formattedDate.length < 3) {
      formattedDate.unshift(new Date(defaultDate).getFullYear())
    }

    // 如果类型是 'year-month' 且缺少日期，补充当前日期
    if (rangeType === 'year-month' && formattedDate.length < 3) {
      formattedDate.push(new Date(defaultDate).getDate())
    }

    // 解析年、月、日
    const year = Number(formattedDate[0])
    const month = Number(formattedDate[1]) - 1 // 月份从 0 开始
    const day = Math.min(
      Number(formattedDate[2]),
      getLastDayOfMonth(year, month + 1) // 获取当前月份的最后一天
    )

    let date: Date | null = null

    // 根据类型创建日期对象
    if (
      rangeType === 'date' ||
      rangeType === 'month-day' ||
      rangeType === 'year-month'
    ) {
      date = new Date(year, month, day) // 仅包含年、月、日
    } else if (rangeType === 'datetime') {
      date = new Date(
        year,
        month,
        day,
        Number(formattedDate[3]),
        Number(formattedDate[4])
      ) // 包含年、月、日、时、分
    } else if (rangeType === 'datehour') {
      date = new Date(year, month, day, Number(formattedDate[3])) // 包含年、月、日、时
    }

    // 比较并处理日期变化
    handleDateComparison(date, selectedOptions, index)
  } else {
    // 处理时间相关的类型（如 'hour-minutes', 'time'）
    const [hour, minute, seconds] = selectedValue

    // 获取当前日期的年、月、日
    const currentDate = new Date(defaultDate)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDate()

    // 创建日期对象
    const date = new Date(
      year,
      month,
      day,
      Number(hour),
      Number(minute),
      rangeType === 'time' ? Number(seconds) : 0 // 如果是 'time' 类型，包含秒数
    )

    // 比较并处理日期变化
    handleDateComparison(date, selectedOptions, index)
  }
}
