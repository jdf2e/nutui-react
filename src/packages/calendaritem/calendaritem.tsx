import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import Utils from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider'

type CalendarRef = {
  scrollToDate: (date: string) => void
}
type InputDate = string | string[]

interface Day {
  day: string | number
  type: string
}

interface MonthInfo {
  curData: string[] | string
  title: string
  monthData: Day[]
  cssHeight?: number
  cssScrollHeight?: number
}

interface CalendarState {
  currDate: InputDate
  touchParams: any
  transformY: number
  scrollDistance: number
  defaultData: InputDate
  chooseData: any
  dayPrefix: string
  startData: InputDate
  endData: InputDate
  isRange: boolean
  timer: number
  monthsData: any[]
  avgHeight: number
  propStartDate: string
  propEndDate: string
  currentIndex: number
  unLoadPrev: boolean
  monthsNum: number
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
  showToday?: boolean
  startText?: string
  endText?: string
  confirmText?: string
  showTitle?: boolean
  showSubTitle?: boolean
  toDateAnimation?: boolean
  onBtn?: (() => string | JSX.Element) | undefined
  onDay?: ((date: Day) => string | JSX.Element) | undefined
  onTopInfo?: ((date: Day) => string | JSX.Element) | undefined
  onBottomInfo?: ((date: Day) => string | JSX.Element) | undefined
  onChoose?: (data: any) => void
  onUpdate?: () => void
  onSelected?: (data: string) => void
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
  showToday: true,
  startText: '开始',
  endText: '结束',
  confirmText: '确认',
  showTitle: true,
  showSubTitle: true,
  toDateAnimation: true,
  onBtn: undefined,
  onDay: undefined,
  onTopInfo: undefined,
  onBottomInfo: undefined,
  onChoose: (data: any) => {},
  onUpdate: () => {},
  onSelected: (data: string) => {},
} as CalendarItemProps

export const CalendarItem = React.forwardRef<
  CalendarRef,
  Partial<CalendarItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    type,
    isAutoBackFill,
    poppable,
    title,
    defaultValue,
    showToday,
    startText,
    endText,
    confirmText,
    showTitle,
    showSubTitle,
    toDateAnimation,
    onBtn,
    onDay,
    onTopInfo,
    onBottomInfo,
    onChoose,
    onUpdate,
    onSelected,
  } = { ...defaultProps, ...props }

  const weeks = locale.calendaritem.weekdays
  const [yearMonthTitle, setYearMonthTitle] = useState('')
  const [monthsData, setMonthsData] = useState<any[]>([])
  const [translateY, setTranslateY] = useState(0)
  const [monthDefaultRange, setMonthDefaultRange] = useState<number[]>([])

  const [state] = useState<CalendarState>({
    currDate: '',
    propStartDate: '',
    propEndDate: '',
    unLoadPrev: false,
    touchParams: {
      startY: 0,
      endY: 0,
      startTime: 0,
      endTime: 0,
      lastY: 0,
      lastTime: 0,
    },
    transformY: 0,
    scrollDistance: 0,
    defaultData: [],
    chooseData: [],
    monthsData: [],
    dayPrefix: 'calendar-month-day',
    startData: '',
    endData: '',
    isRange: props.type === 'range',
    timer: 0,
    currentIndex: 0,
    avgHeight: 0,
    monthsNum: 0,
  })

  const weeksPanel = useRef<HTMLDivElement>(null)
  const months = useRef<HTMLDivElement>(null)
  const monthsPanel = useRef<HTMLDivElement>(null)
  const viewArea = useRef<HTMLDivElement>(null)
  let viewHeight = 0

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

  const isMultiple = (currDate: string) => {
    if (state.currDate.length > 0) {
      return (state.currDate as string[]).some((item: string) => {
        return Utils.isEqual(item, currDate)
      })
    }
    return false
  }

  const getCurrDate = (day: Day, month: MonthInfo) => {
    return `${month.curData[0]}-${month.curData[1]}-${Utils.getNumTwoBit(
      +day.day
    )}`
  }

  const getClass = (day: Day, month: MonthInfo) => {
    const currDate = getCurrDate(day, month)
    if (day.type === 'curr') {
      if (
        Utils.isEqual(state.currDate as string, currDate) ||
        (type === 'range' && (isStart(currDate) || isEnd(currDate))) ||
        (type === 'multiple' && isMultiple(currDate))
      ) {
        return `${state.dayPrefix}-active`
      }
      if (
        (state.propStartDate &&
          Utils.compareDate(currDate, state.propStartDate)) ||
        (state.propEndDate && Utils.compareDate(state.propEndDate, currDate))
      ) {
        return `${state.dayPrefix}-disabled`
      }
      if (
        type === 'range' &&
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
    const { type } = props
    if (
      (type === 'range' && state.chooseData.length === 2) ||
      type !== 'range'
    ) {
      const chooseData = state.chooseData.slice(0)
      onChoose && onChoose(chooseData)
      if (poppable) {
        onUpdate && onUpdate()
      }
    }
  }

  const chooseDay = (day: Day, month: MonthInfo, isFirst?: boolean) => {
    if (getClass(day, month) !== `${state.dayPrefix}-disabled`) {
      const { type } = props
      const days = [...month.curData]
      days[2] =
        typeof day.day === 'number' ? Utils.getNumTwoBit(day.day) : day.day
      days[3] = `${days[0]}-${days[1]}-${days[2]}`
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2])
      if (type === 'multiple') {
        if (state.currDate.length > 0) {
          let hasIndex: any = ''
          ;(state.currDate as string[]).forEach((item: any, index: number) => {
            if (item === days[3]) {
              hasIndex = index
            }
          })
          if (isFirst) {
            state.chooseData.push([...days])
          } else if (hasIndex !== '') {
            ;(state.currDate as string[]).splice(hasIndex, 1)
            state.chooseData.splice(hasIndex, 1)
          } else {
            ;(state.currDate as string[]).push(days[3])
            state.chooseData.push([...days])
          }
        } else {
          state.currDate = [days[3]]
          state.chooseData = [[...days]]
        }
      } else if (type === 'range') {
        const curDataLength = Object.values(state.currDate).length
        if (curDataLength === 2 || curDataLength === 0) {
          state.currDate = [days[3]]
        } else if (Utils.compareDate(state.currDate[0], days[3])) {
          Array.isArray(state.currDate) && state.currDate.push(days[3])
        } else {
          Array.isArray(state.currDate) && state.currDate.unshift(days[3])
        }

        if (state.chooseData.length === 2 || !state.chooseData.length) {
          state.chooseData = [[...days]]
        } else if (Utils.compareDate(state.chooseData[0][3], days[3])) {
          state.chooseData = [...state.chooseData, [...days]]
        } else {
          state.chooseData = [[...days], ...state.chooseData]
        }
      } else {
        state.currDate = days[3]
        state.chooseData = [...days]
      }

      if (!isFirst) {
        // 点击日期 触发
        onSelected && onSelected(state.chooseData)
        if (isAutoBackFill || !poppable) {
          confirm()
        }
      }

      setMonthsData(state.monthsData.slice())
    }
  }

  const isStartTip = (day: Day, month: MonthInfo) => {
    return isActive(day, month) && isStart(getCurrDate(day, month))
  }

  // 是否有结束提示
  const isEndTip = (day: Day, month: MonthInfo) => {
    if (state.currDate.length >= 2 && isEnd(getCurrDate(day, month))) {
      return isActive(day, month)
    }
    return false
  }

  // 开始结束时间是否相等
  const rangeTip = () => {
    if (state.currDate.length >= 2) {
      return Utils.isEqual(state.currDate[0], state.currDate[1])
    }
    return false
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
  const getDaysStatus = (days: number, type: string, dateInfo: any) => {
    // 修复：当某个月的1号是周日时，月份下方会空出来一行
    const { year, month } = dateInfo
    if (type === 'prev' && days >= 7) {
      days -= 7
    }
    return Array.from(Array(days), (v, k) => {
      return {
        day: k + 1,
        type,
        year,
        month,
      }
    })
  }

  // 获取上一个月的最后一周天数，填充当月空白
  const getPreDaysStatus = (
    days: number,
    type: string,
    dateInfo: any,
    preCurrMonthDays: number
  ) => {
    // 修复：当某个月的1号是周日时，月份下方会空出来一行
    const { year, month } = dateInfo
    if (type === 'prev' && days >= 7) {
      days -= 7
    }
    const months = Array.from(Array(preCurrMonthDays), (v, k) => {
      return {
        day: k + 1,
        type,
        year,
        month,
      }
    })
    return months.slice(preCurrMonthDays - days)
  }

  // 获取月数据
  const getMonth = (curData: string[], type: string) => {
    const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1])

    let preMonth = +curData[1] - 1
    let preYear = curData[0]
    if (preMonth <= 0) {
      preMonth = 12
      preYear += 1
    }

    const currMonthDays = Utils.getMonthDays(curData[0], curData[1])
    const preCurrMonthDays = Utils.getMonthDays(`${preYear}`, `${preMonth}`)

    const title = {
      year: curData[0],
      month: curData[1],
    }
    const monthInfo: MonthInfo = {
      curData,
      title: locale.calendaritem.monthTitle(title.year, title.month),
      monthData: [
        ...(getPreDaysStatus(
          preMonthDays,
          'prev',
          { month: preMonth, year: preYear },
          preCurrMonthDays
        ) as Day[]),
        ...(getDaysStatus(currMonthDays, 'curr', title) as Day[]),
      ],
    }
    monthInfo.cssHeight = 39 + (monthInfo.monthData.length > 35 ? 384 : 320)
    let cssScrollHeight = 0
    if (state.monthsData.length > 0) {
      cssScrollHeight =
        state.monthsData[state.monthsData.length - 1].cssScrollHeight +
        state.monthsData[state.monthsData.length - 1].cssHeight
    }
    monthInfo.cssScrollHeight = cssScrollHeight
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
    }

    setMonthsData(state.monthsData)
  }

  const setDefaultRange = (monthsNum: number, current: number) => {
    let start = 0
    let end = 0
    if (monthsNum >= 3) {
      if (current > 0 && current < monthsNum) {
        start = current - 1
        end = current + 3
      } else if (current === 0) {
        start = current
        end = current + 4
      } else if (current === monthsNum) {
        start = current - 2
        end = current + 2
      }
    } else {
      start = 0
      end = monthsNum + 2
    }
    setMonthDefaultRange([start, end])
    setTranslateY(state.monthsData[start].cssScrollHeight)
  }

  const mothsViewScroll = (e: any) => {
    if (state.monthsData.length <= 1) {
      return
    }
    const target = e.target as HTMLElement
    const currentScrollTop = target.scrollTop
    let current = Math.floor(currentScrollTop / state.avgHeight)
    if (current === 0) {
      if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
        current += 1
      }
    } else if (current > 0 && current < state.monthsNum - 1) {
      if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
        current += 1
      }
      if (currentScrollTop < state.monthsData[current].cssScrollHeight) {
        current -= 1
      }
    } else {
      const viewPosition = Math.round(currentScrollTop + viewHeight)
      if (
        viewPosition <
          state.monthsData[current].cssScrollHeight +
            state.monthsData[current].cssHeight &&
        currentScrollTop > state.monthsData[current - 1].cssScrollHeight
      ) {
        current -= 1
      }
      if (
        current + 1 <= state.monthsNum &&
        viewPosition >=
          state.monthsData[current + 1].cssScrollHeight +
            state.monthsData[current + 1].cssHeight
      ) {
        current += 1
      }
      if (
        current >= 1 &&
        currentScrollTop < state.monthsData[current - 1].cssScrollHeight
      ) {
        current -= 1
      }
    }

    if (state.currentIndex !== current) {
      state.currentIndex = current
      setDefaultRange(state.monthsNum, current)
    }

    setYearMonthTitle(state.monthsData[current].title)
  }

  const initData = () => {
    // 初始化开始结束数据
    const propStartDate = props.startDate ? props.startDate : Utils.getDay(0)
    const propEndDate = props.endDate ? props.endDate : Utils.getDay(365)
    state.propStartDate = propStartDate as string
    state.propEndDate = propEndDate as string
    state.startData = splitDate(propStartDate as string)
    state.endData = splitDate(propEndDate as string)

    // 根据是否存在默认时间，初始化当前日期
    if (
      defaultValue ||
      (Array.isArray(defaultValue) && defaultValue.length > 0)
    ) {
      state.currDate =
        props.type !== 'one'
          ? ([...(props.defaultValue as string[])] as string[])
          : (props.defaultValue as string[])
    }

    // 判断时间范围内存在多少个月
    const startDate = {
      year: Number(state.startData[0]),
      month: Number(state.startData[1]),
    }
    const endDate = {
      year: Number(state.endData[0]),
      month: Number(state.endData[1]),
    }
    let monthsNum = endDate.month - startDate.month
    if (endDate.year - startDate.year > 0) {
      monthsNum += 12 * (endDate.year - startDate.year)
    }
    if (monthsNum <= 0) {
      monthsNum = 1
    }
    // 设置月份数据
    getMonth(state.startData, 'next')

    let i = 1
    do {
      getMonth(getCurrData('next') as string[], 'next')
    } while (i++ < monthsNum)
    state.monthsNum = monthsNum

    // 日期转化为数组，限制初始日期。判断时间范围
    if (type === 'range' && Array.isArray(state.currDate)) {
      if (state.currDate.length > 0) {
        if (
          propStartDate &&
          Utils.compareDate(state.currDate[0], propStartDate as string)
        ) {
          state.currDate.splice(0, 1, propStartDate as string)
        }
        if (
          propEndDate &&
          Utils.compareDate(propEndDate as string, state.currDate[1])
        ) {
          state.currDate.splice(1, 1, propEndDate as string)
        }
        state.defaultData = [
          ...splitDate(state.currDate[0]),
          ...splitDate(state.currDate[1]),
        ]
      }
    } else if (props.type === 'multiple' && Array.isArray(state.currDate)) {
      if (state.currDate.length > 0) {
        const defaultArr = [] as string[]
        const obj: Record<string, unknown> = {}
        state.currDate.forEach((item: string) => {
          if (
            propStartDate &&
            !Utils.compareDate(item, propStartDate as string) &&
            propEndDate &&
            !Utils.compareDate(propEndDate as string, item)
          ) {
            if (!Object.hasOwnProperty.call(obj, item)) {
              defaultArr.push(item)
              obj[item] = item
            }
          }
        })
        state.currDate = [...defaultArr]
        state.defaultData = [...splitDate(defaultArr[0])]
      }
    } else if (state.currDate) {
      if (
        propStartDate &&
        Utils.compareDate(state.currDate as string, propStartDate as string)
      ) {
        state.currDate = propStartDate
      } else if (
        propEndDate &&
        !Utils.compareDate(state.currDate as string, propEndDate as string)
      ) {
        state.currDate = propEndDate
      }
      state.defaultData = [...splitDate(state.currDate as string)]
    }

    // 设置默认可见区域
    let current = 0
    let lastCurrent = 0
    if (state.defaultData.length > 0) {
      state.monthsData.forEach((item, index) => {
        if (
          item.title ===
          locale.calendaritem.monthTitle(
            state.defaultData[0],
            state.defaultData[1]
          )
        ) {
          current = index
        }
        if (props.type === 'range') {
          if (
            item.title ===
            locale.calendaritem.monthTitle(
              state.defaultData[3],
              state.defaultData[4]
            )
          ) {
            lastCurrent = index
          }
        }
      })
    }

    setDefaultRange(monthsNum, current)
    state.currentIndex = current
    setYearMonthTitle(state.monthsData[state.currentIndex].title)

    if (state.defaultData.length > 0) {
      // 设置当前选中日期
      if (type === 'range') {
        chooseDay(
          { day: state.defaultData[2], type: 'curr' },
          state.monthsData[state.currentIndex],
          true
        )
        chooseDay(
          { day: state.defaultData[5], type: 'curr' },
          state.monthsData[lastCurrent],
          true
        )
      } else if (type === 'multiple') {
        ;[...state.currDate].forEach((item: string) => {
          const dateArr = splitDate(item)
          let current = state.currentIndex
          state.monthsData.forEach((item, index) => {
            if (
              item.title ===
              locale.calendaritem.monthTitle(dateArr[0], dateArr[1])
            ) {
              current = index
            }
          })
          chooseDay(
            { day: dateArr[2], type: 'curr' },
            state.monthsData[current],
            true
          )
        })
      } else {
        chooseDay(
          { day: state.defaultData[2], type: 'curr' },
          state.monthsData[state.currentIndex],
          true
        )
      }
    }

    const lastItem = state.monthsData[state.monthsData.length - 1]
    const containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight

    requestAniFrame(() => {
      // 初始化 日历位置
      if (months && monthsPanel && viewArea) {
        viewHeight = (months.current as HTMLDivElement).clientHeight
        ;(
          monthsPanel.current as HTMLDivElement
        ).style.height = `${containerHeight}px`
        ;(months.current as HTMLDivElement).scrollTop =
          state.monthsData[state.currentIndex].cssScrollHeight
      }
    })

    state.avgHeight = Math.floor(containerHeight / (monthsNum + 1))
  }

  const resetRender = () => {
    state.chooseData.splice(0)
    state.monthsData.splice(0)
    initData()
  }

  // 暴露出的API
  const scrollToDate = (date: string) => {
    if (Utils.compareDate(date, state.propStartDate)) {
      date = state.propStartDate
    } else if (!Utils.compareDate(date, state.propEndDate)) {
      date = state.propEndDate
    }
    const dateArr = splitDate(date)
    state.monthsData.forEach((item, index) => {
      if (
        item.title === locale.calendaritem.monthTitle(dateArr[0], dateArr[1])
      ) {
        if (months.current) {
          const distance =
            state.monthsData[index].cssScrollHeight - months.current.scrollTop
          if (toDateAnimation) {
            let flag = 0
            const interval = setInterval(() => {
              flag++
              if (months.current) {
                const offset = distance / 10
                months.current.scrollTop += offset
              }

              if (flag >= 10) {
                clearInterval(interval)
                if (months.current) {
                  months.current.scrollTop =
                    state.monthsData[index].cssScrollHeight
                }
              }
            }, 40)
          } else {
            months.current.scrollTop = state.monthsData[index].cssScrollHeight
          }
        }
      }
    })
  }

  useEffect(() => {
    initData()
  }, [])

  useEffect(() => {
    poppable && resetRender()
  }, [defaultValue])

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  return (
    <>
      <div className={classes}>
        {/* header */}
        <div className={headerClasses}>
          {showTitle && (
            <div className="calendar-title">
              {title || locale.calendaritem.title}
            </div>
          )}
          {onBtn && <div className="calendar-top-slot">{onBtn()}</div>}
          {showSubTitle && (
            <div className="calendar-curr-month">{yearMonthTitle}</div>
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
          onScroll={mothsViewScroll}
          ref={months}
        >
          <div className="calendar-months-panel" ref={monthsPanel}>
            <div
              className="viewArea"
              ref={viewArea}
              style={{ transform: `translateY(${translateY}px)` }}
            >
              {state.monthsData
                .slice(monthDefaultRange[0], monthDefaultRange[1])
                .map((month: any, key: number) => {
                  return (
                    <div className="calendar-month" key={key}>
                      <div className="calendar-month-title">{month.title}</div>
                      <div className="calendar-month-con">
                        <div className={monthitemclasses}>
                          {month.monthData.map((day: Day, i: number) => (
                            <div
                              className={[
                                'calendar-month-day',
                                getClass(day, month),
                              ].join(' ')}
                              onClick={() => {
                                chooseDay(day, month)
                              }}
                              key={i}
                            >
                              <div className="calendar-day">
                                {onDay ? onDay(day) : day.day}
                              </div>
                              {onTopInfo && (
                                <div className="calendar-curr-tips calendar-curr-tips-top">
                                  {onTopInfo(day)}
                                </div>
                              )}
                              {onBottomInfo && (
                                <div className="calendar-curr-tips calendar-curr-tips-bottom">
                                  {onBottomInfo(day)}
                                </div>
                              )}
                              {!onBottomInfo &&
                                showToday &&
                                isCurrDay(month, day.day) && (
                                  <div className="calendar-curr-tip-curr">
                                    {locale.calendaritem.today}
                                  </div>
                                )}
                              {isStartTip(day, month) && (
                                <div
                                  className={`calendar-day-tip ${
                                    rangeTip() ? 'calendar-curr-tips-top' : ''
                                  }`}
                                >
                                  {startText || locale.calendaritem.start}
                                </div>
                              )}
                              {isEndTip(day, month) && (
                                <div className="calendar-day-tip">
                                  {endText || locale.calendaritem.end}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* footer */}
        {poppable && !isAutoBackFill ? (
          <div className="nut-calendar-footer">
            <div className="calendar-confirm-btn" onClick={confirm}>
              {confirmText || locale.confirm}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
})

CalendarItem.defaultProps = defaultProps
CalendarItem.displayName = 'NutCalendarItem'
