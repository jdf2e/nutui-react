import React, { FunctionComponent, useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  TimeType,
  DateType,
  OptionKeyType,
} from '@/packages/timeselect/index.taro'

export interface TimeDetailProps extends BasicComponent {
  activeDate: string
  activeTime: DateType[]
  options: DateType[]
  optionKey: OptionKeyType
  onSelect: (time: TimeType) => void
}
const defaultProps = {
  ...ComponentDefaults,
  activeDate: '',
  activeTime: [] as DateType[],
  options: [],
  optionKey: {
    valueKey: 'value',
    textKey: 'text',
    childrenKey: 'children',
  },
  onSelect: () => {},
} as TimeDetailProps
export const TimeDetail: FunctionComponent<
  Partial<TimeDetailProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {
  const { options, optionKey, className, activeDate, activeTime, onSelect } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-timedetail'
  const timeList = useMemo(() => {
    return (
      options?.find(
        (item: DateType) => item[optionKey.valueKey] === activeDate
      ) || {
        [optionKey.childrenKey]: [],
      }
    )
  }, [options, optionKey, activeDate])
  const isActive = useCallback(
    (timeKey: string) => {
      const date = activeTime.find((item: DateType) => {
        return item[optionKey.valueKey] === activeDate
      })
      if (date?.[optionKey.childrenKey]) {
        const time = date?.[optionKey.childrenKey].find((time: TimeType) => {
          return time[optionKey.valueKey] === timeKey
        })
        return time
      }
      return false
    },
    [activeTime, optionKey, activeDate]
  )
  return (
    <div className={classNames(classPrefix, className)}>
      {timeList[optionKey.childrenKey].map((item: TimeType) => (
        <span
          className={classNames(`${classPrefix}-item`, {
            active: isActive(item[optionKey.valueKey]),
          })}
          key={item[optionKey.valueKey]}
          onClick={() => onSelect(item)}
        >
          {item[optionKey.textKey]}
        </span>
      ))}
    </div>
  )
}

TimeDetail.displayName = 'NutTimeDetail'
