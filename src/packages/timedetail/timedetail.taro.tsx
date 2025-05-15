import React, { FunctionComponent, useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import {
  TaroTimeSelectDetailProps,
  TimeSelectDateType,
  TimeType,
} from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  activeDate: '',
  activeTime: [] as TimeSelectDateType[],
  options: [],
  optionKey: {
    valueKey: 'value',
    textKey: 'text',
    childrenKey: 'children',
  },
  onSelect: () => {},
} as TaroTimeSelectDetailProps
export const TimeDetail: FunctionComponent<
  Partial<TaroTimeSelectDetailProps> &
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
        (item: TimeSelectDateType) => item[optionKey.valueKey] === activeDate
      ) || {
        [optionKey.childrenKey]: [],
      }
    )
  }, [options, optionKey, activeDate])
  const isActive = useCallback(
    (timeKey: string) => {
      const date = activeTime.find((item: TimeSelectDateType) => {
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
    <View className={classNames(classPrefix, className)}>
      {timeList[optionKey.childrenKey].map((item: TimeType) => (
        <View
          className={classNames(`${classPrefix}-item`, {
            active: isActive(item[optionKey.valueKey]),
          })}
          key={item[optionKey.valueKey]}
          onClick={() => onSelect(item)}
        >
          {item[optionKey.textKey]}
        </View>
      ))}
    </View>
  )
}

TimeDetail.displayName = 'NutTimeDetail'
