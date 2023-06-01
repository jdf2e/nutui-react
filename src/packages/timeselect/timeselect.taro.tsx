import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup/index.taro'
import TimePannel from '@/packages/timepannel/index.taro'
import TimeDetail from '@/packages/timedetail/index.taro'
import { TimeType } from '@/packages/timedetail/timedetail.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface DateType {
  paneKey?: string | number
  date: string
}
export interface TimeSelectProps extends BasicComponent {
  visible?: boolean
  height?: string
  multiple?: boolean
  title?: string
  currentKey: string | number
  currentTime: TimeType[]
  dates: DateType[]
  times: TimeType[]
  select?: (selectTimeData: TimeType[]) => void
  pannelChange?: (
    pannelKey: string | number,
    selectTimeData: TimeType[]
  ) => void
  timeChange?: (time: string, selectTimeData: TimeType[]) => void
  onSelect?: (selectTimeData: TimeType[]) => void
  onPannelChange?: (
    pannelKey: string | number,
    selectTimeData: TimeType[]
  ) => void
  onTimeChange?: (time: string, selectTimeData: TimeType[]) => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  height: '20%',
  multiple: false,
  currentKey: 0,
  currentTime: [],
  title: '取件时间',
  dates: [],
  times: [],
} as TimeSelectProps
export const TimeSelect: FunctionComponent<Partial<TimeSelectProps>> = (
  props
) => {
  const {
    visible,
    className,
    height,
    title,
    currentKey,
    currentTime,
    dates,
    times,
    multiple,
    select,
    pannelChange,
    timeChange,
    onSelect,
    onPannelChange,
    onTimeChange,
  } = {
    ...defaultProps,
    ...props,
  }
  const [activeKey, setActiveKey] = useState<string | number>(currentKey)
  const [activeTime, setActiveTime] = useState<TimeType[]>(
    currentTime.length
      ? currentTime
      : [
          {
            key: currentKey,
            list: [],
          },
        ]
  )
  const [popVisible, setPopVisible] = useState(visible)
  const popStyle = {
    width: '100%',
    height,
  }
  const classPrefix = 'nut-timeselect'

  // popup 的关闭回调, 执行 select 函数更改外部 visible
  const closeFun = () => {
    if (onSelect) {
      onSelect(activeTime)
    } else if (select) {
      select(activeTime)
    }
  }
  // 选择配送时间回调
  const handleSelectTime = (time: string) => {
    let curTimeData = {} as TimeType
    let curIndex: string | number = -1
    for (let i = 0; i < activeTime.length; i++) {
      if (String(activeTime[i].key) === String(activeKey)) {
        curTimeData = activeTime[i]
        curIndex = i
        break
      }
    }
    const curTimeIndex = curTimeData.list.findIndex(
      (item: string) => String(item) === String(time)
    )
    if (curTimeIndex === -1) {
      curTimeData.list.push(time)
    } else {
      curTimeData.list.splice(curTimeIndex, 1)
    }
    const resultTimeData = [...activeTime]
    resultTimeData.splice(curIndex, 1, curTimeData)
    setActiveTime(resultTimeData)
    if (onTimeChange) {
      onTimeChange(time, resultTimeData)
    } else if (timeChange) {
      timeChange(time, resultTimeData)
    }
  }
  // 选择日期的回调
  const handleChange = (pannelKey: string | number) => {
    const resultTimeData: TimeType[] = [...activeTime]
    if (String(pannelKey) !== String(activeKey)) {
      setActiveKey?.(pannelKey)
      if (multiple) {
        const curTimeDataIndex = activeTime.findIndex(
          (item: TimeType) => String(item.key) === String(pannelKey)
        )
        if (curTimeDataIndex === -1) {
          resultTimeData.push({
            key: pannelKey,
            list: [],
          } as TimeType)
          setActiveTime(resultTimeData)
        }
      } else {
        setActiveTime([
          {
            key: pannelKey,
            list: [],
          } as TimeType,
        ])
      }
    }
    if (onPannelChange) {
      onPannelChange(pannelKey, resultTimeData)
    } else if (pannelChange) {
      pannelChange(pannelKey, resultTimeData)
    }
  }
  // 选中的日期增加 active 类名
  const getTimePannelClass = (dataItem: DateType) => {
    if (String(dataItem['paneKey']) === String(activeKey)) {
      return 'nut-timepannel-active'
    }
    return ''
  }
  // 根据外部传入 visible 进行组件的显隐展示
  useEffect(() => {
    setPopVisible(visible)
  }, [visible])
  return (
    <>
      <Popup
        closeable
        round
        visible={popVisible}
        position="bottom"
        style={popStyle}
        onClose={() => {
          closeFun()
        }}
      >
        <div className={classNames(classPrefix, className)}>
          <div className="nut-timeselect__title">{title}</div>
          <div className="nut-timeselect__content">
            <div className="nut-timeselect__content-left">
              {dates.map((dataItem: DateType, index: number) => (
                <TimePannel
                  date={dataItem.date}
                  className={getTimePannelClass(dataItem)}
                  key={String(dataItem['paneKey'] || index)}
                  curKey={String(dataItem['paneKey'] || index)}
                  change={handleChange}
                />
              ))}
            </div>
            <TimeDetail
              times={times}
              currentKey={String(activeKey)}
              currentTime={activeTime}
              select={handleSelectTime}
            />
          </div>
        </div>
      </Popup>
    </>
  )
}

TimeSelect.defaultProps = defaultProps
TimeSelect.displayName = 'NutTimeSelect'
