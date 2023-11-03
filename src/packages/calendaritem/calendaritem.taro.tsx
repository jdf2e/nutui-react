import React, { useState, useEffect, useRef, ReactNode } from 'react'
import classNames from 'classnames'
import { ScrollView } from '@tarojs/components'
import Taro, { nextTick } from '@tarojs/taro'
import { PopupProps } from '@/packages/popup/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import {
  Utils,
  getCurrMonthData,
  getDaysStatus,
  getPreMonthDates,
} from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { usePropsValue } from '@/utils/use-props-value'
import {
  splitDate,
  isMultiple,
  isCurrDay,
  getCurrDate,
  isStart,
  isEnd,
  isStartAndEnd,
} from '../calendar/utils'
import { Day, MonthInfo, InputDate, SelectedType } from '../calendar/type'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

interface CalendarState {
  currDateArray: any
}

export interface CalendarItemProps extends PopupProps {
  type: SelectedType
  autoBackfill: boolean
  popup: boolean
  title: string
  value?: InputDate
  defaultValue?: InputDate
  startDate: InputDate
  endDate: InputDate
  showToday: boolean
  startText: ReactNode
  endText: ReactNode
  confirmText: ReactNode
  showTitle: boolean
  showSubTitle: boolean
  scrollAnimation: boolean
  firstDayOfWeek: number
  disableDate: (date: Day) => boolean
  renderHeaderButtons: () => string | JSX.Element
  renderDay: (date: Day) => string | JSX.Element
  renderDayTop: (date: Day) => string | JSX.Element
  renderDayBottom: (date: Day) => string | JSX.Element
  onConfirm: (data: string) => void
  onUpdate: () => void
  onDayClick: (data: string) => void
  onPageChange: (data: any) => void
}
const defaultProps = {
  ...ComponentDefaults,
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
  firstDayOfWeek: 0,
  disableDate: (date: Day) => false,
  renderHeaderButtons: undefined,
  renderDay: undefined,
  renderDayTop: undefined,
  renderDayBottom: undefined,
  onConfirm: (data: string) => {},
  onUpdate: () => {},
  onDayClick: (data: string) => {},
  onPageChange: (data: any) => {},
} as unknown as CalendarItemProps

export const CalendarItem = React.forwardRef<
  CalendarRef,
  Partial<CalendarItemProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    children,
    popup,
    type,
    autoBackfill,
    title,
    defaultValue,
    startDate,
    endDate,
    showToday,
    startText,
    endText,
    confirmText,
    showTitle,
    showSubTitle,
    scrollAnimation,
    firstDayOfWeek,
    disableDate,
    renderHeaderButtons,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onConfirm,
    onUpdate,
    onDayClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const weekdays = locale.calendaritem.weekdays
  const weeks = [
    ...weekdays.slice(firstDayOfWeek, 7),
    ...weekdays.slice(0, firstDayOfWeek),
  ]
  const monthTitle = locale.calendaritem.monthTitle
  const [yearMonthTitle, setYearMonthTitle] = useState('')
  const [monthsData, setMonthsData] = useState<any[]>([])
  const [monthsNum, setMonthsNum] = useState<number>(0)
  const [translateY, setTranslateY] = useState(0)
  const [monthDefaultRange, setMonthDefaultRange] = useState<number[]>([])
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollWithAnimation, setScrollWithAnimation] = useState<boolean>(false)

  // 初始化开始结束数据
  const propStartDate = (startDate || Utils.getDay(0)) as string
  const propEndDate = (endDate || Utils.getDay(365)) as string

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
    onChange: (val) => {},
  })

  const weeksPanel = useRef<HTMLDivElement>(null)
  const monthsRef = useRef<HTMLDivElement>(null)
  const monthsPanel = useRef<HTMLDivElement>(null)
  const viewAreaRef = useRef<HTMLDivElement>(null)
  const [avgHeight, setAvgHeight] = useState(0)
  let viewHeight = 0

  const classPrefix = 'nut-calendar'
  const dayPrefix = 'nut-calendar-day'

  // 获取月数据
  const getMonthData = (curData: string[], monthNum: number, type: string) => {
    let i = 0
    let date = curData
    const monthData = monthsData
    do {
      const y = parseInt(date[0], 10)
      const m = parseInt(date[1], 10)
      const days = [
        ...(getPreMonthDates('prev', y, m, firstDayOfWeek) as Day[]),
        ...(getDaysStatus('active', y, m) as Day[]),
      ]
      const cssHeight = 39 + (days.length > 35 ? 384 : 320)

      let scrollTop = 0
      if (monthData.length > 0) {
        const monthEle = monthData[monthData.length - 1]
        scrollTop = monthEle.scrollTop + monthEle.cssHeight
      }
      const monthInfo: MonthInfo = {
        curData: date,
        title: monthTitle(y, m),
        monthData: days,
        cssHeight,
        scrollTop,
      }

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
          monthData.push(monthInfo)
        }
      } else if (
        !startDates ||
        !Utils.compareDate(
          `${curData[0]}/${curData[1]}/${curData[2]}`,
          `${startDates[0]}/${startDates[1]}/01`
        )
      ) {
        monthData.unshift(monthInfo)
      }

      date = getCurrMonthData('next', y, m) as string[]
    } while (i++ < monthNum)

    setMonthsData(monthData)
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

  const getMonthNum = () => {
    let monthNum = Number(endDates[1]) - Number(startDates[1])
    const yearNum = Number(endDates[0]) - Number(startDates[0])
    if (yearNum > 0) {
      monthNum += 12 * yearNum
    }
    if (monthNum <= 0) {
      monthNum = 1
    }
    setMonthsNum(monthNum)
    return monthNum
  }
  const setDefaultDate = () => {
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
    } else if (type === 'multiple' && Array.isArray(currentDate)) {
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
    } else if (type === 'week' && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        const [y, m, d] = splitDate(currentDate[0])
        const weekArr = Utils.getWeekDate(y, m, d, firstDayOfWeek)
        currentDate.splice(0) && currentDate.push(...weekArr)
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
    return defaultData
  }

  const getCurrentIndex = (defaultData: InputDate) => {
    // 设置默认可见区域
    let current = 0
    let lastCurrent = 0
    if (defaultData.length > 0) {
      monthsData.forEach((item, index) => {
        if (item.title === monthTitle(defaultData[0], defaultData[1])) {
          current = index
        }
        if (type === 'range' || type === 'week') {
          if (item.title === monthTitle(defaultData[3], defaultData[4])) {
            lastCurrent = index
          }
        }
      })
    } else {
      // 当 defaultValue 为空时，如果月份列表包含当月，则默认定位到当月
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const index = monthsData.findIndex((item) => {
        return +item.curData[0] === year && +item.curData[1] === month
      })
      if (index > -1) {
        current = index
      }
    }
    return {
      current,
      lastCurrent,
    }
  }

  const renderCurrentDate = () => {
    const defaultData: InputDate = setDefaultDate()
    const current = getCurrentIndex(defaultData)

    if (defaultData.length > 0) {
      // 设置当前选中日期
      if (type === 'range') {
        chooseDay(
          { day: defaultData[2], type: 'active' },
          monthsData[current.current],
          true
        )
        chooseDay(
          { day: defaultData[5], type: 'active' },
          monthsData[current.lastCurrent],
          true
        )
      } else if (props.type === 'week') {
        chooseDay(
          { day: defaultData[2], type: 'curr' },
          monthsData[current.current],
          true
        )
      } else if (type === 'multiple') {
        ;[...currentDate].forEach((item: string) => {
          const dateArr = splitDate(item)
          let currentIndex = current.current
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
          monthsData[current.current],
          true
        )
      }
    }
    return current.current
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
        setScrollTop(monthsData[current].scrollTop)
        nextTick(() => setScrollWithAnimation(true))
      }
    })

    setAvgHeight(Math.floor(containerHeight / (monthNum + 1)))
  }

  const initData = () => {
    // 判断时间范围内存在多少个月
    const monthNum = getMonthNum()
    // 设置月份数据，获取包含月份的所有数据，只需要 set 一次即可。
    getMonthData(startDates, monthNum, 'next')
    const current = renderCurrentDate()
    setDefaultRange(monthNum, current)
    requestAniFrameFunc(current, monthNum)
  }

  useEffect(() => {
    initData()
  }, [])
  const resetRender = () => {
    state.currDateArray.splice(0)
    monthsData.splice(0)
    initData()
  }

  useEffect(() => {
    setCurrentDate(resetDefaultValue() || [])
    popup && resetRender()
  }, [defaultValue])

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
                  setScrollTop(monthsRef.current.scrollTop)
                }
              }
            }, 40)
          } else {
            monthsRef.current.scrollTop = currTop
            setScrollTop(monthsRef.current.scrollTop)
          }
        }
      }
    })
  }

  const monthsViewScroll = (e: any) => {
    if (monthsData.length <= 1) {
      return
    }
    const scrollTop = (e.detail as HTMLElement).scrollTop
    Taro.getEnv() === 'WEB' && setScrollTop(scrollTop)
    let current = Math.floor(scrollTop / avgHeight)
    if (!monthsData[current + 1]) return
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

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const getClasses = (day: Day, month: MonthInfo) => {
    const dateStr = getCurrDate(day, month)
    if (day.type === 'active') {
      if (
        (propStartDate && Utils.compareDate(dateStr, propStartDate)) ||
        (propEndDate && Utils.compareDate(propEndDate, dateStr))
      ) {
        return `${dayPrefix}-disabled`
      }
      if (type === 'range' || type === 'week') {
        if (
          isStart(dateStr, currentDate as string[]) ||
          isEnd(dateStr, currentDate as string[])
        ) {
          return `${dayPrefix}-active ${
            isStart(dateStr, currentDate as string[]) ? 'active-start' : ''
          } ${isEnd(dateStr, currentDate as string[]) ? 'active-end' : ''}`
        }
        if (
          Array.isArray(currentDate) &&
          Object.values(currentDate).length === 2 &&
          Utils.compareDate(currentDate[0], dateStr) &&
          Utils.compareDate(dateStr, currentDate[1])
        ) {
          if (disableDate(day)) {
            return `${dayPrefix}-choose-disabled`
          }
          return `${dayPrefix}-choose`
        }
      } else if (
        (type === 'multiple' && isMultiple(dateStr, currentDate as string[])) ||
        (!Array.isArray(currentDate) &&
          Utils.isEqual(currentDate as string, dateStr))
      ) {
        return `${dayPrefix}-active`
      }

      if (disableDate(day)) {
        return `${dayPrefix}-disabled`
      }
      return null
    }

    return `${dayPrefix}-disabled`
  }

  const chooseDay = (day: Day, month: MonthInfo, isFirst?: boolean) => {
    if (getClasses(day, month) === `${dayPrefix}-disabled`) {
      return
    }

    const days = [...month.curData]
    const [y, m] = month.curData
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
    } else if (type === 'week') {
      const weekArr = Utils.getWeekDate(y, m, `${day.day}`, firstDayOfWeek)
      if (propStartDate && Utils.compareDate(weekArr[0], propStartDate)) {
        weekArr.splice(0, 1, propStartDate)
      }
      if (propEndDate && Utils.compareDate(propEndDate, weekArr[1])) {
        weekArr.splice(1, 1, propEndDate)
      }
      Array.isArray(currentDate) &&
        currentDate.splice(0) &&
        currentDate.push(...weekArr)
      state.currDateArray = [
        Utils.formatResultDate(weekArr[0]),
        Utils.formatResultDate(weekArr[1]),
      ]
    } else {
      setCurrentDate(days[3])
      state.currDateArray = [...days]
    }

    if (!isFirst) {
      onDayClick && onDayClick(state.currDateArray)
      if (autoBackfill || !popup) {
        confirm()
      }
    }

    setMonthsData(monthsData.slice())
  }

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

  const classes = classNames(
    {
      [`${classPrefix}-title`]: !popup,
      [`${classPrefix}-nofooter`]: !!autoBackfill,
    },
    className,
    classPrefix
  )

  const headerClasses = classNames({
    [`${classPrefix}-header`]: true,
    [`${classPrefix}-header-title`]: !popup,
  })
  // 是否有开始提示
  const isStartTip = (day: Day, month: MonthInfo) => {
    return (
      (type === 'range' || type === 'week') &&
      day.type === 'active' &&
      isStart(getCurrDate(day, month), currentDate as string[])
    )
  }

  // 是否有结束提示
  const isEndTip = (day: Day, month: MonthInfo) => {
    return (
      currentDate.length >= 2 &&
      (type === 'range' || type === 'week') &&
      day.type === 'active' &&
      isEnd(getCurrDate(day, month), currentDate as string[])
    )
  }

  const renderHeader = () => {
    return (
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
    )
  }

  const renderContent = () => {
    return (
      <ScrollView
        scrollTop={scrollTop}
        scrollY
        type="list"
        scrollWithAnimation={scrollWithAnimation}
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
                              <div className={`${classPrefix}-day-info-bottom`}>
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
                                isStartAndEnd(currentDate as string[])
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
      </ScrollView>
    )
  }

  const renderFooter = () => {
    return (
      <div className="nut-calendar-footer">
        {children}
        <div className="calendar-confirm-btn" onClick={confirm}>
          {confirmText || locale.confirm}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={classes} style={style}>
        {renderHeader()}
        {renderContent()}
        {popup && !autoBackfill ? renderFooter() : ''}
      </div>
    </>
  )
})

CalendarItem.defaultProps = defaultProps
CalendarItem.displayName = 'NutCalendarItem'
