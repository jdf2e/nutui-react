import React, { useState, useEffect, useRef, ReactNode } from 'react'
import classNames from 'classnames'
import Utils from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'

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
  scrollTop?: number
}

interface CalendarState {
  currDateArray: any
}

export interface CalendarItemProps {
  type?: string
  autoBackfill?: boolean
  popup?: boolean
  title?: string
  value?: InputDate
  defaultValue?: InputDate
  startDate?: InputDate
  endDate?: InputDate
  showToday?: boolean
  startText?: ReactNode
  endText?: ReactNode
  confirmText?: ReactNode
  showTitle?: boolean
  showSubTitle?: boolean
  scrollAnimation?: boolean
  renderHeaderButtons?: (() => string | JSX.Element) | undefined
  renderDay?: ((date: Day) => string | JSX.Element) | undefined
  renderDayTop?: ((date: Day) => string | JSX.Element) | undefined
  renderDayBottom?: ((date: Day) => string | JSX.Element) | undefined
  onConfirm?: (data: any) => void
  onUpdate?: () => void
  onClickDay?: (data: string) => void
  onPageChange?: (data: any) => void
}
const defaultProps = {
  type: 'single',
  autoBackfill: false,
  popup: true,
  title: '',
  startDate: Utils.getDay(0),
  endDate: Utils.getDay(365),
  showToday: true,
  startText: '',
  endText: '',
  confirmText: '',
  showTitle: true,
  showSubTitle: true,
  scrollAnimation: true,
  renderHeaderButtons: undefined,
  renderDay: undefined,
  renderDayTop: undefined,
  renderDayBottom: undefined,
  onConfirm: (data: any) => {},
  onUpdate: () => {},
  onClickDay: (data: string) => {},
  onPageChange: (data: any) => {},
} as CalendarItemProps

export const CalendarItem = React.forwardRef<
  CalendarRef,
  Partial<CalendarItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    type,
    autoBackfill,
    popup,
    title,
    defaultValue,
    showToday,
    startText,
    endText,
    confirmText,
    showTitle,
    showSubTitle,
    scrollAnimation,
    renderHeaderButtons,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onConfirm,
    onUpdate,
    onClickDay,
    onPageChange,
  } = { ...defaultProps, ...props }

  const weeks = locale.calendaritem.weekdays
  const monthTitle = locale.calendaritem.monthTitle
  const [yearMonthTitle, setYearMonthTitle] = useState('')
  const [monthsData, setMonthsData] = useState<any[]>([])
  const [monthsNum, setMonthsNum] = useState<number>(0)
  const [translateY, setTranslateY] = useState(0)
  const [monthDefaultRange, setMonthDefaultRange] = useState<number[]>([])

  // 初始化开始结束数据
  const propStartDate = (props.startDate || Utils.getDay(0)) as string
  const propEndDate = (props.endDate || Utils.getDay(365)) as string

  const splitDate = (date: string) => {
    const split = date.indexOf('-') !== -1 ? '-' : '/'
    return date.split(split)
  }
  const startDates = splitDate(propStartDate)
  const endDates = splitDate(propEndDate)

  const [state] = useState<CalendarState>({
    currDateArray: [],
  })

  const resetDefaultValue = () => {
    if (
      defaultValue ||
      (Array.isArray(defaultValue) && defaultValue.length > 0)
    ) {
      return type !== 'single'
        ? ([...(defaultValue as string[])] as string[])
        : (defaultValue as string[])
    }
    return undefined
  }

  const [currentDate, setCurrentDate] = usePropsValue<InputDate>({
    value: props.value,
    defaultValue: resetDefaultValue(),
    finalValue: [],
    onChange: (val) => {
      // console.log('onChange', val)
    },
  })

  const weeksPanel = useRef<HTMLDivElement>(null)
  const monthsRef = useRef<HTMLDivElement>(null)
  const monthsPanel = useRef<HTMLDivElement>(null)
  const viewAreaRef = useRef<HTMLDivElement>(null)
  const [avgHeight, setAvgHeight] = useState(0)

  let viewHeight = 0

  const classPrefix = 'nut-calendar'
  const dayPrefix = 'nut-calendar-day'

  const classes = classNames(
    {
      [`${classPrefix}-title`]: !popup,
      [`${classPrefix}-nofooter`]: !!autoBackfill,
    },
    classPrefix
  )

  const headerClasses = classNames({
    [`${classPrefix}-header`]: true,
    [`${classPrefix}-header-title`]: !popup,
  })

  const isMultiple = (d: string) => {
    if (currentDate.length > 0) {
      return (currentDate as string[]).some((item: string) => {
        return Utils.isEqual(item, d)
      })
    }
    return false
  }

  const getCurrDate = (day: Day, month: MonthInfo) => {
    return `${month.curData[0]}/${month.curData[1]}/${Utils.getNumTwoBit(
      +day.day
    )}`
  }

  const getClasses = (day: Day, month: MonthInfo) => {
    const dateStr = getCurrDate(day, month)
    if (day.type === 'active') {
      if (
        (propStartDate && Utils.compareDate(dateStr, propStartDate)) ||
        (propEndDate && Utils.compareDate(propEndDate, dateStr))
      ) {
        return `${dayPrefix}-disabled`
      }

      if (type === 'range') {
        if (isStart(dateStr) || isEnd(dateStr)) {
          return `${dayPrefix}-active ${
            isStart(dateStr) ? 'active-start' : ''
          } ${isEnd(dateStr) ? 'active-end' : ''}`
        }
        if (
          Array.isArray(currentDate) &&
          Object.values(currentDate).length === 2 &&
          Utils.compareDate(currentDate[0], dateStr) &&
          Utils.compareDate(dateStr, currentDate[1])
        ) {
          return `${dayPrefix}-choose`
        }
        return null
      }

      if (
        (type === 'multiple' && isMultiple(dateStr)) ||
        (!Array.isArray(currentDate) &&
          Utils.isEqual(currentDate as string, dateStr))
      ) {
        return `${dayPrefix}-active`
      }

      return null
    }

    return `${dayPrefix}-disabled`
  }

  const isCurrDay = (month: MonthInfo, day: string | number) => {
    const date = `${month.curData[0]}/${month.curData[1]}/${day}`
    return Utils.isEqual(date, Utils.date2Str(new Date(), '/'))
  }

  const isStart = (d: string) => {
    return Utils.isEqual(currentDate[0], d)
  }

  const isEnd = (d: string) => {
    return Utils.isEqual(currentDate[1], d)
  }

  // 是否有开始提示
  const isStartTip = (day: Day, month: MonthInfo) => {
    return (
      type === 'range' &&
      day.type === 'active' &&
      isStart(getCurrDate(day, month))
    )
  }

  // 是否有结束提示
  const isEndTip = (day: Day, month: MonthInfo) => {
    return (
      currentDate.length >= 2 &&
      type === 'range' &&
      day.type === 'active' &&
      isEnd(getCurrDate(day, month))
    )
  }

  // 开始结束时间是否相等
  const isStartAndEnd = () => {
    return (
      currentDate.length >= 2 && Utils.isEqual(currentDate[0], currentDate[1])
    )
  }

  // 获取当前月数据
  const getCurrMonthData = (type: string) => {
    const monthData =
      type === 'prev' ? monthsData[0] : monthsData[monthsData.length - 1]
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
  const getDaysStatus = (
    days: number,
    type: string,
    year: string,
    month: string
  ) => {
    // 修复：当某个月的1号是周日时，月份下方会空出来一行
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
    year: string,
    month: string,
    preCurrMonthDays: number
  ) => {
    // 修复：当某个月的1号是周日时，月份下方会空出来一行
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
  const getMonthData = (curData: string[], type: string) => {
    let preMonth = +curData[1] - 1
    let preYear = curData[0]
    if (preMonth <= 0) {
      preMonth = 12
      preYear += 1
    }

    const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1])
    const currMonthDays = Utils.getMonthDays(curData[0], curData[1])
    const preCurrMonthDays = Utils.getMonthDays(`${preYear}`, `${preMonth}`)
    const monthInfo: MonthInfo = {
      curData,
      title: monthTitle(curData[0], curData[1]),
      monthData: [
        ...(getPreDaysStatus(
          preMonthDays,
          'prev',
          `${preMonth}`,
          preYear,
          preCurrMonthDays
        ) as Day[]),
        ...(getDaysStatus(
          currMonthDays,
          'active',
          curData[0],
          curData[1]
        ) as Day[]),
      ],
    }
    monthInfo.cssHeight = 39 + (monthInfo.monthData.length > 35 ? 384 : 320)
    let scrollTop = 0

    if (monthsData.length > 0) {
      const monthEle = monthsData[monthsData.length - 1]
      scrollTop = monthEle.scrollTop + monthEle.cssHeight
    }
    monthInfo.scrollTop = scrollTop

    if (type === 'next') {
      if (
        !endDates ||
        !Utils.compareDate(
          `${endDates[0]}/${endDates[1]}/${Utils.getMonthDays(
            endDates[0],
            endDates[1]
          )}`,
          `${curData[0]}/${curData[1]}/${curData[2]}`
        )
      ) {
        monthsData.push(monthInfo)
      }
    } else if (
      !startDates ||
      !Utils.compareDate(
        `${curData[0]}/${curData[1]}/${curData[2]}`,
        `${startDates[0]}/${startDates[1]}/01`
      )
    ) {
      monthsData.unshift(monthInfo)
    }

    setMonthsData(monthsData)
  }

  const setReachedYearMonthInfo = (current: number) => {
    const currentMonthsData = monthsData[current]
    const [year, month] = currentMonthsData.curData
    if (currentMonthsData.title === yearMonthTitle) return
    onPageChange && onPageChange([year, month, `${year}-${month}`])
    setYearMonthTitle(currentMonthsData.title)
  }

  // 设置默认的范围
  const setDefaultRange = (monthNum: number, current: number) => {
    let start = 0
    let end = 0
    if (monthNum >= 3) {
      if (current > 0 && current < monthNum) {
        start = current - 1
        end = current + 3
      } else if (current === 0) {
        start = current
        end = current + 4
      } else if (current === monthNum) {
        start = current - 2
        end = current + 2
      }
    } else {
      start = 0
      end = monthNum + 2
    }
    setMonthDefaultRange([start, end])
    setTranslateY(monthsData[start].scrollTop)
    setReachedYearMonthInfo(current)
  }

  const monthsViewScroll = (e: any) => {
    if (monthsData.length <= 1) {
      return
    }
    const scrollTop = (e.target as HTMLElement).scrollTop
    let current = Math.floor(scrollTop / avgHeight)
    const nextTop = monthsData[current + 1].scrollTop
    const nextHeight = monthsData[current + 1].cssHeight
    if (current === 0) {
      if (scrollTop >= nextTop) {
        current += 1
      }
    } else if (current > 0 && current < monthsNum - 1) {
      if (scrollTop >= nextTop) {
        current += 1
      }
      if (scrollTop < monthsData[current].scrollTop) {
        current -= 1
      }
    } else {
      const viewPosition = Math.round(scrollTop + viewHeight)
      if (current + 1 <= monthsNum && viewPosition >= nextTop + nextHeight) {
        current += 1
      }
      if (current >= 1 && scrollTop < monthsData[current - 1].scrollTop) {
        current -= 1
      }
    }

    setDefaultRange(monthsNum, current)
  }

  const getMonthNum = () => {
    const startDate = {
      year: Number(startDates[0]),
      month: Number(startDates[1]),
    }
    const endDate = {
      year: Number(endDates[0]),
      month: Number(endDates[1]),
    }
    let monthNum = endDate.month - startDate.month
    if (endDate.year - startDate.year > 0) {
      monthNum += 12 * (endDate.year - startDate.year)
    }
    if (monthNum <= 0) {
      monthNum = 1
    }
    setMonthsNum(monthNum)
    return monthNum
  }

  const getMonthsData = (monthNum: number) => {
    getMonthData(startDates, 'next')

    let i = 1
    do {
      getMonthData(getCurrMonthData('next') as string[], 'next')
    } while (i++ < monthNum)
  }

  const requestAniFrameFunc = (current: number, monthNum: number) => {
    const lastItem = monthsData[monthsData.length - 1]
    const containerHeight = lastItem.cssHeight + lastItem.scrollTop

    requestAniFrame(() => {
      // 初始化 日历位置
      if (monthsRef && monthsPanel && viewAreaRef) {
        viewHeight = (monthsRef.current as HTMLDivElement).clientHeight
        ;(
          monthsPanel.current as HTMLDivElement
        ).style.height = `${containerHeight}px`
        ;(monthsRef.current as HTMLDivElement).scrollTop =
          monthsData[current].scrollTop
      }
    })

    setAvgHeight(Math.floor(containerHeight / (monthNum + 1)))
  }

  const renderCurrentDate = () => {
    let defaultData: InputDate = []
    // 日期转化为数组，限制初始日期。判断时间范围
    if (type === 'range' && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        if (propStartDate && Utils.compareDate(currentDate[0], propStartDate)) {
          currentDate.splice(0, 1, propStartDate)
        }
        if (propEndDate && Utils.compareDate(propEndDate, currentDate[1])) {
          currentDate.splice(1, 1, propEndDate)
        }
        defaultData = [
          ...splitDate(currentDate[0]),
          ...splitDate(currentDate[1]),
        ]
      }
    } else if (props.type === 'multiple' && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        const defaultArr = [] as string[]
        const obj: Record<string, unknown> = {}
        currentDate.forEach((item: string) => {
          if (
            propStartDate &&
            !Utils.compareDate(item, propStartDate) &&
            propEndDate &&
            !Utils.compareDate(propEndDate, item)
          ) {
            if (!Object.hasOwnProperty.call(obj, item)) {
              defaultArr.push(item)
              obj[item] = item
            }
          }
        })
        currentDate.splice(0) && currentDate.push(...defaultArr)
        defaultData = [...splitDate(defaultArr[0])]
      }
    } else if (currentDate) {
      if (currentDate.length > 0) {
        if (
          propStartDate &&
          Utils.compareDate(currentDate as string, propStartDate)
        ) {
          defaultData = [...splitDate(propStartDate as string)]
        } else if (
          propEndDate &&
          !Utils.compareDate(currentDate as string, propEndDate)
        ) {
          defaultData = [...splitDate(propEndDate as string)]
        } else {
          defaultData = [...splitDate(currentDate as string)]
        }
      } else {
        defaultData = []
      }
    }

    // 设置默认可见区域
    let current = 0
    let lastCurrent = 0
    if (defaultData.length > 0) {
      monthsData.forEach((item, index) => {
        if (item.title === monthTitle(defaultData[0], defaultData[1])) {
          current = index
        }
        if (props.type === 'range') {
          if (item.title === monthTitle(defaultData[3], defaultData[4])) {
            lastCurrent = index
          }
        }
      })
    } else {
      // 当 defaultValue 为空时，如果月份列表包含当月，则默认定位到当月
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      const currentYearMonthIndex = monthsData.findIndex((item) => {
        return (
          +item.curData[0] === currentYear && +item.curData[1] === currentMonth
        )
      })
      if (currentYearMonthIndex > -1) {
        current = currentYearMonthIndex
      }
    }

    if (defaultData.length > 0) {
      // 设置当前选中日期
      if (type === 'range') {
        chooseDay(
          { day: defaultData[2], type: 'active' },
          monthsData[current],
          true
        )
        chooseDay(
          { day: defaultData[5], type: 'active' },
          monthsData[lastCurrent],
          true
        )
      } else if (type === 'multiple') {
        ;[...currentDate].forEach((item: string) => {
          const dateArr = splitDate(item)
          let currentIndex = current
          monthsData.forEach((item, index) => {
            if (item.title === monthTitle(dateArr[0], dateArr[1])) {
              currentIndex = index
            }
          })
          chooseDay(
            { day: dateArr[2], type: 'active' },
            monthsData[currentIndex],
            true
          )
        })
      } else {
        chooseDay(
          { day: defaultData[2], type: 'active' },
          monthsData[current],
          true
        )
      }
    }
    return current
  }

  const initData = () => {
    // 判断时间范围内存在多少个月
    const monthNum = getMonthNum()
    // 设置月份数据
    getMonthsData(monthNum)
    const current = renderCurrentDate()
    setDefaultRange(monthNum, current)
    requestAniFrameFunc(current, monthNum)
  }

  const resetRender = () => {
    state.currDateArray.splice(0)
    monthsData.splice(0)
    initData()
  }

  // 暴露出的API
  const scrollToDate = (date: string) => {
    if (Utils.compareDate(date, propStartDate)) {
      date = propStartDate
    } else if (!Utils.compareDate(date, propEndDate)) {
      date = propEndDate
    }
    const dateArr = splitDate(date)
    monthsData.forEach((item, index) => {
      if (item.title === monthTitle(dateArr[0], dateArr[1])) {
        const currTop = monthsData[index].scrollTop
        if (monthsRef.current) {
          const distance = currTop - monthsRef.current.scrollTop

          if (scrollAnimation) {
            let flag = 0
            const interval = setInterval(() => {
              flag++
              if (monthsRef.current) {
                const offset = distance / 10
                monthsRef.current.scrollTop += offset
              }

              if (flag >= 10) {
                clearInterval(interval)
                if (monthsRef.current) {
                  monthsRef.current.scrollTop = currTop
                }
              }
            }, 40)
          } else {
            monthsRef.current.scrollTop = currTop
          }
        }
      }
    })
  }

  useEffect(() => {
    initData()
  }, [])

  useEffect(() => {
    popup && resetRender()
  }, [defaultValue])

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const resetSelectedValue = () => {
    const itemData = (dateArr: string) => {
      days = dateArr.split('/')
      days[3] = `${days[0]}/${days[1]}/${days[2]}`
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2])
      return days
    }
    let days = []
    if (Array.isArray(currentDate) && currentDate) {
      days = currentDate.map((item) => {
        return itemData(item)
      })
    } else {
      days = itemData(currentDate as string)
    }
    return days
  }

  const confirm = () => {
    if (
      (type === 'range' && state.currDateArray.length === 2) ||
      type !== 'range'
    ) {
      const chooseData = state.currDateArray.slice(0)
      onConfirm && onConfirm(chooseData)
      if (popup) {
        onUpdate && onUpdate()
      }
    }
  }

  const chooseDay = (day: Day, month: MonthInfo, isFirst?: boolean) => {
    if (getClasses(day, month) === `${dayPrefix}-disabled`) {
      return
    }

    const days = [...month.curData]
    days[2] =
      typeof day.day === 'number' ? Utils.getNumTwoBit(day.day) : day.day
    days[3] = `${days[0]}/${days[1]}/${days[2]}`
    days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2])

    if (type === 'multiple') {
      if (currentDate.length > 0) {
        let hasIndex: any = ''
        ;(currentDate as string[]).forEach((item: any, index: number) => {
          if (item === days[3]) {
            hasIndex = index
          }
        })
        if (isFirst) {
          state.currDateArray.push([...days])
        } else if (hasIndex !== '') {
          ;(currentDate as string[]).splice(hasIndex, 1)
          state.currDateArray.splice(hasIndex, 1)
        } else {
          ;(currentDate as string[]).push(days[3])
          state.currDateArray.push([...days])
        }
      } else {
        ;(currentDate as string[]).push(days[3])
        state.currDateArray = [[...days]]
      }
    } else if (type === 'range') {
      const curDataLength = Object.values(currentDate).length
      if (curDataLength === 2 || curDataLength === 0) {
        Array.isArray(currentDate) &&
          currentDate.splice(0) &&
          currentDate.push(days[3])
        state.currDateArray = [[...days]]
      } else if (Utils.compareDate(currentDate[0], days[3])) {
        Array.isArray(currentDate) && currentDate.push(days[3])
        state.currDateArray = [...state.currDateArray, [...days]]
      } else {
        Array.isArray(currentDate) && currentDate.unshift(days[3])
        state.currDateArray = [[...days], ...state.currDateArray]
      }
    } else {
      setCurrentDate(days[3])
      state.currDateArray = [...days]
    }

    if (!isFirst) {
      onClickDay && onClickDay(state.currDateArray)
      if (autoBackfill || !popup) {
        confirm()
      }
    }

    setMonthsData(monthsData.slice())
  }

  return (
    <>
      <div className={classes}>
        {/* header */}
        <div className={headerClasses}>
          {showTitle && (
            <div className={`${classPrefix}-title`}>
              {title || locale.calendaritem.title}
            </div>
          )}
          {renderHeaderButtons && (
            <div className={`${classPrefix}-header-buttons`}>
              {renderHeaderButtons()}
            </div>
          )}
          {showSubTitle && (
            <div className={`${classPrefix}-sub-title`}>{yearMonthTitle}</div>
          )}
          <div className={`${classPrefix}-weeks`} ref={weeksPanel}>
            {weeks.map((item: string) => (
              <div className={`${classPrefix}-week-item`} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* content */}
        <div
          className={`${classPrefix}-content`}
          onScroll={monthsViewScroll}
          ref={monthsRef}
        >
          <div className={`${classPrefix}-pannel`} ref={monthsPanel}>
            <div
              className="viewArea"
              ref={viewAreaRef}
              style={{ transform: `translateY(${translateY}px)` }}
            >
              {monthsData
                .slice(monthDefaultRange[0], monthDefaultRange[1])
                .map((month: any, key: number) => {
                  return (
                    <div className={`${classPrefix}-month`} key={key}>
                      <div className={`${classPrefix}-month-title`}>
                        {month.title}
                      </div>
                      <div className={`${classPrefix}-days`}>
                        {month.monthData.map((day: Day, i: number) => (
                          <div
                            className={[
                              `${classPrefix}-day`,
                              getClasses(day, month),
                            ].join(' ')}
                            onClick={() => {
                              chooseDay(day, month)
                            }}
                            key={i}
                          >
                            <div className={`${classPrefix}-day-day`}>
                              {renderDay ? renderDay(day) : day.day}
                            </div>
                            {!isStartTip(day, month) && renderDayTop && (
                              <div className={`${classPrefix}-day-info-top`}>
                                {renderDayTop(day)}
                              </div>
                            )}
                            {!isStartTip(day, month) &&
                              !isEndTip(day, month) &&
                              renderDayBottom && (
                                <div
                                  className={`${classPrefix}-day-info-bottom`}
                                >
                                  {renderDayBottom(day)}
                                </div>
                              )}
                            {!isStartTip(day, month) &&
                              !isEndTip(day, month) &&
                              !renderDayBottom &&
                              showToday &&
                              isCurrDay(month, day.day) && (
                                <div className={`${classPrefix}-day-info-curr`}>
                                  {locale.calendaritem.today}
                                </div>
                              )}
                            {isStartTip(day, month) && (
                              <div
                                className={`${classPrefix}-day-info ${
                                  isStartAndEnd()
                                    ? `${classPrefix}-day-info-top`
                                    : ''
                                }`}
                              >
                                {startText || locale.calendaritem.start}
                              </div>
                            )}
                            {isEndTip(day, month) && (
                              <div className={`${classPrefix}-day-info`}>
                                {endText || locale.calendaritem.end}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* footer */}
        {popup && !autoBackfill ? (
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
