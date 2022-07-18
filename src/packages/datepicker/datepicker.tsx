import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import Picker from '@/packages/picker'

interface IResValue {
  label: number
  value: string
}
interface pickerRefState {
  updateChooseValue: (
    index: number,
    value: string,
    cacheValueData: any[]
  ) => void
}

export interface DatePickerProps {
  modelValue: Date
  visible: boolean
  title: string
  type: string
  isShowChinese: boolean
  minuteStep: number
  minDate: Date
  maxDate: Date
  className: string
  style: React.CSSProperties
  onCloseDatePicker: () => void
  onConfirmDatePicker: (list: any[]) => void
}
const currentYear = new Date().getFullYear()
const defaultProps = {
  modelValue: new Date(),
  visible: false,
  title: '',
  type: 'date',
  isShowChinese: true,
  minuteStep: 1,
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  onCloseDatePicker: () => void 0,
} as DatePickerProps
export const DatePicker: FunctionComponent<
  Partial<DatePickerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    minDate,
    maxDate,
    type,
    isShowChinese,
    minuteStep,
    modelValue,
    visible,
    title,
    onCloseDatePicker,
    onConfirmDatePicker,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [show, setShow] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [defaultValue, setDefaultValue] = useState<(string | number)[]>([])
  const [listData, setListData] = useState<any[]>([])
  const pickerRef = useRef<pickerRefState>(null)

  const isDate = (val: Date): val is Date => {
    return (
      Object.prototype.toString.call(val) === '[object Date]' &&
      !isNaN(val.getTime())
    )
  }

  const zhCNType: { [key: string]: string } = {
    day: '日',
    year: '年',
    month: '月',
    hour: '时',
    minute: '分',
    seconds: '秒',
  }
  const formatValue = (value: Date) => {
    if (!isDate(value)) {
      value = minDate
    }
    let timestmp = Math.max(value.getTime(), minDate.getTime())
    timestmp = Math.min(timestmp, maxDate.getTime())

    return new Date(timestmp)
  }

  function getMonthEndDay(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
  }
  const getBoundary = (type: string, value: Date) => {
    const boundary = type === 'min' ? minDate : maxDate
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
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } =
      getBoundary('max', curDate)

    const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } =
      getBoundary('min', curDate)

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

    let start = 0
    let end = 0
    switch (type) {
      case 'date':
        start = 0
        end = 3
        break
      case 'datetime':
        start = 0
        end = 5
        break
      case 'time':
        start = 3
        end = 6
        break
      case 'month-day':
        start = 1
        end = 3
        break
      case 'datehour':
        start = 0
        end = 4
        break
    }
    return result.slice(start, end)
  }

  const initDefault = () => {
    if (['date', 'datetime', 'time'].includes(type)) {
      const formatDate = [
        modelValue.getFullYear(),
        modelValue.getMonth() + 1,
        modelValue.getDate(),
        modelValue.getHours(),
        modelValue.getMinutes(),
        modelValue.getSeconds(),
      ]
      let [year, month, day, hour, minute, seconds] = formatDate

      day = Math.min(day, getMonthEndDay(year, month))
      let val: (string | number)[] = formatDate
      if (isShowChinese) {
        val = [
          year + zhCNType.year,
          month + zhCNType.month,
          day + zhCNType.day,
          hour + zhCNType.hour,
          minute + zhCNType.minute,
          seconds + zhCNType.seconds,
        ]
      }
      if (type === 'date') {
        setDefaultValue(val.splice(0, 3))
      } else if (type === 'datetime') {
        setDefaultValue(val.splice(0, 5))
      } else if (type === 'time') {
        setDefaultValue(val.splice(3, 3))
      }
    }
  }

  const updateChooseValueCustmer = (
    index: number,
    resValue: IResValue | string,
    cacheValueData: any[]
  ) => {
    // 只有月份变化时，需要重新计算日期区间
    if (index === 1 && (type === 'date' || type === 'datetime')) {
      const modelValue = new Date(
        cacheValueData
          .slice(0, 3)
          .join('-')
          .replace(/[^0-9\-]/g, '')
      )
      setTimeout(() => {
        const data = columns(modelValue)

        let val = []
        if (isShowChinese) {
          val = [
            modelValue.getFullYear() + zhCNType.year,
            resValue as string,
            modelValue.getDate() + zhCNType.day,
          ]
        } else {
          val = [
            modelValue.getFullYear(),
            resValue as string,
            modelValue.getDate(),
          ]
        }

        setDefaultValue(val)
        setListData(data)
        // 更新第二列位置
        setTimeout(() => {
          pickerRef.current?.updateChooseValue(
            index + 1,
            data[1] ? data[1][0].toString() : '0',
            cacheValueData
          )
        }, 200)
      }, 100)
    }
  }

  const generateValue = (
    min: number,
    max: number,
    val: number,
    type: string
  ) => {
    if (!(max > min)) return
    const arr: Array<number | string> = []
    let index = 0
    while (min <= max) {
      if (isShowChinese) {
        arr.push(min + zhCNType[type])
      } else {
        arr.push(min)
      }

      if (type === 'minute') {
        min += minuteStep
      } else {
        min++
      }

      if (min <= val) {
        index++
      }
    }

    return arr
  }

  const getDateIndex = (type: string, date?: Date) => {
    const curDate = date || currentDate

    switch (type) {
      case 'year':
        return curDate.getFullYear()
        break
      case 'month':
        return curDate.getMonth()
        break
      case 'day':
        return curDate.getDate()
        break
      case 'hour':
        return curDate.getHours()
        break
      case 'minute':
        return curDate.getMinutes()
        break
      case 'seconds':
        return curDate.getSeconds()
        break
      default:
        return 0
    }
  }

  const columns = (date?: Date) => {
    const val = ranges(date).map((res) => {
      return generateValue(
        res.range[0],
        res.range[1],
        getDateIndex(res.type, date),
        res.type
      )
    })
    return val || []
  }

  useEffect(() => {
    setCurrentDate(modelValue)
    setListData(columns())
    initDefault()
  }, [])

  useEffect(() => {
    setShow(visible)
  }, [visible])

  return (
    <div
      className={`nut-datepicker ${className || ''}`}
      style={style}
      {...rest}
    >
      <Picker
        isVisible={show}
        listData={listData}
        onClose={onCloseDatePicker}
        defaultValueData={defaultValue}
        onConfirm={(list: any[]) =>
          onConfirmDatePicker && onConfirmDatePicker(list)
        }
        onChoose={(index: number, value: IResValue | string, list: any[]) =>
          updateChooseValueCustmer(index, value, list)
        }
        ref={pickerRef}
      />
    </div>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.displayName = 'NutDatePicker'
