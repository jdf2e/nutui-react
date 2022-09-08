import React, { FunctionComponent, useEffect, useState } from 'react'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export interface TimeType {
  key?: string | number
  list: string[]
}
export interface TimeDetailProps {
  className?: string
  currentKey: string | number
  currentTime: TimeType[]
  times: TimeType[]
  select: (time: string) => void
}
const defaultProps = {
  className: '',
  currentKey: 0,
  currentTime: [] as TimeType[],
  times: [],
  select: () => null,
} as TimeDetailProps
export const TimeDetail: FunctionComponent<
  Partial<TimeDetailProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children, times, className, currentKey, currentTime, select } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('timedetail')
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
    select(time)
  }
  // 选中的配送时间增加 active 类名
  const getDetailClass = (item: string): string => {
    let initClass = 'nut-timedetail__item'
    const curTimeData = currentTime.find(
      (item: TimeType) => String(item.key) === String(currentKey)
    )
    if (curTimeData && curTimeData.list && curTimeData.list.includes(item)) {
      initClass += ' nut-timedetail__item-active'
    }
    return initClass
  }
  return (
    <div className={`${b()} ${className || ''}`}>
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
