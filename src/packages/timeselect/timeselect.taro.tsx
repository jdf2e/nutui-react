import React, { FunctionComponent, ReactNode, useState } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import TimeDetail from '@/packages/timedetail/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

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
  title: '取件时间',
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
  const [activeDate, setActiveDate] = useState<string>(() =>
    defaultValue?.length ? defaultValue[0][optionKey.valueKey] : ''
  )
  const [activeTime, setActiveTime] = useState<DateType[]>(
    () => defaultValue || []
  )
  const classPrefix = 'nut-timeselect'
  const closeFun = () => {
    onSelect && onSelect(activeTime)
  }
  // 选择配送时间回调
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
        date[optionKey.childrenKey].splice(timeIndex, 1)
      } else {
        date[optionKey.childrenKey].push({ ...selectTime })
      }
    } else {
      newActiveTime.push({
        [optionKey.valueKey]: activeDate,
        [optionKey.childrenKey]: [{ ...selectTime }],
      })
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
      style={{
        width: '100%',
        height: '20%',
        ...style,
      }}
      onClose={closeFun}
      {...rest}
    >
      <div className={classNames(classPrefix, className)}>
        <div className={`${classPrefix}__title`}>{title}</div>
        <div className={`${classPrefix}__content`}>
          <div className={`${classPrefix}__content-left`}>
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

TimeSelect.defaultProps = defaultProps
TimeSelect.displayName = 'NutTimeSelect'
