import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { View } from '@tarojs/components'
import Picker from '@/packages/picker/index.taro'
import { useConfig } from '@/packages/configprovider/index.taro'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

interface pickerRefState {
  updateChooseValue: (
    index: number,
    value: string,
    cacheValueData: PickerOption[]
  ) => void
}

export interface DatePickerProps {
  modelValue: Date | null
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
  className?: string
  style?: React.CSSProperties
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
  modelValue: null,
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
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const {
    startDate,
    endDate,
    type,
    showChinese,
    minuteStep,
    modelValue,
    visible,
    title,
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
  const [show, setShow] = useState(false)
  const [currentDate, setCurrentDate] = useState<Date | null>(modelValue)
  const [defaultValue, setDefaultValue] = useState<(string | number)[]>([])
  const [options, setListData] = useState<PickerOption[][]>([])
  const pickerRef = useRef<pickerRefState>(null)
  const isDate = (val: Date): val is Date => {
    return (
      Object.prototype.toString.call(val) === '[object Date]' &&
      !Number.isNaN(val.getTime())
    )
  }

  const datepickerLang = locale.datepicker
  const zhCNType: { [key: string]: string } = {
    day: datepickerLang.day,
    year: datepickerLang.year,
    month: datepickerLang.month,
    hour: datepickerLang.hour,
    minute: datepickerLang.min,
    seconds: datepickerLang.seconds,
  }
  const formatValue = (value: Date | null) => {
    let cvalue = value
    if (!cvalue || (cvalue && !isDate(cvalue))) {
      cvalue = startDate
    }
    let timestmp = Math.max(cvalue.getTime(), startDate.getTime())
    timestmp = Math.min(timestmp, endDate.getTime())

    return new Date(timestmp)
  }

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

  const ranges = (date?: Date) => {
    const curDate = date || currentDate
    if (!curDate) return []
    const { maxYear, endDate, maxMonth, maxHour, maxMinute, maxSeconds } =
      getBoundary('max', curDate)

    const { minYear, startDate, minMonth, minHour, minMinute, minSeconds } =
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
        range: [startDate, endDate],
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
    cacheValueData: PickerOption[],
    selectedValue: (number | string)[],
    index: number
  ) => {
    if (
      ['date', 'datetime', 'datehour', 'month-day', 'year-month'].includes(
        type.toLocaleLowerCase()
      )
    ) {
      const formatDate: (number | string)[] = []
      selectedValue.forEach((item) => {
        formatDate.push(item)
      })
      if (type.toLocaleLowerCase() === 'month-day' && formatDate.length < 3) {
        formatDate.unshift(
          new Date(modelValue || startDate || endDate).getFullYear()
        )
      }

      if (type.toLocaleLowerCase() === 'year-month' && formatDate.length < 3) {
        formatDate.push(new Date(modelValue || startDate || endDate).getDate())
      }

      const year = Number(formatDate[0])
      const month = Number(formatDate[1]) - 1
      const day = Math.min(
        Number(formatDate[2]),
        getMonthEndDay(Number(formatDate[0]), Number(formatDate[1]))
      )
      let date: Date | null = null
      if (
        type.toLocaleLowerCase() === 'date' ||
        type.toLocaleLowerCase() === 'month-day' ||
        type.toLocaleLowerCase() === 'year-month'
      ) {
        date = new Date(year, month, day)
      } else if (type.toLocaleLowerCase() === 'datetime') {
        date = new Date(
          year,
          month,
          day,
          Number(formatDate[3]),
          Number(formatDate[4])
        )
      } else if (type.toLocaleLowerCase() === 'datehour') {
        date = new Date(year, month, day, Number(formatDate[3]))
      }

      const isEqual = currentDate?.getTime() === date?.getTime()
      date &&
        isDate(date) &&
        !isEqual &&
        setCurrentDate(formatValue(date as Date))
    }

    props.onChange && props.onChange(cacheValueData, selectedValue, index)
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

    defaultValue[columnIndex] = arr[index].value
    setDefaultValue([...defaultValue])

    if (props.filter && props.filter(type, arr)) {
      return props.filter(type, arr)
    }
    return arr
  }

  const getDateIndex = (type: string) => {
    if (!currentDate) return 0

    let d = 0
    if (type === 'year') {
      d = (currentDate as Date).getFullYear()
    } else if (type === 'month') {
      d = (currentDate as Date).getMonth() + 1
    } else if (type === 'day') {
      d = (currentDate as Date).getDate()
    } else if (type === 'hour') {
      d = (currentDate as Date).getHours()
    } else if (type === 'minute') {
      d = (currentDate as Date).getMinutes()
    } else if (type === 'seconds') {
      d = (currentDate as Date).getSeconds()
    }

    return d
  }

  const columns = (date?: Date) => {
    const val = ranges(date).map((res, columnIndex) => {
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
    setCurrentDate(formatValue(modelValue))
  }, [])

  useEffect(() => {
    setCurrentDate(formatValue(modelValue))
  }, [modelValue])

  useEffect(() => {
    setShow(visible)
  }, [visible])

  useEffect(() => {
    if (currentDate) {
      setListData(columns())
    }
  }, [currentDate])

  return (
    <View
      className={`nut-datepicker ${className || ''}`}
      style={style}
      catchMove
      {...(rest as any)}
    >
      {options.length > 0 && (
        <Picker
          title={title}
          visible={show}
          options={options}
          onClose={onClose}
          defaultValue={defaultValue}
          onConfirm={(options: PickerOption[], values: (string | number)[]) =>
            onConfirm && onConfirm(options, values)
          }
          onChange={(
            list: PickerOption[],
            value: (number | string)[],
            index: number
          ) => updateChooseValueCustmer(list, value, index)}
          threeDimensional={threeDimensional}
          ref={pickerRef}
        />
      )}
    </View>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.displayName = 'NutDatePicker'
