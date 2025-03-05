import React, { useState, useEffect, FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import isEqual from 'react-fast-compare'
import { padZero } from '@/utils/pad-zero'
import PickerView, {
  PickerOptions,
  PickerValue,
} from '@/packages/pickerview/index.taro'
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

export const DatePickerView: FunctionComponent<Partial<DatePickerViewProps>> = (
  props
) => {
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
    defaultValue: defaultValue && formatValue(defaultValue, startDate, endDate),
    finalValue: 0,
  })

  const handleDateComparison = (
    newDate: Date | null,
    selectedOptions: PickerOptions,
    index: number
  ) => {
    if (newDate && isDate(newDate)) {
      if (!isEqual(new Date(selectedDate)?.getTime(), newDate?.getTime())) {
        setSelectedDate(formatValue(newDate, startDate, endDate))
        onChange?.(
          selectedOptions,
          [
            String(newDate.getFullYear()),
            padZero(newDate.getMonth() + 1),
            padZero(newDate.getDate()),
          ],
          index
        )
      }
    }
  }

  const handleChange = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[],
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
      selectedDate,
      startDate,
      endDate
    )

    const columns = dateRanges.map((rangeConfig, columnIndex) => {
      const { type: columnType, range } = rangeConfig
      const selectedValue = getDatePartValue(columnType, selectedDate)

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

  useEffect(() => {
    if (
      !isEqual(
        new Date(selectedDate)?.getTime(),
        new Date(selectedDate)?.getTime()
      )
    ) {
      setSelectedDate(selectedDate)
    }
  }, [selectedDate])

  useEffect(() => {
    setPickerOptions(generatePickerColumns())
  }, [selectedDate, startDate, endDate])

  return (
    <View className={cls} style={style}>
      {pickerOptions.length && (
        <PickerView
          value={pickerValue}
          options={pickerOptions}
          onChange={({ selectedOptions, value, index }) => {
            handleChange(selectedOptions, value, index)
          }}
          threeDimensional={threeDimensional}
        />
      )}
    </View>
  )
}

DatePickerView.displayName = 'NutDatePickerView'
