import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { getDateString } from '@/utils/date'
import requestAniFrame from '@/utils/raf'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import {
  splitDate,
  getPreMonths,
  getMonths,
  getPreQuarters,
  getNextQuarters,
  getQuarters,
} from './utils'
import {
  CalendarDay,
  CalendarValue,
  CalendarType,
  CalendarMonthInfoOfPanel,
  CalendarQuarterInfoOfPanel,
  CalendarMonth,
  CalendarQuarter,
} from './types'

type CalendarRef = {
  scrollToDate: (date: string) => void
}
// 年面板的高度：cssHeight 231
const YearMonthPanelHeight = 231
// 年面板的高度：cssHeight 103
const YearQuarterPanelHeight = 103

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
} as unknown as CalendarViewModeItemProps

export const CalendarViewModeItem = React.forwardRef<
  CalendarRef,
  Partial<CalendarViewModeItemProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props) => {
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
    renderDay,
    onItemClick,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-calendar-viewmode'

  // 为了便于区分，用'YYYY-MM'表示月，用'YYYY-QX'表示Q
  const [panelDate, setPanelDate] = useState({
    months: [
      {
        year: new Date().getFullYear(),
        months: [] as CalendarMonth[],
        cssHeight: 0,
        scrollTop: 0,
        currYear: false,
      },
    ],
    quarters: [
      {
        year: new Date().getFullYear(),
        quarters: [] as CalendarQuarter[],
        cssHeight: 0,
        scrollTop: 0,
        currYear: false,
      },
    ],
  })

  const [scrollTop, setScrollTop] = useState(0)

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
          requestAniFrame(() => {
            // 初始化 日历位置
            if (monthsRef && monthsPanel && viewAreaRef) {
              viewHeight = getMonthsRef().clientHeight
              getMonthsPanel().style.height = `${containerHeight}px`
              const currTop = panelDate.months[currentIndex]?.scrollTop || 0
              getMonthsRef().scrollTop = currTop
              setScrollTop(currTop)
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
          requestAniFrame(() => {
            // 初始化 日历位置
            if (monthsRef && monthsPanel && viewAreaRef) {
              viewHeight = getMonthsRef().clientHeight
              getMonthsPanel().style.height = `${containerHeight}px`
              const currTop = panelDate.quarters[currentIndex]?.scrollTop || 0
              getMonthsRef().scrollTop = currTop
              setScrollTop(currTop)
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
    const panelData: CalendarMonthInfoOfPanel[] = []
    // 第某年的scrollTop：年面板高度 * （第某年数-1）
    const addPanelData = (
      year: number,
      months: CalendarMonth[],
      scrollTop: number
    ) => {
      panelData.push({
        year,
        months,
        scrollTop,
        cssHeight: YearMonthPanelHeight,
        currYear: isCurrYear(year),
      })
    }
    // 在同一年时
    if (startYear === endYear) {
      addPanelData(
        startYear,
        [
          ...getPreMonths('prev', startYear, startMonth),
          ...getMonths('curr', startYear, startMonth, endMonth),
          ...getMonths('next', endYear, endMonth + 1),
        ],
        0
      )
    } else {
      let scrollTop = panelData.length * YearMonthPanelHeight
      const startMonths = [
        ...getPreMonths('prev', startYear, startMonth),
        ...getMonths('curr', startYear, startMonth),
      ]
      addPanelData(startYear, startMonths, scrollTop)
      // 不同年份时，注意可能跨多个年
      for (let i = startYear + 1; i < endYear; i++) {
        scrollTop = panelData.length * YearMonthPanelHeight
        const midMonths = [...getMonths('curr', i, 1)]
        addPanelData(i, midMonths, scrollTop)
      }
      const lastMonths = [
        ...getPreMonths('curr', endYear, endMonth + 1),
        ...getMonths('next', endYear, endMonth + 1),
      ]
      scrollTop = panelData.length * YearMonthPanelHeight
      addPanelData(endYear, lastMonths, scrollTop)
    }
    return panelData
  }
  const getQuartersData = () => {
    // 获取区间范围内可用的季度数，包括边界值所在的季度数
    const startYear = Number(startDates[0])
    const startMonth = Number(startDates[1])
    const endYear = Number(endDates[0])
    const endMonth = Number(endDates[1])
    const panelData: CalendarQuarterInfoOfPanel[] = []
    // 第某年的scrollTop：年面板高度 * （第某年数-1）
    const addPanelData = (
      year: number,
      quarters: CalendarQuarter[],
      scrollTop: number
    ) => {
      panelData.push({
        year,
        quarters,
        scrollTop,
        cssHeight: YearQuarterPanelHeight,
        currYear: isCurrYear(year),
      })
    }
    // 在同一年时
    if (startYear === endYear) {
      const quarters = [
        ...getPreQuarters('prev', startYear, startMonth),
        ...getQuarters('curr', startYear, startMonth, endMonth),
        ...getNextQuarters('next', endYear, endMonth),
      ]
      addPanelData(startYear, quarters, 0)
    } else {
      let scrollTop = panelData.length * YearQuarterPanelHeight
      const startQuarters = [
        ...getPreQuarters('prev', startYear, startMonth),
        ...getQuarters('curr', startYear, startMonth),
      ]
      addPanelData(startYear, startQuarters, scrollTop)
      // 不同年份时，注意可能跨多个年
      for (let i = startYear + 1; i < endYear; i++) {
        scrollTop = panelData.length * YearQuarterPanelHeight
        const midQuarters = [...getQuarters('curr', i, 1)]
        addPanelData(i, midQuarters, scrollTop)
      }
      const lastQuarters = [
        ...getQuarters('curr', endYear, 1, endMonth),
        ...getNextQuarters('next', endYear, endMonth),
      ]
      scrollTop = panelData.length * YearQuarterPanelHeight
      addPanelData(endYear, lastQuarters, scrollTop)
    }
    return panelData
  }
  /*
   * 初始化面板数据
   * 获取总数据panelDate
   * 根据当前默认值跳转到指定位置
   */
  const initData = () => {
    // 获取起止时间内的所有的月、季
    const data =
      // eslint-disable-next-line no-nested-ternary
      viewMode === 'month'
        ? getMonthsData()
        : viewMode === 'quarter'
          ? getQuartersData()
          : null
    setPanelDate({ ...panelDate, [`${viewMode}s`]: data })
  }

  useEffect(() => {
    requestAniFrameFunc(viewMode)
  }, [panelDate])

  useEffect(() => {
    initData()
  }, [])

  const monthsViewScroll = (e: any) => {
    const scrollTop = (e.target as HTMLElement).scrollTop
    Taro.getEnv() === 'WEB' && setScrollTop(scrollTop)
  }

  const handleItemClick = (viewMode: string, item: any) => {
    // 点击事件，可以返回所点击元素的数据
    // 如果非可点击，则直接返回，不做处理
    if (item.type !== 'curr') return
    // 可点击时，需要关注当前元素是否已被选中，选中，取消选中，拿到数据
    const val = viewMode === 'month' ? item.yearAndMonth : item.yearAndQuarter
    setInnerValue(val)
    onItemClick?.(val)
  }

  const isDisable = (item: any) => {
    return item.type === 'prev' || item.type === 'next'
  }

  const isActive = (item: any) => {
    const val = viewMode === 'month' ? item.yearAndMonth : item.yearAndQuarter
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
      showTitle && (
        <View
          className={classNames({
            [`${classPrefix}-header`]: true,
          })}
        >
          <View className={`${classPrefix}-title`}>{title}</View>
        </View>
      )
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
    return (
      <>
        {panelDate[`${viewMode}s`].map((item: any, key: number) => (
          <div className={`${classPrefix}-panel`} key={key}>
            <div className={`${classPrefix}-panel-title`}>{item.year}</div>
            <div className={`${classPrefix}-content`}>
              {item[`${viewMode}s`].map((item: any, i: number) =>
                renderItem(item, i)
              )}
            </div>
          </div>
        ))}
      </>
    )
  }

  const renderContent = () => {
    return (
      <ScrollView
        scrollTop={scrollTop}
        scrollY
        className={`${classPrefix}-content`}
        onScroll={monthsViewScroll}
        ref={monthsRef}
      >
        <div className={`${classPrefix}-pannel`} ref={monthsPanel}>
          <div ref={viewAreaRef}>{renderPanel()}</div>
        </div>
      </ScrollView>
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
