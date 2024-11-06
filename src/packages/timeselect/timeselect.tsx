import React, { FunctionComponent, ReactNode, useState } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import TimeDetail from '@/packages/timedetail'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useConfig } from '@/packages/configprovider'

export interface TimeType {
  value?: string
  text?: string
  [prop: string]: any
}

export interface DateType {
  value?: string
  text?: string
  children?: TimeType[]
  [prop: string]: any
}

export interface OptionKeyType {
  valueKey: string
  textKey: string
  childrenKey: string
}

export interface TimeSelectProps extends BasicComponent {
  visible: boolean
  multiple?: boolean
  title?: ReactNode
  defaultValue: DateType[]
  options: DateType[]
  optionKey: OptionKeyType
  onSelect?: (value: DateType[]) => void
  onDateChange?: (date: DateType, value: DateType[]) => void
  onTimeChange?: (time: TimeType, value: DateType[]) => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  multiple: false,
  defaultValue: [],
  options: [],
  optionKey: {
    valueKey: 'value',
    textKey: 'text',
    childrenKey: 'children',
  },
} as TimeSelectProps
export const TimeSelect: FunctionComponent<Partial<TimeSelectProps>> = (
  props
) => {
  const { locale } = useConfig()
  const {
    visible,
    className,
    style,
    title,
    defaultValue,
    options,
    optionKey,
    multiple,
    onSelect,
    onDateChange,
    onTimeChange,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [activeDate, setActiveDate] = useState<string>(() => {
    // 设置 defaultValue 时，默认展示选中的第一个 date
    if (defaultValue?.length) {
      return defaultValue[0][optionKey.valueKey]
    }
    // 否则展示 options 中第一个 date
    if (options?.length) {
      return options[0][optionKey.valueKey]
    }
    return ''
  })
  const [activeTime, setActiveTime] = useState<DateType[]>(
    () => defaultValue || []
  )
  const classPrefix = 'nut-timeselect'
  const closeFun = () => {
    onSelect && onSelect(activeTime)
  }
  const handleSelectTime = (selectTime: TimeType) => {
    let newActiveTime = [...activeTime]
    const date = newActiveTime.find((item: DateType) => {
      return item[optionKey.valueKey] === activeDate
    })
    if (date) {
      const timeIndex = date[optionKey.childrenKey].findIndex(
        (time: TimeType) => {
          return time[optionKey.valueKey] === selectTime[optionKey.valueKey]
        }
      )
      if (timeIndex > -1) {
        if (multiple) {
          date[optionKey.childrenKey].splice(timeIndex, 1)
        } else {
          newActiveTime = []
        }
      } else if (multiple) {
        date[optionKey.childrenKey].push({ ...selectTime })
      } else {
        newActiveTime = [
          {
            [optionKey.valueKey]: activeDate,
            [optionKey.childrenKey]: [{ ...selectTime }],
          },
        ]
      }
    } else if (multiple) {
      newActiveTime.push({
        [optionKey.valueKey]: activeDate,
        [optionKey.childrenKey]: [{ ...selectTime }],
      })
    } else {
      newActiveTime = [
        {
          [optionKey.valueKey]: activeDate,
          [optionKey.childrenKey]: [{ ...selectTime }],
        },
      ]
    }
    newActiveTime = newActiveTime.filter((item: DateType) => {
      return item[optionKey.childrenKey]?.length > 0
    })
    setActiveTime(newActiveTime)
    onTimeChange && onTimeChange(selectTime, newActiveTime)
  }
  const handleChange = (date: DateType) => {
    setActiveDate(date[optionKey.valueKey])
    onDateChange && onDateChange(date, activeTime)
  }
  return (
    <Popup
      closeable
      round
      visible={visible}
      position="bottom"
      title={title || locale.timeselect.pickupTime}
      style={{
        width: '100%',
        height: '20%',
        ...style,
      }}
      onClose={closeFun}
      {...rest}
    >
      <div className={classNames(classPrefix, className)}>
        <div className={`${classPrefix}-content`}>
          <div className={`${classPrefix}-content-left`}>
            {options.map((item: DateType) => (
              <div
                key={item[optionKey.valueKey]}
                className={classNames('nut-timepannel', {
                  active: item[optionKey.valueKey] === activeDate,
                })}
                onClick={() => handleChange(item)}
              >
                {item[optionKey.textKey]}
              </div>
            ))}
          </div>
          <TimeDetail
            options={options}
            optionKey={optionKey}
            activeDate={activeDate}
            activeTime={activeTime}
            onSelect={handleSelectTime}
          />
        </div>
      </div>
    </Popup>
  )
}

TimeSelect.displayName = 'NutTimeSelect'
