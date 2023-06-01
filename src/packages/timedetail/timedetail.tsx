import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TimeType {
  key?: string | number
  list: string[]
}
export interface TimeDetailProps extends BasicComponent {
  currentKey: string | number
  currentTime: TimeType[]
  times: TimeType[]
  onSelect: (time: string) => void
}
const defaultProps = {
  ...ComponentDefaults,
  currentKey: 0,
  currentTime: [] as TimeType[],
  times: [],
  onSelect: () => null,
} as TimeDetailProps
export const TimeDetail: FunctionComponent<
  Partial<TimeDetailProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {
  const { times, className, currentKey, currentTime, onSelect } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-timedetail'
  const [renderData, setRenderData] = useState<string[]>([])
  useEffect(() => {
    const currentData = times.find(
      (timesItem: TimeType) => String(timesItem.key) === String(currentKey)
    )
    const renderData = currentData ? currentData.list : []
    // 根据选中的日期回显当前日期可配送的时间
    setRenderData(renderData)
  }, [times, currentKey])
  // 选中时间的回调
  const handleTime = (time: string) => {
    onSelect(time)
  }
  // 选中的配送时间增加 active 类名
  const getDetailClass = (item: string): string => {
    let initClass = `${classPrefix}__item`
    const curTimeData = currentTime.find(
      (item: TimeType) => String(item.key) === String(currentKey)
    )
    if (curTimeData && curTimeData.list && curTimeData.list.includes(item)) {
      initClass += `${classPrefix}__item-active`
    }
    return initClass
  }
  return (
    <div className={classNames(classPrefix, className)}>
      {renderData.map((item: string, index: number) => (
        <span
          className={getDetailClass(item)}
          key={item}
          onClick={() => handleTime(item)}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

TimeDetail.defaultProps = defaultProps
TimeDetail.displayName = 'NutTimeDetail'
