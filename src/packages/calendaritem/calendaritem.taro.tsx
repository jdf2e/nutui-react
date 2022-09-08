import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import Utils from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { getRectByTaro } from '../../utils/useClientRect'

type InputDate = string | string[]

interface Day {
  day: string | number
  type: string
}

interface MonthInfo {
  curData: string[] | string
  title: string
  monthData: Day[]
}

interface CalendarState {
  currDate: InputDate
  touchParams: any
  transformY: number
  translateY: number
  scrollDistance: number
  defaultData: InputDate
  chooseData: any
  dayPrefix: string
  startData: InputDate
  endData: InputDate
  isRange: boolean
  timer: number
  monthsData: MonthInfo[]
}

export interface CalendarItemProps {
  type?: string
  isAutoBackFill?: boolean
  poppable?: boolean
  visible?: boolean
  title?: string
  defaultValue: InputDate
  startDate?: InputDate
  endDate?: InputDate
  onChoose?: (data: any) => void
  onUpdate?: () => void
  onClose?: () => void
}
const defaultProps = {
  type: 'one',
  isAutoBackFill: false,
  poppable: true,
  visible: false,
  title: '日历选择',
  defaultValue: '',
  startDate: Utils.getDay(0),
  endDate: Utils.getDay(365),
  onChoose: (data: any) => {},
  onUpdate: () => {},
  onClose: () => {},
} as CalendarItemProps

export const CalendarItem: FunctionComponent<
  Partial<CalendarItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    type,
    isAutoBackFill,
    poppable,
    title,
    defaultValue,
    startDate,
    endDate,
    onChoose,
    onUpdate,
    onClose,
  } = { ...defaultProps, ...props }

  const weeks = locale.calendaritem.weekdays
  const [yearMonthTitle, setYearMonthTitle] = useState('')
  const [unLoadPrev, setUnLoadPrev] = useState(false)
  const [monthsData, setMonthsData] = useState<MonthInfo[]>([])

  const [state] = useState<CalendarState>({
    currDate: '',
    touchParams: {
      startY: 0,
      endY: 0,
      startTime: 0,
      endTime: 0,
      lastY: 0,
      lastTime: 0,
    },
    transformY: 0,
    translateY: 0,
    scrollDistance: 0,
    defaultData: [],
    chooseData: [],
    monthsData: [],
    dayPrefix: 'calendar-month-day',
    startData: '',
    endData: '',
    isRange: type === 'range',
    timer: 0,
  })

  const weeksPanel = useRef<HTMLDivElement>(null)
  const months = useRef<HTMLDivElement>(null)
  const monthsPanel = useRef<HTMLDivElement>(null)

  const b = bem('calendar')

  const classes = classNames(
    {
      [`${b('')}-tile`]: !poppable,
      [`${b('')}-nofooter`]: !!isAutoBackFill,
    },
    b('')
  )

  const headerClasses = classNames({
    [`${b('')}-header`]: true,
    [`${b('')}-header-tile`]: !poppable,
  })

  const monthitemclasses = classNames({
    'calendar-month-item': true,
    [`${type === 'range' ? 'month-item-range' : ''}`]: true,
  })

  const splitDate = (date: string) => {
    return date.split('-')
  }

  const isStart = (currDate: string) => {
    return Utils.isEqual(state.currDate[0], currDate)
  }

  const isEnd = (currDate: string) => {
    return Utils.isEqual(state.currDate[1], currDate)
  }

  const getCurrDate = (day: Day, month: MonthInfo, isRange?: boolean) => {
    return isRange
      ? `${month.curData[3]}-${month.curData[4]}-${Utils.getNumTwoBit(
          +day.day
        )}`
      : `${month.curData[0]}-${month.curData[1]}-${Utils.getNumTwoBit(
          +day.day
        )}`
  }

  const getClass = (day: Day, month: MonthInfo, isRange?: boolean) => {
    const currDate = getCurrDate(day, month, isRange)
    if (day.type === 'curr') {
      if (
        (!state.isRange && Utils.isEqual(state.currDate as string, currDate)) ||
        (state.isRange && (isStart(currDate) || isEnd(currDate)))
      ) {
        return `${state.dayPrefix}-active`
      }
      if (
        (startDate && Utils.compareDate(currDate, startDate as string)) ||
        (endDate && Utils.compareDate(endDate as string, currDate))
      ) {
        return `${state.dayPrefix}-disabled`
      }
      if (
        state.isRange &&
        Array.isArray(state.currDate) &&
        Object.values(state.currDate).length === 2 &&
        Utils.compareDate(state.currDate[0], currDate) &&
        Utils.compareDate(currDate, state.currDate[1])
      ) {
        return `${state.dayPrefix}-choose`
      }
      return null
    }
    return `${state.dayPrefix}-disabled`
  }

  const isActive = (day: Day, month: MonthInfo) => {
    return (
      state.isRange &&
      day.type === 'curr' &&
      getClass(day, month) === 'calendar-month-day-active'
    )
  }

  const isCurrDay = (month: MonthInfo, day: string | number) => {
    const date = `${month.curData[0]}-${month.curData[1]}-${day}`
    return Utils.isEqual(date, Utils.date2Str(new Date()))
  }

  const confirm = () => {
    if ((state.isRange && state.chooseData.length === 2) || !state.isRange) {
      onChoose && onChoose(state.chooseData)
      if (poppable) {
        onUpdate && onUpdate()
      }
    }
  }

  const chooseDay = (
    day: Day,
    month: MonthInfo,
    isFirst?: boolean,
    isRange?: boolean
  ) => {
    if (getClass(day, month, isRange) !== `${state.dayPrefix}-disabled`) {
      let days = [...month.curData]
      days = isRange ? days.splice(3) : days.splice(0, 3)
      days[2] =
        typeof day.day === 'number' ? Utils.getNumTwoBit(day.day) : day.day
      days[3] = `${days[0]}-${days[1]}-${days[2]}`
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2])
      if (!state.isRange) {
        state.currDate = days[3]
        state.chooseData = [...days]
      } else {
        if (Object.values(state.currDate).length === 2) {
          state.currDate = [days[3]]
        } else if (Utils.compareDate(state.currDate[0], days[3])) {
          Array.isArray(state.currDate) && state.currDate.push(days[3])
        } else {
          Array.isArray(state.currDate) && state.currDate.unshift(days[3])
        }

        if (state.chooseData.length === 2 || !state.chooseData.length) {
          state.chooseData = [...days]
        } else if (Utils.compareDate(state.chooseData[3], days[3])) {
          state.chooseData = [[...state.chooseData], [...days]]
        } else {
          state.chooseData = [[...days], [...state.chooseData]]
        }
      }

      if (isAutoBackFill && !isFirst) {
        confirm()
      }

      setMonthsData(state.monthsData.slice())
    }
  }

  const isStartTip = (day: Day, month: MonthInfo) => {
    if (isActive(day, month)) {
      return isStart(getCurrDate(day, month))
    }
    return false
  }

  // 是否有结束提示
  const isEndTip = (day: Day, month: MonthInfo) => {
    if (isStartTip(day, month)) {
      return false
    }
    return isActive(day, month)
  }

  // 获取当前月数据
  const getCurrData = (type: string) => {
    const monthData =
      type === 'prev'
        ? state.monthsData[0]
        : state.monthsData[state.monthsData.length - 1]
    let year = parseInt(monthData.curData[0])
    let month = parseInt(monthData.curData[1].toString().replace(/^0/, ''))
    switch (type) {
      case 'prev':
        month === 1 && (year -= 1)
        month = month === 1 ? 12 : --month
        break
      case 'next':
        month === 12 && (year += 1)
        month = month === 12 ? 1 : ++month
        break
      default:
        break
    }
    return [
      year,
      Utils.getNumTwoBit(month),
      Utils.getMonthDays(String(year), String(month)),
    ]
  }

  // 获取日期状态
  const getDaysStatus = (days: number, type: string) => {
    // 修复：当某个月的1号是周日时，月份下方会空出来一行
    if (type === 'prev' && days >= 7) {
      days -= 7
    }
    return Array.from(Array(days), (v, k) => {
      return {
        day: k + 1,
        type,
      }
    })
  }

  // 获取月数据
  const getMonth = (curData: string[], type: string) => {
    const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1])
    const currMonthDays = Utils.getMonthDays(curData[0], curData[1])
    const title = {
      year: curData[0],
      month: curData[1],
    }
    const monthInfo: MonthInfo = {
      curData,
      title: locale.calendaritem.monthTitle(title.year, title.month),
      monthData: [
        ...(getDaysStatus(preMonthDays, 'prev') as Day[]),
        ...(getDaysStatus(currMonthDays, 'curr') as Day[]),
      ],
    }
    if (type === 'next') {
      if (
        !state.endData ||
        !Utils.compareDate(
          `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(
            state.endData[0],
            state.endData[1]
          )}`,
          `${curData[0]}-${curData[1]}-${curData[2]}`
        )
      ) {
        state.monthsData.push(monthInfo)
      }
    } else if (
      !state.startData ||
      !Utils.compareDate(
        `${curData[0]}-${curData[1]}-${curData[2]}`,
        `${state.startData[0]}-${state.startData[1]}-01`
      )
    ) {
      state.monthsData.unshift(monthInfo)
    } else {
      setUnLoadPrev(true)
    }

    setMonthsData(state.monthsData)
  }

  // 监听月份滚动，改变月份标题
  const loadScroll = () => {
    if (!props.poppable) {
      return false
    }
    requestAniFrame(async () => {
      if (weeksPanel?.current && monthsPanel?.current) {
        const weeksPanelRes = await getRectByTaro(weeksPanel?.current)
        const top = weeksPanelRes?.bottom
        const monthsDoms =
          monthsPanel.current.getElementsByClassName('calendar-month')
        for (let i = 0; i < monthsDoms.length; i++) {
          const setTitles = async (monthDoms: any) => {
            const monthsDomsRes = await getRectByTaro(monthDoms)
            if (monthsDomsRes?.top <= top && monthsDomsRes?.bottom >= top) {
              setYearMonthTitle(state.monthsData[i].title)
            } else if (state.scrollDistance === 0) {
              setYearMonthTitle(state.monthsData[0].title)
            }
          }
        }
      }
    })
  }

  // 设置月份滚动距离和速度
  const setTransform = (translateY = 0, type?: string, time = 1000) => {
    if (monthsPanel?.current) {
      if (type === 'end') {
        monthsPanel.current.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`
        clearTimeout(state.timer)
        state.timer = setTimeout(() => {
          loadScroll()
        }, time)
      } else {
        monthsPanel.current.style.webkitTransition = ''
        loadScroll()
      }
      monthsPanel.current.style.webkitTransform = `translateY(${translateY}px)`
      state.scrollDistance = translateY
    }
  }

  // 计算滚动方向和距离
  const setMove = (move: number, type?: string, time?: number) => {
    let updateMove = move + state.transformY
    const h = months.current?.offsetHeight || 0
    const offsetHeight = monthsPanel.current?.offsetHeight || 0
    if (type === 'end') {
      // 限定滚动距离
      if (updateMove > 0) {
        updateMove = 0
      }
      if (updateMove < 0 && updateMove < -offsetHeight + h) {
        updateMove = -offsetHeight + h
      }
      if (offsetHeight <= h && state.monthsData.length === 1) {
        updateMove = 0
      }
      setTransform(updateMove, type, time)
    } else {
      if (updateMove > 0 && updateMove > 100) {
        updateMove = 100
      }
      if (updateMove < -offsetHeight + h - 100 && state.monthsData.length > 1) {
        updateMove = -offsetHeight + h - 100
      }
      if (
        updateMove < 0 &&
        updateMove < -100 &&
        state.monthsData.length === 1
      ) {
        updateMove = -100
      }
      setTransform(updateMove)
    }
  }

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    event.stopPropagation()
    const changedTouches = event.changedTouches[0]
    state.touchParams.startY = changedTouches.pageY
    state.touchParams.startTime = event.timeStamp || Date.now()
    state.transformY = state.scrollDistance
  }

  const onTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    event.stopPropagation()
    const changedTouches = event.changedTouches[0]
    state.touchParams.lastY = changedTouches.pageY
    state.touchParams.lastTime = event.timeStamp || Date.now()
    const move = state.touchParams.lastY - state.touchParams.startY
    if (Math.abs(move) < 5) {
      return false
    }
    setMove(move)
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    event.stopPropagation()
    const changedTouches = event.changedTouches[0]
    state.touchParams.lastY = changedTouches.pageY
    state.touchParams.lastTime = event.timeStamp || Date.now()
    let move = state.touchParams.lastY - state.touchParams.startY
    if (Math.abs(move) < 5) {
      return false
    }
    const updateMove = move + state.transformY
    const h = months.current?.offsetHeight || 0
    const offsetHeight = monthsPanel.current?.offsetHeight || 0
    if (updateMove > 0) {
      getMonth(getCurrData('prev') as string[], 'prev')
    } else if (
      updateMove < 0 &&
      updateMove < -offsetHeight + (Math.abs(move) > h ? Math.abs(move) : h) * 5
    ) {
      getMonth(getCurrData('next') as string[], 'next')
      if (Math.abs(move) >= 300) {
        getMonth(getCurrData('next') as string[], 'next')
      }
    }

    let moveTime = state.touchParams.lastTime - state.touchParams.startTime
    if (moveTime <= 300) {
      move *= 2
      moveTime += 1000
      setMove(move, 'end', moveTime)
    } else {
      setMove(move, 'end')
    }
  }

  const initData = () => {
    // 初始化开始结束数据
    state.startData = startDate ? splitDate(startDate as string) : ''
    state.endData = endDate ? splitDate(endDate as string) : ''
    // 初始化当前日期
    if (!defaultValue) {
      state.currDate = state.isRange
        ? [Utils.date2Str(new Date()), Utils.getDay(1)]
        : Utils.date2Str(new Date())
    } else {
      state.currDate = state.isRange ? [...defaultValue] : defaultValue
    }

    // 日期转化为数组
    if (state.isRange && Array.isArray(state.currDate)) {
      if (
        startDate &&
        Utils.compareDate(state.currDate[0], startDate as string)
      ) {
        state.currDate.splice(0, 1, startDate as string)
      }
      if (endDate && Utils.compareDate(endDate as string, state.currDate[1])) {
        state.currDate.splice(1, 1, endDate as string)
      }
      state.defaultData = [
        ...splitDate(state.currDate[0]),
        ...splitDate(state.currDate[1]),
      ]
    } else {
      if (
        startDate &&
        Utils.compareDate(state.currDate as string, startDate as string)
      ) {
        state.currDate = startDate
      } else if (
        endDate &&
        !Utils.compareDate(state.currDate as string, endDate as string)
      ) {
        state.currDate = endDate
      }

      state.defaultData = [...splitDate(state.currDate as string)]
    }

    getMonth(state.defaultData, 'next')
    setYearMonthTitle(state.monthsData[0].title)

    let i = 1
    do {
      getMonth(getCurrData('next') as string[], 'next')
    } while (i++ < 4)

    if (state.isRange) {
      chooseDay(
        { day: state.defaultData[2], type: 'curr' },
        state.monthsData[0],
        true
      )
      chooseDay(
        { day: state.defaultData[5], type: 'curr' },
        state.monthsData[0],
        true,
        true
      )
    } else {
      chooseDay(
        { day: state.defaultData[2], type: 'curr' },
        state.monthsData[0],
        true
      )
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <div className={classes}>
        {/* header */}
        <div className={headerClasses}>
          {poppable ? (
            <>
              <div className="calendar-title">{locale.calendaritem.title}</div>
              <div className="calendar-curr-month">{yearMonthTitle}</div>
            </>
          ) : (
            ''
          )}
          <div className="calendar-weeks" ref={weeksPanel}>
            {weeks.map((item: string) => (
              <div className="calendar-week-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* content */}
        <div
          className="nut-calendar-content"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={months}
        >
          <div className="calendar-months-panel" ref={monthsPanel}>
            <div className="calendar-loading-tip">
              {!unLoadPrev
                ? locale.calendaritem.loadPreviousMonth
                : locale.calendaritem.noEarlierMonth}
            </div>
            {monthsData.map((month: any, key: number) => (
              <div className="calendar-month" key={key}>
                <div className="calendar-month-title">{month.title}</div>
                <div className="calendar-month-con">
                  <div className={monthitemclasses}>
                    {month.monthData &&
                      month.monthData.map((day: Day, index: number) => (
                        <div
                          className={[
                            'calendar-month-day',
                            getClass(day, month),
                          ].join(' ')}
                          key={index}
                          onClick={() => {
                            chooseDay(day, month)
                          }}
                        >
                          <div className="calendar-day">
                            {day.type === 'curr' ? day.day : ''}
                          </div>
                          {isCurrDay(month, day.day) ? (
                            <div className="calendar-curr-tips">
                              {locale.calendaritem.today}
                            </div>
                          ) : (
                            ''
                          )}
                          {isStartTip(day, month) ? (
                            <div className="calendar-day-tip">
                              {locale.calendaritem.start}
                            </div>
                          ) : (
                            ''
                          )}
                          {isEndTip(day, month) ? (
                            <div className="calendar-day-tip">
                              {locale.calendaritem.end}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* footer */}
        {poppable && !isAutoBackFill ? (
          <div className="nut-calendar-footer">
            <div className="calendar-confirm-btn" onClick={confirm}>
              {locale.confirm}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

CalendarItem.defaultProps = defaultProps
CalendarItem.displayName = 'NutCalendarItem'
