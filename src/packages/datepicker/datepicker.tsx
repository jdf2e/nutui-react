import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import isEqual from 'react-fast-compare'
import classNames from 'classnames'
import Picker from '@/packages/picker'
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
} from './utils'
import { DatePickerActions, DatePickerProps, DatePickerRef } from './types'
import { PickerOptions, PickerValue } from '@/packages/pickerview/types'

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

const InternalPicker: ForwardRefRenderFunction<
  DatePickerRef,
  Partial<DatePickerProps>
> = (props, ref) => {
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
    children,
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

  const classPrefix = 'nut-datepicker'
  const cls = classNames(classPrefix, className)

  const [pickerValue, setPickerValue] = useState<PickerValue[]>([])
  const [pickerOptions, setPickerOptions] = useState<PickerOptions[]>([])

  const [selectedDate, setSelectedDate] = usePropsValue<number>({
    value: props.value && formatValue(props.value, startDate, endDate),
    defaultValue:
      props.defaultValue && formatValue(props.defaultValue, startDate, endDate),
    finalValue: 0,
  })

  const [innerDate, setInnerDate] = useState<number>(selectedDate)

  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: props.visible,
    defaultValue: false,
    finalValue: false,
  })

  const actions: DatePickerActions = {
    open: () => {
      setInnerVisible(true)
    },
    close: () => {
      setInnerVisible(false)
    },
  }

  useImperativeHandle(ref, () => actions)

  const handleDateComparison = (
    newDate: Date | null,
    selectedOptions: PickerOptions,
    index: number
  ) => {
    if (newDate && isDate(newDate)) {
      if (!isEqual(new Date(selectedDate)?.getTime(), newDate?.getTime())) {
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

  const handleConfirmDateComparison = (newDate: Date | null) => {
    if (newDate && isDate(newDate)) {
      if (!isEqual(new Date(selectedDate)?.getTime(), newDate?.getTime())) {
        setSelectedDate(formatValue(newDate, startDate, endDate))
      }
    }
  }

  const handleCancel = () => {
    setInnerDate(selectedDate)
    onCancel?.()
  }

  const handleClose = () => {
    setInnerVisible(false)
    onClose?.()
  }

  const handleConfirm = (options: PickerOptions, value: PickerValue[]) => {
    handlePickerValueChange(
      options,
      value,
      0,
      type,
      defaultValue || startDate || endDate,
      handleConfirmDateComparison
    )
    onConfirm?.(options, value)
  }

  const handleChange = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[],
    index: number
  ) => {
    innerVisible &&
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

  useEffect(() => {
    setInnerDate(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    setPickerOptions(generatePickerColumns())
  }, [innerDate, startDate, endDate])

  return (
    <>
      {typeof children === 'function' && children(selectedDate)}
      <div className={cls} style={style} {...rest}>
        {pickerOptions.length && (
          <Picker
            {...pickerProps}
            title={title}
            visible={innerVisible}
            value={pickerValue}
            options={pickerOptions}
            onClose={handleClose}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            onChange={({ value, index, selectedOptions }) => {
              handleChange(selectedOptions, value, index)
            }}
            threeDimensional={threeDimensional}
          />
        )}
      </div>
    </>
  )
}

const DatePicker = React.forwardRef<DatePickerRef, Partial<DatePickerProps>>(
  InternalPicker
)
export default DatePicker
