import React, { FunctionComponent, useState, useEffect } from 'react' // 导入 React 和相关钩子
import Picker from '@/packages/picker' // 导入 Picker 组件
import { PickerOption, PickerProps } from '@/packages/picker/index' // 导入 Picker 的类型定义
import { useConfig } from '@/packages/configprovider' // 导入配置钩子
import { usePropsValue } from '@/hooks/use-props-value' // 导入自定义钩子，用于管理属性值
import { BasicComponent, ComponentDefaults } from '@/utils/typings' // 导入基础组件类型和默认值
import { isDate } from '@/utils/is-date' // 导入日期验证工具函数
import {
  formatValue,
  generateDatePickerRanges,
  generatePickerColumnWithCallback,
  getDatePartValue,
  handlePickerValueChange,
} from './utils'

export interface DatePickerProps extends BasicComponent {
  value?: Date // 当前选中的日期
  defaultValue?: Date // 默认选中的日期
  visible: boolean // 是否显示 Picker
  title: string // Picker 的标题
  type: // 日期选择器的类型
  | 'date'
    | 'time'
    | 'year-month'
    | 'month-day'
    | 'datehour'
    | 'datetime'
    | 'hour-minutes'
  showChinese: boolean // 是否显示中文文本
  minuteStep: number // 分钟步长
  startDate: Date // 日期范围的开始日期
  endDate: Date // 日期范围的结束日期
  threeDimensional: boolean // 是否启用 3D 效果
  pickerProps: Partial<
    Omit<
      PickerProps,
      | 'defaultValue'
      | 'threeDimensional'
      | 'title'
      | 'value'
      | 'onConfirm'
      | 'onClose'
      | 'onCancel'
      | 'onChange'
    >
  >
  formatter: (type: string, option: PickerOption) => PickerOption // 格式化选项的函数
  filter: (type: string, option: PickerOption[]) => PickerOption[] // 过滤选项的函数
  onClose: () => void // Picker 关闭时的回调
  onCancel: () => void // Picker 取消时的回调
  onConfirm: (
    // Picker 确认时的回调
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  onChange?: (
    // Picker 值变化时的回调
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
}

// 获取当前年份
const currentYear = new Date().getFullYear()

// 定义默认属性
const defaultProps = {
  ...ComponentDefaults, // 继承基础组件的默认值
  visible: false, // 默认不显示 Picker
  title: '', // 默认标题为空
  type: 'date', // 默认类型为日期选择器
  showChinese: false, // 默认不显示中文文本
  threeDimensional: true, // 默认启用 3D 效果
  minuteStep: 1, // 默认分钟步长为 1
  startDate: new Date(currentYear - 10, 0, 1), // 默认开始日期为当前年份的前 10 年
  endDate: new Date(currentYear + 10, 11, 31), // 默认结束日期为当前年份的后 10 年
} as DatePickerProps

export const DatePicker: FunctionComponent<
  Partial<DatePickerProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>
> = (props) => {
  // 解构传入的属性，并合并默认属性
  const {
    startDate,
    endDate,
    type,
    showChinese,
    minuteStep,
    visible,
    title,
    defaultValue,
    pickerProps = {},
    formatter,
    onClose,
    onCancel,
    onConfirm,
    filter,
    onChange,
    threeDimensional,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  // 获取语言配置
  const { locale } = useConfig()
  const lang = locale.datepicker

  // 定义中文文本映射
  const zhCNType: { [key: string]: string } = {
    day: lang.day,
    year: lang.year,
    month: lang.month,
    hour: lang.hour,
    minute: lang.min,
    seconds: lang.seconds,
  }

  // 定义 Picker 的值和选项的状态
  const [pickerValue, setPickerValue] = useState<(string | number)[]>([])
  const [pickerOptions, setPickerOptions] = useState<PickerOption[][]>([])

  // 使用 usePropsValue 管理选中的日期值
  const [selectedDate, setSelectedDate] = usePropsValue<number>({
    value: props.value && formatValue(props.value, startDate, endDate), // 当前值
    defaultValue:
      props.defaultValue && formatValue(props.defaultValue, startDate, endDate), // 默认值
    finalValue: 0, // 最终值
  })

  /**
   * 比较新旧日期，如果不同则更新选中日期并触发 onChange 回调
   * @param currentDate 当前选中的日期时间戳
   * @param newDate 新选中的日期对象
   * @param selectedOptions 选中的选项数组
   * @param index 当前列的索引
   */
  const handleDateComparison = (
    newDate: Date | null,
    selectedOptions: PickerOption[],
    index: number
  ) => {
    // 比较当前日期和新日期的时间戳是否相同
    const isEqual = new Date(selectedDate)?.getTime() === newDate?.getTime()

    // 如果新日期有效且与当前日期不同
    if (newDate && isDate(newDate)) {
      if (!isEqual) {
        // 更新选中的日期
        setSelectedDate(formatValue(newDate, startDate, endDate))
      }

      // 触发 onChange 回调，传递选中的选项和日期信息
      onChange?.(
        selectedOptions,
        [
          String(newDate.getFullYear()), // 年份
          String(newDate.getMonth() + 1), // 月份（注意：getMonth() 返回 0-11，需要加 1）
          String(newDate.getDate()), // 日期
        ],
        index // 当前列的索引
      )
    }
  }

  const handleChange = (
    selectedOptions: PickerOption[],
    selectedValue: (number | string)[],
    index: number
  ) => {
    handlePickerValueChange(
      selectedOptions,
      selectedValue,
      index,
      type,
      defaultValue || startDate || endDate,
      handleDateComparison
    )
  }

  /**
   * 生成 Picker 的列数据
   * @returns 返回生成的 Picker 列数据数组
   */
  const generatePickerColumns = (): PickerOption[][] => {
    // 生成日期选择器的范围配置
    const dateRanges = generateDatePickerRanges(
      type,
      selectedDate,
      startDate,
      endDate
    )

    // 遍历范围配置，生成每一列的选项
    const columns = dateRanges.map((rangeConfig, columnIndex) => {
      // 获取当前列的类型和选中值
      const { type: columnType, range } = rangeConfig
      const selectedValue = getDatePartValue(columnType, selectedDate)

      // 生成当前列的选项，并设置选中值
      const pickerColumn = generatePickerColumnWithCallback(
        range[0], // 最小值
        range[1], // 最大值
        selectedValue, // 当前选中的值
        columnType, // 列的类型
        minuteStep, // 分钟步长
        (selectedIndex, options) => {
          // 更新 pickerValue 中对应列的值
          pickerValue[columnIndex] = options[selectedIndex]?.value
          setPickerValue([...pickerValue])
        },
        showChinese, // 是否显示中文
        zhCNType, // 中文文本映射
        formatter // 自定义格式化函数
      )

      // 如果提供了 filter 函数，则对选项进行过滤
      if (filter?.(columnType, pickerColumn)) {
        return filter(columnType, pickerColumn)
      }

      // 返回当前列的选项
      return pickerColumn
    })

    // 返回生成的列数据，如果为空则返回空数组
    return columns || []
  }

  // 当 selectedDate、startDate 或 endDate 变化时，重新生成 Picker 列数据
  useEffect(() => {
    setPickerOptions(generatePickerColumns())
  }, [selectedDate, startDate, endDate])

  return (
    <div className={`nut-datepicker ${className}`} style={style} {...rest}>
      {pickerOptions.length > 0 && (
        <Picker
          {...pickerProps}
          title={title}
          visible={visible}
          options={pickerOptions}
          onClose={onClose}
          onCancel={onCancel}
          value={pickerValue}
          onConfirm={(options: PickerOption[], value: (string | number)[]) =>
            onConfirm && onConfirm(options, value)
          }
          onChange={(
            options: PickerOption[],
            value: (number | string)[],
            index: number
          ) => handleChange(options, value, index)}
          threeDimensional={threeDimensional}
        />
      )}
    </div>
  )
}

DatePicker.displayName = 'NutDatePicker'
