import React, { useState, useEffect, useRef, ReactNode } from 'react'
import classNames from 'classnames'
import { ScrollView } from '@tarojs/components'
import Taro, { nextTick } from '@tarojs/taro'
import { PopupProps } from '@/packages/popup/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import {
  getDateString,
  compareDate,
  getMonthDays,
  isEqual,
  getNumTwoBit,
  getWhatDay,
} from '@/utils/date'
import {
  getCurrMonthData,
  getPreMonthDates,
  getWeekDate,
  formatResultDate,
  getDaysStatus,
  getWeekNosOfYear,
} from './utils'
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
import {
  CalendarDay,
  CalendarMonthInfo,
  CalendarValue,
  CalendarType,
} from '../calendar/types'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

interface CalendarState {
  currDateArray: any
}

export interface CalendarItemProps extends PopupProps {
  type: CalendarType
  autoBackfill: boolean
  popup: boolean
  title: string
  value?: CalendarValue
  defaultValue?: CalendarValue
  startDate: CalendarValue
  endDate: CalendarValue
  showToday: boolean
  startText: ReactNode
  endText: ReactNode
  confirmText: ReactNode
  showTitle: boolean
  showSubTitle: boolean
  showMonthNumber: boolean
  scrollAnimation: boolean
  firstDayOfWeek: number
  disableDate: (date: CalendarDay) => boolean
  renderHeaderButtons: () => string | JSX.Element
  renderBottomButton: () => string | JSX.Element
  renderDay: (date: CalendarDay) => string | JSX.Element
  renderDayTop: (date: CalendarDay) => string | JSX.Element
  renderDayBottom: (date: CalendarDay) => string | JSX.Element
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
  startDate: getDateString(0),
  endDate: getDateString(365),
  showToday: true,
  startText: '',
  endText: '',
  confirmText: '',
  showTitle: true,
  showSubTitle: true,
  showMonthNumber: false,
  scrollAnimation: true,
  firstDayOfWeek: 0,
  disableDate: (date: CalendarDay) => false,
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
    value,
    defaultValue,
    startDate,
    endDate,
    showToday,
    startText,
    endText,
    confirmText,
    showTitle,
    showSubTitle,
    showMonthNumber,
    scrollAnimation,
    firstDayOfWeek,
    disableDate,
    renderHeaderButtons,
    renderBottomButton,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onConfirm,
    onUpdate,
    onDayClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-calendar'
  const dayPrefix = 'nut-calendar-day'

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
  const propStartDate = (startDate || getDateString(0)) as string
  const propEndDate = (endDate || getDateString(365)) as string

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
    return type === 'single' ? '' : []
  }

  const [currentDate, setCurrentDate] = usePropsValue<CalendarValue>({
    value,
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

  // 获取月数据
  const getMonthData = (curData: string[], monthNum: number) => {
    let i = 0
    let date = curData
    const monthData = monthsData
    do {
      const y = parseInt(date[0], 10)
      const m = parseInt(date[1], 10)
      const days = [
        ...getPreMonthDates('prev', y, m, firstDayOfWeek),
        ...getDaysStatus('active', y, m),
      ] as CalendarDay[]
      let scrollTop = 0
      if (monthData.length > 0) {
        const monthEle = monthData[monthData.length - 1]
        scrollTop = monthEle.scrollTop + monthEle.cssHeight
      }
      const cssHeight = 39 + (days.length > 35 ? 384 : 320)
      const monthInfo = {
        curData: date,
        title: monthTitle(y, m),
        weekNo: getWeekNosOfYear(y, m, firstDayOfWeek),
        monthData: days,
        cssHeight,
        scrollTop,
      }
      if (
        !endDates ||
        !compareDate(
          `${endDates[0]}/${endDates[1]}/${getMonthDays(
            endDates[0],
            endDates[1]
          )}`,
          `${curData[0]}/${curData[1]}/${curData[2]}`
        )
      ) {
        monthData.push(monthInfo)
      }
      date = getCurrMonthData('next', y, m) as string[]
    } while (i++ < monthNum)
    setMonthsData(monthData)
  }

  const setReachedYearMonthInfo = (current: number) => {
    const currentMonthsData = monthsData[current]
    if (currentMonthsData.title === yearMonthTitle) return
    const [year, month] = currentMonthsData.curData
    onPageChange?.([year, month, `${year}-${month}`])
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

  const setDefaultDate = () => {
    let defaultData: CalendarValue = []
    if (type === 'single' && typeof currentDate === 'string') {
      if (!currentDate.length) {
        return defaultData
      }
      if (compareDate(currentDate, propStartDate)) {
        defaultData = [...splitDate(propStartDate)]
      } else if (!compareDate(currentDate, propEndDate)) {
        defaultData = [...splitDate(propEndDate)]
      } else {
        defaultData = [...splitDate(currentDate)]
      }
      return defaultData
    }
    if (Array.isArray(currentDate) && currentDate.length) {
      switch (type) {
        case 'range': {
          if (compareDate(currentDate[0], propStartDate)) {
            currentDate[0] = propStartDate
          }
          if (compareDate(propEndDate, currentDate[1])) {
            currentDate[1] = propEndDate
          }
          defaultData = [
            ...splitDate(currentDate[0]),
            ...splitDate(currentDate[1]),
          ]
          break
        }
        case 'multiple': {
          const defaultArr = [] as string[]
          const obj: Record<string, unknown> = {}
          currentDate.forEach((item: string) => {
            if (
              !compareDate(item, propStartDate) &&
              !compareDate(propEndDate, item)
            ) {
              if (!Object.hasOwnProperty.call(obj, item)) {
                defaultArr.push(item)
                obj[item] = item
              }
            }
          })
          currentDate.splice(0, currentDate.length, ...defaultArr)
          defaultData = [...splitDate(defaultArr[0])]
          break
        }
        case 'week': {
          const [y, m, d] = splitDate(currentDate[0])
          const weekArr = getWeekDate(y, m, d, firstDayOfWeek)
          currentDate.splice(0, currentDate.length, ...weekArr)
          if (compareDate(currentDate[0], propStartDate)) {
            currentDate.splice(0, 1, propStartDate)
          }
          if (compareDate(propEndDate, currentDate[1])) {
            currentDate.splice(1, 1, propEndDate)
          }
          defaultData = [
            ...splitDate(currentDate[0]),
            ...splitDate(currentDate[1]),
          ]
          break
        }
        default:
          break
      }
    }
    return defaultData
  }

  const getCurrentIndex = (defaultData: CalendarValue) => {
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
      const index = monthsData.findIndex(
        (item) => +item.curData[0] === year && +item.curData[1] === month
      )
      if (index > -1) current = index
    }
    return {
      current,
      lastCurrent,
    }
  }

  const renderCurrentDate = (defaultData: any, current: any) => {
    if (!defaultData.length) return
    // 设置当前选中日期
    const date = monthsData[current.current]
    switch (type) {
      case 'range': {
        handleDayClick({ day: defaultData[2], type: 'active' }, date)
        handleDayClick(
          { day: defaultData[5], type: 'active' },
          monthsData[current.lastCurrent]
        )
        break
      }
      case 'week': {
        handleDayClick({ day: defaultData[2], type: 'curr' }, date)
        break
      }
      case 'multiple': {
        ;[...currentDate].forEach((item: string) => {
          const dateArr = splitDate(item)
          let currentIndex = current.current
          currentIndex = monthsData.findIndex(
            (item) => item.title === monthTitle(dateArr[0], dateArr[1])
          )
          handleDayClick(
            { day: dateArr[2], type: 'active' },
            monthsData[currentIndex]
          )
        })
        break
      }
      default: {
        handleDayClick({ day: defaultData[2], type: 'active' }, date)
        break
      }
    }
  }

  const getMonthsPanel = () => {
    return monthsPanel.current as HTMLDivElement
  }

  const getMonthsRef = () => {
    return monthsRef.current as HTMLDivElement
  }

  const requestAniFrameFunc = (current: number, monthNum: number) => {
    const lastItem = monthsData[monthsData.length - 1]
    const containerHeight = lastItem.cssHeight + lastItem.scrollTop
    requestAniFrame(() => {
      // 初始化 日历位置
      if (monthsRef && monthsPanel && viewAreaRef) {
        viewHeight = getMonthsRef().clientHeight
        getMonthsPanel().style.height = `${containerHeight}px`
        const currTop = monthsData[current].scrollTop
        getMonthsRef().scrollTop = currTop
        setScrollTop(currTop)
        nextTick(() => setScrollWithAnimation(true))
      }
    })
    setAvgHeight(Math.floor(containerHeight / (monthNum + 1)))
  }

  const getMonthNum = () => {
    let monthNum = Number(endDates[1]) - Number(startDates[1])
    const yearNum = Number(endDates[0]) - Number(startDates[0])
    if (yearNum > 0) monthNum += 12 * yearNum
    if (monthNum <= 0) monthNum = 1
    setMonthsNum(monthNum)
    return monthNum
  }

  const initData = () => {
    // 判断时间范围内存在多少个月
    const monthNum = getMonthNum()
    // 设置月份数据，获取包含月份的所有数据，只需要 set 一次即可。
    getMonthData(startDates, monthNum)
    // 获取当前默认值
    const defaultData = setDefaultDate()
    // 获取当前默认值在的月份
    const current = getCurrentIndex(defaultData)
    const currentIndex = current.current
    // 渲染第一个默认数据
    renderCurrentDate(defaultData, current)
    setDefaultRange(monthNum, currentIndex)
    requestAniFrameFunc(currentIndex, monthNum)
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
    setCurrentDate(resetDefaultValue())
  }, [defaultValue])

  useEffect(() => {
    popup && resetRender()
  }, [currentDate])

  // 暴露出的API
  const scrollToDate = (date: string) => {
    if (compareDate(date, propStartDate)) {
      date = propStartDate
    } else if (!compareDate(date, propEndDate)) {
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
                  setScrollTop(currTop)
                }
              }
            }, 40)
          } else {
            monthsRef.current.scrollTop = currTop
            setScrollTop(currTop)
          }
        }
      }
    })
  }

  const monthsViewScroll = (e: any) => {
    if (monthsData.length <= 1) return
    const scrollTop = (e.target as HTMLElement).scrollTop
    Taro.getEnv() === 'WEB' && setScrollTop(scrollTop)
    let current = Math.floor(scrollTop / avgHeight)
    if (current < 0) return
    if (!monthsData[current + 1]) return
    const nextTop = monthsData[current + 1].scrollTop
    const nextHeight = monthsData[current + 1].cssHeight
    if (current === 0) {
      if (scrollTop >= nextTop) current += 1
    } else if (current > 0 && current < monthsNum - 1) {
      if (scrollTop >= nextTop) current += 1
      if (scrollTop < monthsData[current].scrollTop) current -= 1
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

  const isDisable = (day: CalendarDay, month: CalendarMonthInfo) => {
    if (day.type !== 'active') return true
    const dateStr = getCurrDate(day, month)
    if (compareDate(dateStr, propStartDate)) return true
    if (compareDate(propEndDate, dateStr)) return true
    return false
  }

  const getClasses = (day: CalendarDay, month: CalendarMonthInfo) => {
    const dateStr = getCurrDate(day, month)
    if (isDisable(day, month)) return `${dayPrefix}-disabled`
    const activeCls = `${dayPrefix}-active`
    if (type === 'range' || type === 'week') {
      if (isStart(dateStr, currentDate as string[]))
        return `${activeCls} active-start`
      if (isEnd(dateStr, currentDate as string[])) {
        return `${activeCls} active-end`
      }
      if (
        currentDate.length === 2 &&
        compareDate(currentDate[0], dateStr) &&
        compareDate(dateStr, currentDate[1])
      ) {
        return disableDate(day)
          ? `${dayPrefix}-choose-disabled`
          : `${dayPrefix}-choose`
      }
    } else if (
      (type === 'multiple' && isMultiple(dateStr, currentDate as string[])) ||
      (!Array.isArray(currentDate) && isEqual(currentDate, dateStr))
    ) {
      return activeCls
    }
    if (disableDate(day)) return `${dayPrefix}-disabled`
    return null
  }

  const handleDayClick = (
    day: CalendarDay,
    month: CalendarMonthInfo,
    isFirst: boolean = true
  ) => {
    if (isDisable(day, month) || disableDate(day)) return
    const days = [...month.curData]
    const [y, m] = month.curData
    days[2] = typeof day.day === 'number' ? getNumTwoBit(day.day) : day.day
    days[3] = `${days[0]}/${days[1]}/${days[2]}`
    days[4] = getWhatDay(+days[0], +days[1], +days[2])
    const newDate = days[3]

    switch (type) {
      case 'multiple': {
        if (Array.isArray(currentDate)) {
          if (currentDate.length > 0) {
            const hasIndex = currentDate.findIndex((item) => item === newDate)
            if (isFirst) {
              state.currDateArray.push([...days])
            } else if (hasIndex > -1) {
              currentDate.splice(hasIndex, 1)
              state.currDateArray.splice(hasIndex, 1)
            } else {
              currentDate.push(newDate)
              state.currDateArray.push([...days])
            }
          } else {
            currentDate.push(newDate)
            state.currDateArray = [[...days]]
          }
        }
        break
      }
      case 'range': {
        if (Array.isArray(currentDate)) {
          if (currentDate.length === 2 || currentDate.length === 0) {
            currentDate.splice(0, currentDate.length, newDate)
            state.currDateArray = [[...days]]
          } else if (compareDate(currentDate[0], newDate)) {
            currentDate.push(newDate)
            state.currDateArray = [...state.currDateArray, [...days]]
          } else {
            currentDate.unshift(newDate)
            state.currDateArray = [[...days], ...state.currDateArray]
          }
        }
        break
      }
      case 'week': {
        const weekArr = getWeekDate(y, m, `${day.day}`, firstDayOfWeek)
        if (compareDate(weekArr[0], propStartDate)) {
          weekArr[0] = propStartDate
        }
        if (compareDate(propEndDate, weekArr[1])) {
          weekArr[1] = propEndDate
        }
        ;(currentDate as string[]).splice(0, currentDate.length, ...weekArr)
        state.currDateArray = [
          formatResultDate(weekArr[0]),
          formatResultDate(weekArr[1]),
        ]
        break
      }
      default: {
        setCurrentDate(newDate)
        state.currDateArray = [...days]
        break
      }
    }
    if (!isFirst) {
      onDayClick?.(state.currDateArray)
      if (autoBackfill || !popup) {
        confirm()
      }
    }
    setMonthsData(monthsData.slice())
  }

  const confirm = () => {
    if (
      (type === 'range' && state.currDateArray.length === 2) ||
      type !== 'range'
    ) {
      const chooseData = state.currDateArray.slice(0)
      onConfirm?.(chooseData)
      if (popup) {
        onUpdate?.()
      }
    }
  }

  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-title`]: !popup,
      [`${classPrefix}-nofooter`]: !!autoBackfill,
    },
    className
  )

  const headerClasses = classNames({
    [`${classPrefix}-header`]: true,
    [`${classPrefix}-header-title`]: !popup,
  })

  // 是否有开始提示
  const isStartTip = (day: CalendarDay, month: CalendarMonthInfo) => {
    return (
      (type === 'range' || type === 'week') &&
      day.type === 'active' &&
      isStart(getCurrDate(day, month), currentDate as string[])
    )
  }

  // 是否有结束提示
  const isEndTip = (day: CalendarDay, month: CalendarMonthInfo) => {
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
        <div
          className={`${classPrefix}-weeks ${showMonthNumber ? `${classPrefix}-weeks-shrink` : ''}`}
          ref={weeksPanel}
        >
          {weeks.map((item: string) => (
            <div className={`${classPrefix}-week-item`} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderItem = (month: any, day: any, index: number) => {
    const startTip = isStartTip(day, month)
    const endTip = isEndTip(day, month)
    const noStartNorEnd = !startTip && !endTip
    return (
      <div
        className={classNames('nut-calendar-day', getClasses(day, month))}
        onClick={() => handleDayClick(day, month, false)}
        key={index}
      >
        <div className={`${classPrefix}-day-day`}>
          {renderDay ? renderDay(day) : day.day}
        </div>
        {!startTip && renderDayTop && (
          <div className={`${classPrefix}-day-info-top`}>
            {renderDayTop(day)}
          </div>
        )}
        {noStartNorEnd && renderDayBottom && (
          <div className={`${classPrefix}-day-info-bottom`}>
            {renderDayBottom(day)}
          </div>
        )}
        {noStartNorEnd &&
          !renderDayBottom &&
          showToday &&
          isCurrDay(month, day.day) && (
            <div className={`${classPrefix}-day-info-curr`}>
              {locale.calendaritem.today}
            </div>
          )}
        {startTip && (
          <div
            className={classNames('nut-calendar-day-info', {
              'nut-calendar-day-info-top': isStartAndEnd(
                currentDate as string[]
              ),
            })}
          >
            {startText || locale.calendaritem.start}
          </div>
        )}
        {endTip && (
          <div className={`${classPrefix}-day-info`}>
            {endText || locale.calendaritem.end}
          </div>
        )}
      </div>
    )
  }

  const renderPanel = (month: any, key: number) => {
    return (
      <div className={`${classPrefix}-month`} key={key}>
        <div className={`${classPrefix}-month-title`}>{month.title}</div>
        <div className={`${showMonthNumber ? 'shrink' : ''}`}>
          {showMonthNumber && (
            <div className={`${classPrefix}-weeknumber`}>
              {month.weekNo.map((item: string, index: number) => (
                <div className={`${classPrefix}-weeknumber-index`} key={index}>
                  {item}
                </div>
              ))}
            </div>
          )}
          <div className={`${classPrefix}-days`}>
            {month.monthData.map((day: CalendarDay, i: number) =>
              renderItem(month, day, i)
            )}
          </div>
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
            ref={viewAreaRef}
            style={{ transform: `translateY(${translateY}px)` }}
          >
            {monthsData
              .slice(monthDefaultRange[0], monthDefaultRange[1])
              .map((month: any, key: number) => {
                return renderPanel(month, key)
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
        <div onClick={confirm}>
          {renderBottomButton ? (
            renderBottomButton()
          ) : (
            <div className="calendar-confirm-btn">
              {confirmText || locale.confirm}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={classes} style={style}>
      {renderHeader()}
      {renderContent()}
      {popup && !autoBackfill ? renderFooter() : ''}
    </div>
  )
})

CalendarItem.displayName = 'NutCalendarItem'
