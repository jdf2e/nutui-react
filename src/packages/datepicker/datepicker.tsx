import React, { FunctionComponent, useState, useEffect } from 'react'
import Picker from '@/packages/picker'
import { PickerOption, PickerProps } from '@/packages/picker/index'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { isDate } from '@/utils/is-date'
import { padZero } from '@/utils/pad-zero'

export interface DatePickerProps extends BasicComponent {
  value?: Date
  defaultValue?: Date
  visible: boolean
  title: string
  type:
    | 'date'
    | 'time'
    | 'year-month'
    | 'month-day'
    | 'datehour'
    | 'datetime'
    | 'hour-minutes'
  showChinese: boolean
  minuteStep: number
  startDate: Date
  endDate: Date
  threeDimensional: boolean
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
  formatter: (type: string, option: PickerOption) => PickerOption
  filter: (type: string, option: PickerOption[]) => PickerOption[]
  onClose: () => void
  onCancel: () => void
  onConfirm: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  onChange?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
}

const currentYear = new Date().getFullYear()
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  title: '',
  type: 'date',
  showChinese: false,
  threeDimensional: true,
  minuteStep: 1,
  startDate: new Date(currentYear - 10, 0, 1),
  endDate: new Date(currentYear + 10, 11, 31),
} as DatePickerProps

export const DatePicker: FunctionComponent<
  Partial<DatePickerProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>
> = (props) => {
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
  const { locale } = useConfig()
  const lang = locale.datepicker
  const zhCNType: { [key: string]: string } = {
    day: lang.day,
    year: lang.year,
    month: lang.month,
    hour: lang.hour,
    minute: lang.min,
    seconds: lang.seconds,
  }
  const [pickerValue, setPickerValue] = useState<(string | number)[]>([])
  const [pickerOptions, setPickerOptions] = useState<PickerOption[][]>([])
  const formatValue = (value: Date | null) => {
    if (!value || (value && !isDate(value))) {
      value = startDate
    }
    return Math.min(
      Math.max(value.getTime(), startDate.getTime()),
      endDate.getTime()
    )
  }
  const [selectedDate, setSelectedDate] = usePropsValue<number>({
    value: props.value && formatValue(props.value),
    defaultValue: props.defaultValue && formatValue(props.defaultValue),
    finalValue: 0,
  })

  function getMonthEndDay(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
  }

  const getBoundary = (type: string, value: Date) => {
    const boundary = type === 'min' ? startDate : endDate
    const year = boundary.getFullYear()
    let month = 1
    let date = 1
    let hour = 0
    let minute = 0

    if (type === 'max') {
      month = 12
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1)
      hour = 23
      minute = 59
    }
    const seconds = minute
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
    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
      [`${type}Seconds`]: seconds,
    }
  }
  const ranges = () => {
    const selected = new Date(selectedDate)
    if (!selected) return []
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } =
      getBoundary('max', selected)
    const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } =
      getBoundary('min', selected)
    const result = [
      {
        type: 'year',
        range: [minYear, maxYear],
      },
      {
        type: 'month',
        range: [minMonth, maxMonth],
      },
      {
        type: 'day',
        range: [minDate, maxDate],
      },
      {
        type: 'hour',
        range: [minHour, maxHour],
      },
      {
        type: 'minute',
        range: [minMinute, maxMinute],
      },
      {
        type: 'seconds',
        range: [minSeconds, maxSeconds],
      },
    ]

    switch (type.toLocaleLowerCase()) {
      case 'date':
        return result.slice(0, 3)
      case 'datetime':
        return result.slice(0, 5)
      case 'time':
        return result.slice(3, 6)
      case 'year-month':
        return result.slice(0, 2)
      case 'hour-minutes':
        return result.slice(3, 5)
      case 'month-day':
        return result.slice(1, 3)
      case 'datehour':
        return result.slice(0, 4)
      default:
        return result
    }
  }

  const compareDateChange = (
    currentDate: number,
    newDate: Date | null,
    selectedOptions: PickerOption[],
    index: number
  ) => {
    const isEqual = new Date(currentDate)?.getTime() === newDate?.getTime()
    if (newDate && isDate(newDate)) {
      if (!isEqual) {
        setSelectedDate(formatValue(newDate as Date))
      }
      onChange?.(
        selectedOptions,
        [
          String(newDate.getFullYear()),
          String(newDate.getMonth() + 1),
          String(newDate.getDate()),
        ],
        index
      )
    }
  }
  const handlePickerChange = (
    selectedOptions: PickerOption[],
    selectedValue: (number | string)[],
    index: number
  ) => {
    const rangeType = type.toLocaleLowerCase()
    if (
      ['date', 'datetime', 'datehour', 'month-day', 'year-month'].includes(
        rangeType
      )
    ) {
      const formatDate: (number | string)[] = []
      selectedValue.forEach((item) => {
        formatDate.push(item)
      })
      if (rangeType === 'month-day' && formatDate.length < 3) {
        formatDate.unshift(
          new Date(defaultValue || startDate || endDate).getFullYear()
        )
      }

      if (rangeType === 'year-month' && formatDate.length < 3) {
        formatDate.push(
          new Date(defaultValue || startDate || endDate).getDate()
        )
      }

      const year = Number(formatDate[0])
      const month = Number(formatDate[1]) - 1
      const day = Math.min(
        Number(formatDate[2]),
        getMonthEndDay(Number(formatDate[0]), Number(formatDate[1]))
      )

      if (
        selectedOptions.length >= 2 &&
        ['date', 'datehour', 'datetime', 'month-day'].includes(rangeType)
      ) {
        const dayOption = formatOption('day', day)
        if (rangeType === 'month-day') {
          selectedOptions[1] = dayOption
        } else {
          selectedOptions[2] = dayOption
        }
      }
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
          Number(formatDate[3]),
          Number(formatDate[4])
        )
      } else if (rangeType === 'datehour') {
        date = new Date(year, month, day, Number(formatDate[3]))
      }

      compareDateChange(selectedDate, date, selectedOptions, index)
    } else {
      // 'hour-minutes' 'time'
      const [hour, minute, seconds] = selectedValue
      const currentDate = new Date(selectedDate)
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
      compareDateChange(selectedDate, date, selectedOptions, index)
    }
  }

  const formatOption = (type: string, value: string | number) => {
    if (formatter) {
      return formatter(type, {
        text: padZero(value, 2),
        value: padZero(value, 2),
      })
    }
    const padMin = padZero(value, 2)
    const fatter = showChinese ? zhCNType[type] : ''
    return { text: padMin + fatter, value: padMin }
  }

  const generateColumn = (
    min: number,
    max: number,
    val: number | string,
    type: string,
    columnIndex: number
  ) => {
    let cmin = min
    const arr: Array<PickerOption> = []
    let index = 0
    while (cmin <= max) {
      arr.push(formatOption(type, cmin))

      if (type === 'minute') {
        cmin += minuteStep
      } else {
        cmin++
      }

      if (cmin <= Number(val)) {
        index++
      }
    }

    pickerValue[columnIndex] = arr[index]?.value
    setPickerValue([...pickerValue])

    if (filter?.(type, arr)) {
      return filter?.(type, arr)
    }
    return arr
  }

  const getDateIndex = (type: string) => {
    const date = new Date(selectedDate)
    if (!selectedDate) return 0
    if (type === 'year') {
      return date.getFullYear()
    }
    if (type === 'month') {
      return date.getMonth() + 1
    }
    if (type === 'day') {
      return date.getDate()
    }
    if (type === 'hour') {
      return date.getHours()
    }
    if (type === 'minute') {
      return date.getMinutes()
    }
    if (type === 'seconds') {
      return date.getSeconds()
    }
    return 0
  }

  const columns = () => {
    const val = ranges().map((res, columnIndex) => {
      return generateColumn(
        res.range[0],
        res.range[1],
        getDateIndex(res.type),
        res.type,
        columnIndex
      )
    })
    return val || []
  }

  useEffect(() => {
    setPickerOptions(columns())
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
          ) => handlePickerChange(options, value, index)}
          threeDimensional={threeDimensional}
        />
      )}
    </div>
  )
}

DatePicker.displayName = 'NutDatePicker'
