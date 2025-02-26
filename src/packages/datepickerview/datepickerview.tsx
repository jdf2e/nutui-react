import React, { useState, useEffect, FunctionComponent } from 'react'
import classNames from 'classnames'
import { PickerOptions, PickerValue } from '@/packages/pickerview/index'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/hooks/use-props-value'
import { ComponentDefaults } from '@/utils/typings'
import { isDate } from '@/utils/is-date'
import {
  formatValue,
  generateDatePickerRanges,
  generatePickerColumnWithCallback,
  getDatePartValue,
  handlePickerValueChange,
} from '@/packages/datepicker/utils'
import { DatePickerViewProps } from './types'

const currentYear = new Date().getFullYear()

const defaultProps = {
  ...ComponentDefaults,
  type: 'date',
  showChinese: false,
  threeDimensional: true,
  minuteStep: 1,
  startDate: new Date(currentYear - 10, 0, 1),
  endDate: new Date(currentYear + 10, 11, 31),
} as DatePickerViewProps

export const DatePickerView: FunctionComponent<
  Partial<DatePickerViewProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    startDate,
    endDate,
    type,
    showChinese,
    minuteStep,
    defaultValue,
    formatter,
    filter,
    onChange,
    threeDimensional,
    className,
    style,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-datepickerview'
  const cls = classNames(classPrefix, className)

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

  const [pickerValue, setPickerValue] = useState<PickerValue[]>([])
  const [pickerOptions, setPickerOptions] = useState<PickerOptions[]>([])

  const [selectedDate, setSelectedDate] = usePropsValue<number>({
    value: props.value && formatValue(props.value, startDate, endDate),
    defaultValue:
      props.defaultValue && formatValue(props.defaultValue, startDate, endDate),
    finalValue: 0,
  })

  const [innerDate, setInnerDate] = useState<number>(selectedDate)

  const handleDateComparison = (
    newDate: Date | null,
    selectedOptions: PickerOptions,
    index: number
  ) => {
    const isEqual = new Date(innerDate)?.getTime() === newDate?.getTime()
    if (newDate && isDate(newDate)) {
      if (!isEqual) {
        setInnerDate(formatValue(newDate, startDate, endDate))
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

  const handleChange = (
    selectedOptions: PickerOptions,
    selectedValue: (string | number)[],
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

  const generatePickerColumns = (): PickerOptions[] => {
    const dateRanges = generateDatePickerRanges(
      type,
      innerDate,
      startDate,
      endDate
    )

    const columns = dateRanges.map((rangeConfig, columnIndex) => {
      const { type: columnType, range } = rangeConfig
      const selectedValue = getDatePartValue(columnType, innerDate)

      const pickerColumn = generatePickerColumnWithCallback(
        range[0],
        range[1],
        selectedValue,
        columnType,
        minuteStep,
        (selectedIndex, options) => {
          pickerValue[columnIndex] = options[selectedIndex]?.value
          setPickerValue([...pickerValue])
        },
        showChinese,
        zhCNType,
        formatter
      )

      if (filter?.(columnType, pickerColumn)) {
        return filter(columnType, pickerColumn)
      }

      return pickerColumn
    })

    return columns || []
  }

  //   useEffect(() => {
  //     setInnerDate(selectedDate)
  //   }, [selectedDate])

  useEffect(() => {
    console.log('ssss', innerDate)
    setPickerOptions(generatePickerColumns())
  }, [innerDate, startDate, endDate])
  console.log('pickerValue', pickerValue, pickerOptions)
  return (
    <>
      <div className={cls} style={style}>
        {pickerOptions.length && (
          <DatePickerView
            value={pickerValue}
            options={pickerOptions}
            // onChange={(
            //   options: PickerOptions,
            //   value: (string | number)[],
            //   index: number
            // ) => handleChange(options, value, index)}
            threeDimensional={threeDimensional}
          />
        )}
      </div>
    </>
  )
}

DatePickerView.displayName = 'NutDatePickerView'
