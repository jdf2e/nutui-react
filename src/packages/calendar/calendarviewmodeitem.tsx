import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import {
  getDateString,
  compareDate,
  getPreMonths,
  getMonths,
  getPreQuarters,
  getNextQuarters,
  getQuarters,
  formatMonth,
  formatQuarter,
} from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import { splitDate } from './utils'
import { CalendarDay, CalendarValue, CalendarType } from './types'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

export interface CalendarViewModeItemProps {
  type: CalendarType
  viewMode: 'month' | 'quarter'
  title: string
  value?: CalendarValue
  defaultValue?: CalendarValue
  startDate: CalendarValue
  endDate: CalendarValue
  showTitle: boolean
  scrollAnimation: boolean
  renderDay: (date: CalendarDay) => string | JSX.Element
  onItemClick: (data: string) => void
  onPageChange: (data: any) => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  viewMode: 'month',
  title: '',
  startDate: getDateString(0),
  endDate: getDateString(365),
  showToday: true,
  showTitle: true,
  scrollAnimation: true,
  renderDay: undefined,
  onItemClick: () => {},
  onPageChange: (data: any) => {},
} as unknown as CalendarViewModeItemProps

export const CalendarViewModeItem = React.forwardRef<
  CalendarRef,
  Partial<CalendarViewModeItemProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    viewMode,
    title,
    value,
    defaultValue,
    startDate,
    endDate,
    showTitle,
    scrollAnimation,
    renderDay,
    onItemClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-calendar-viewmode'

  // 为了便于区分，用'YYYY-MM'表示月，用'YYYY-QX'表示Q
  const [panelDate, setPanelDate] = useState({
    months: [
      {
        year: new Date().getFullYear(),
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        cssHeight: 0,
        scrollTop: 0,
        currYear: false,
      },
    ],
    quarters: [
      {
        year: new Date().getFullYear(),
        quarters: [1, 2, 3, 4],
        cssHeight: 0,
        scrollTop: 0,
        currYear: false,
      },
    ],
  })

  const monthTitle = locale.calendaritem.monthTitle
  const [monthsData] = useState<any[]>([])
  const [translateY, setTranslateY] = useState(0)

  // 初始化开始结束数据
  const propStartDate = (startDate || getDateString(0)) as string
  const propEndDate = (endDate || getDateString(365)) as string
  const startDates = splitDate(propStartDate)
  const endDates = splitDate(propEndDate)

  const [innerValue, setInnerValue] = usePropsValue({
    value,
    defaultValue,
    finalValue: [],
    onChange: (val) => {},
  })

  const monthsRef = useRef<HTMLDivElement>(null)
  const monthsPanel = useRef<HTMLDivElement>(null)
  const viewAreaRef = useRef<HTMLDivElement>(null)
  let viewHeight = 0

  const getMonthsPanel = () => {
    return monthsPanel.current as HTMLDivElement
  }

  const getMonthsRef = () => {
    return monthsRef.current as HTMLDivElement
  }

  const requestAniFrameFunc = (viewMode: string) => {
    switch (viewMode) {
      case 'month':
        {
          const lastItem = panelDate.months[panelDate.months.length - 1]
          const containerHeight = lastItem.cssHeight + lastItem.scrollTop
          const currentIndex = panelDate.months.findIndex(
            (item) => item.currYear === true
          )

          console.log(
            'containerHeight',
            containerHeight,
            currentIndex,
            panelDate.months.length,
            panelDate.months
          )
          requestAniFrame(() => {
            // 初始化 日历位置
            if (monthsRef && monthsPanel && viewAreaRef) {
              viewHeight = getMonthsRef().clientHeight
              getMonthsPanel().style.height = `${containerHeight}px`
              getMonthsRef().scrollTop =
                panelDate.months[currentIndex].scrollTop
            }
          })
        }
        break
      case 'quarter':
        {
          const lastItem = panelDate.quarters[panelDate.quarters.length - 1]
          const containerHeight = lastItem.cssHeight + lastItem.scrollTop
          const currentIndex = panelDate.quarters.findIndex(
            (item) => item.currYear === true
          )

          console.log(
            'containerHeight',
            containerHeight,
            currentIndex,
            panelDate.quarters.length,
            panelDate.quarters
          )
          requestAniFrame(() => {
            // 初始化 日历位置
            if (monthsRef && monthsPanel && viewAreaRef) {
              viewHeight = getMonthsRef().clientHeight
              getMonthsPanel().style.height = `${containerHeight}px`
              getMonthsRef().scrollTop =
                panelDate.quarters[currentIndex].scrollTop
            }
          })
        }
        break
      default:
        break
    }
  }

  const isCurrYear = (year: number) => {
    return (innerValue as string).split('-')[0] === `${year}`
  }

  const getMonthsData = () => {
    // 获取区间范围内可用的月数，包括边界值所在的月份
    const startYear = Number(startDates[0])
    const startMonth = Number(startDates[1])
    const endYear = Number(endDates[0])
    const endMonth = Number(endDates[1])
    let panelData = []
    const YearMonthPanelHeight = 231
    // 在同一年时
    if (startYear === endYear) {
      const months = [
        ...getPreMonths('prev', startYear, startMonth),
        ...getMonths('curr', startYear, startMonth, endMonth),
        ...getMonths('next', endYear, endMonth + 1),
      ]
      panelData.push({
        year: startYear,
        months,
        scrollTop: 0,
        cssHeight: YearMonthPanelHeight,
        currYear: isCurrYear(startYear),
      })
    } else {
      let scrollTop = panelData.length * YearMonthPanelHeight
      const startMonths = [
        ...getPreMonths('prev', startYear, startMonth),
        ...getMonths('curr', startYear, startMonth),
      ]
      panelData.push({
        year: startYear,
        months: startMonths,
        scrollTop,
        cssHeight: YearMonthPanelHeight,
        currYear: isCurrYear(startYear),
      })
      // 不同年份时，注意可能跨多个年
      for (let i = startYear + 1; i < endYear; i++) {
        scrollTop = panelData.length * YearMonthPanelHeight
        const midMonths = [...getMonths('curr', i, 1)]
        panelData = [
          ...panelData,
          {
            year: i,
            months: midMonths,
            scrollTop,
            cssHeight: YearMonthPanelHeight,
            currYear: isCurrYear(i),
          },
        ]
      }
      const lastMonths = [
        ...getPreMonths('curr', endYear, endMonth + 1),
        ...getMonths('next', endYear, endMonth + 1),
      ]
      // 年面板的高度：cssHeight 231
      // 第某年的scrollTop：年面板高度 * （第某年数-1）
      scrollTop = panelData.length * YearMonthPanelHeight
      panelData = [
        ...panelData,
        {
          year: endYear,
          months: lastMonths,
          scrollTop,
          cssHeight: YearMonthPanelHeight,
          currYear: isCurrYear(endYear),
        },
      ]
    }
    return panelData
  }

  const getQuartersData = () => {
    // 获取区间范围内可用的季度数，包括边界值所在的季度数
    const startYear = Number(startDates[0])
    const startMonth = Number(startDates[1])
    const endYear = Number(endDates[0])
    const endMonth = Number(endDates[1])
    let panelData = []
    const YearQuarterPanelHeight = 103
    // 在同一年时
    if (startYear === endYear) {
      const months = [
        ...getPreQuarters('prev', startYear, startMonth),
        ...getQuarters('curr', startYear, startMonth, endMonth),
        ...getNextQuarters('next', endYear, endMonth),
      ]
      panelData.push({
        year: startYear,
        quarters: months,
        scrollTop: 0,
        cssHeight: YearQuarterPanelHeight,
        currYear: isCurrYear(startYear),
      })
    } else {
      let scrollTop = panelData.length * YearQuarterPanelHeight
      const startQuarters = [
        ...getPreQuarters('prev', startYear, startMonth),
        ...getQuarters('curr', startYear, startMonth),
      ]
      panelData.push({
        year: startYear,
        quarters: startQuarters,
        scrollTop,
        cssHeight: YearQuarterPanelHeight,
        currYear: isCurrYear(startYear),
      })
      // 不同年份时，注意可能跨多个年
      for (let i = startYear + 1; i < endYear; i++) {
        scrollTop = panelData.length * YearQuarterPanelHeight
        const midMonths = [...getQuarters('curr', i, 1)]
        panelData = [
          ...panelData,
          {
            year: i,
            quarters: midMonths,
            scrollTop,
            cssHeight: YearQuarterPanelHeight,
            currYear: isCurrYear(i),
          },
        ]
      }
      const lastMonths = [
        ...getQuarters('curr', endYear, 1, endMonth),
        ...getNextQuarters('next', endYear, endMonth),
      ]
      scrollTop = panelData.length * YearQuarterPanelHeight
      panelData = [
        ...panelData,
        {
          year: endYear,
          quarters: lastMonths,
          scrollTop,
          cssHeight: YearQuarterPanelHeight,
          currYear: isCurrYear(endYear),
        },
      ]
    }
    return panelData
  }

  /*
   * 初始化面板数据
   * 获取总数据panelDate
   * 根据当前默认值跳转到指定位置
   */
  const initData = () => {
    // 获取起止时间内的所有的周、月、季
    switch (viewMode) {
      case 'month': {
        const months = getMonthsData()
        console.log(',,,months', months)
        setPanelDate({ ...panelDate, months: months as any })
        break
      }
      case 'quarter': {
        const quarters = getQuartersData()
        setPanelDate({ ...panelDate, quarters: quarters as any })
        break
      }
      default:
        break
    }
  }

  useEffect(() => {
    requestAniFrameFunc(viewMode)
  }, [panelDate])

  useEffect(() => {
    initData()
  }, [])

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

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const handleItemClick = (viewMode: string, item: any) => {
    // 点击事件，可以返回所点击元素的数据
    // 如果非可点击，则直接返回，不做处理
    if (item.type !== 'curr') return
    // 可点击时，需要关注当前元素是否已被选中，选中，取消选中，拿到数据
    const val =
      viewMode === 'month'
        ? formatMonth(item.year, item.month)
        : formatQuarter(item.year, item.quarter)
    setInnerValue(val)
    onItemClick && onItemClick(val)
  }

  const isDisable = (item: any) => {
    return item.type === 'prev' || item.type === 'next'
  }

  const isActive = (item: any) => {
    const val =
      viewMode === 'month'
        ? formatMonth(item.year, item.month)
        : formatQuarter(item.year, item.quarter)
    return val === innerValue
  }

  const getClasses = (item: any) => {
    if (isDisable(item)) {
      return ['disabled']
    }
    const res = []
    if (item.type === 'curr') {
      if (isActive(item)) {
        res.push('active')
      }
    }
    return res
  }

  const classes = classNames(classPrefix, className)

  const renderHeader = () => {
    return (
      <div
        className={classNames({
          [`${classPrefix}-header`]: true,
        })}
      >
        {showTitle && <div className={`${classPrefix}-title`}>{title}</div>}
      </div>
    )
  }

  const renderItem = (item: any, index: number) => {
    const units = {
      month: locale.calendaritem.month,
      quarter: locale.calendaritem.quarter,
    }
    return (
      <div
        className={classNames(
          `${classPrefix}-item`,
          item.type,
          getClasses(item)
        )}
        onClick={() => handleItemClick(viewMode, item)}
        key={index}
      >
        <div className={`${classPrefix}-item-${item.type}`}>
          {renderDay ? renderDay(item) : `${item[viewMode]}${units[viewMode]}`}
        </div>
      </div>
    )
  }

  const renderPanel = () => {
    switch (viewMode) {
      case 'month':
        return (
          <>
            {panelDate.months.map((item: any, key: number) => (
              <div className={`${classPrefix}-panel`} key={key}>
                <div className={`${classPrefix}-panel-title`}>{item.year}</div>
                <div className={`${classPrefix}-content`}>
                  {item.months.map((month: any, i: number) =>
                    renderItem(month, i)
                  )}
                </div>
              </div>
            ))}
          </>
        )
      case 'quarter':
        return (
          <>
            {panelDate.quarters.map((item: any, key: number) => (
              <div className={`${classPrefix}-panel`} key={key}>
                <div className={`${classPrefix}-panel-title`}>{item.year}</div>
                <div className={`${classPrefix}-content`}>
                  {item.quarters.map((quarter: any, i: number) =>
                    renderItem(quarter, i)
                  )}
                </div>
              </div>
            ))}
          </>
        )
      default:
        break
    }
  }

  const renderContent = () => {
    return (
      <div
        className={`${classPrefix}-content`}
        // onScroll={monthsViewScroll}
        ref={monthsRef}
      >
        <div className={`${classPrefix}-pannel`} ref={monthsPanel}>
          <div
            className="viewArea"
            ref={viewAreaRef}
            style={{ transform: `translateY(${translateY}px)` }}
          >
            {renderPanel()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes} style={style}>
      {renderHeader()}
      {renderContent()}
    </div>
  )
})

CalendarViewModeItem.displayName = 'NutCalendarViewModeItem'
export default CalendarViewModeItem
