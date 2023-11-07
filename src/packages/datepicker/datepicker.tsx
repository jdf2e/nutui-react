import React, { FunctionComponent, useState, useEffect } from 'react'
import Picker from '@/packages/picker'
import { PickerOption, PickerProps } from '@/packages/picker/index'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
      | 'onChange'
    >
  >
  formatter: (type: string, option: PickerOption) => PickerOption
  filter: (type: string, option: PickerOption[]) => PickerOption[]
  onClose: () => void
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
  const datepickerLang = locale.datepicker
  const zhCNType: { [key: string]: string } = {
    day: datepickerLang.day,
    year: datepickerLang.year,
    month: datepickerLang.month,
    hour: datepickerLang.hour,
    minute: datepickerLang.min,
    seconds: datepickerLang.seconds,
  }
  const [defaultValueOfPicker, setDefaultValueOfPicker] = useState<
    (string | number)[]
  >([])
  const [options, setOptions] = useState<PickerOption[][]>([])
  const isDate = (val: Date): val is Date => {
    return (
      Object.prototype.toString.call(val) === '[object Date]' &&
      !Number.isNaN(val.getTime())
    )
  }
  const formatValue = (value: Date | null) => {
    let cvalue = value
    if (!cvalue || (cvalue && !isDate(cvalue))) {
      cvalue = startDate
    }
    let timestmp = Math.max(cvalue.getTime(), startDate.getTime())
    timestmp = Math.min(timestmp, endDate.getTime())
    return timestmp
  }
  const [currentDate, setCurrentDate] = usePropsValue<number>({
    value: props.value && formatValue(props.value),
    defaultValue: formatValue(props.defaultValue || null),
    finalValue: 0,
    onChange: (val: number) => {},
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
    const curDate = new Date(currentDate)
    if (!curDate) return []
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } =
      getBoundary('max', curDate)
    const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } =
      getBoundary('min', curDate)
    let result = [
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
        result = result.slice(0, 3)
        break
      case 'datetime':
        result = result.slice(0, 5)
        break
      case 'time':
        result = result.slice(3, 6)
        break
      case 'year-month':
        result = result.slice(0, 2)
        break
      case 'hour-minutes':
        result = result.slice(3, 5)
        break
      case 'month-day':
        result = result.slice(1, 3)
        break
      case 'datehour':
        result = result.slice(0, 4)
        break
      default:
        ''
    }
    return result
  }

  const updateChooseValueCustmer = (
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

      const isEqual = new Date(currentDate)?.getTime() === date?.getTime()
      date &&
        isDate(date) &&
        !isEqual &&
        setCurrentDate(formatValue(date as Date))
    }

    props.onChange && props.onChange(selectedOptions, selectedValue, index)
  }

  const padZero = (num: number | string, targetLength = 2) => {
    let str = `${num}`
    while (str.length < targetLength) {
      str = `0${str}`
    }
    return str
  }

  const formatterOption = (type: string, value: string | number) => {
    let fOption = null
    if (formatter) {
      fOption = formatter(type, {
        text: padZero(value, 2),
        value: padZero(value, 2),
      })
    } else {
      const padMin = padZero(value, 2)
      const fatter = showChinese ? zhCNType[type] : ''
      fOption = { text: padMin + fatter, value: padMin }
    }

    return fOption
  }

  const generateValue = (
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
      arr.push(formatterOption(type, cmin))

      if (type === 'minute') {
        cmin += minuteStep
      } else {
        cmin++
      }

      if (cmin <= val) {
        index++
      }
    }

    defaultValueOfPicker[columnIndex] = arr[index]?.value
    setDefaultValueOfPicker([...defaultValueOfPicker])

    if (props.filter && props.filter(type, arr)) {
      return props.filter(type, arr)
    }
    return arr
  }

  const getDateIndex = (type: string) => {
    const date = new Date(currentDate)
    if (!currentDate) return 0
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
      return generateValue(
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
    if (currentDate) {
      setOptions(columns())
    }
  }, [currentDate])

  return (
    <div className={`nut-datepicker ${className}`} style={style} {...rest}>
      {options.length && (
        <Picker
          {...pickerProps}
          title={title}
          visible={visible}
          options={options}
          onClose={onClose}
          defaultValue={defaultValueOfPicker}
          onConfirm={(options: PickerOption[], value: (string | number)[]) =>
            onConfirm && onConfirm(options, value)
          }
          onChange={(
            options: PickerOption[],
            value: (number | string)[],
            index: number
          ) => updateChooseValueCustmer(options, value, index)}
          threeDimensional={threeDimensional}
        />
      )}
    </div>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.displayName = 'NutDatePicker'
