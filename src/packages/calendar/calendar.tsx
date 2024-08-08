import React, { useRef, ReactNode } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import { Utils } from '@/utils/date'
import { useConfig } from '@/packages/configprovider'
import type {
  CalendarDay,
  CalendarType,
  CalendarRef,
  CalendarParam,
} from './types'
import { ComponentDefaults } from '@/utils/typings'

export interface CalendarProps {
  type?: CalendarType
  autoBackfill?: boolean
  popup?: boolean
  visible?: boolean
  title?: string
  defaultValue?: string | string[]
  startDate?: string
  endDate?: string
  showToday?: boolean
  startText?: ReactNode
  endText?: ReactNode
  confirmText?: ReactNode
  showTitle?: boolean
  showSubTitle?: boolean
  scrollAnimation?: boolean
  firstDayOfWeek: number
  disableDate: (date: CalendarDay) => boolean
  renderHeaderButtons?: () => string | JSX.Element
  renderDay?: (date: CalendarDay) => string | JSX.Element
  renderDayTop?: (date: CalendarDay) => string | JSX.Element
  renderDayBottom?: (date: CalendarDay) => string | JSX.Element
  onClose?: () => void
  onConfirm?: (data: CalendarParam) => void
  onDayClick?: (data: CalendarParam) => void
  onPageChange?: (data: CalendarParam) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  autoBackfill: false,
  popup: true,
  visible: false,
  title: '',
  defaultValue: '',
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
  disableDate: (date: CalendarDay) => false,
  onClose: () => {},
  onConfirm: (param: CalendarParam) => {},
  onDayClick: (data: CalendarParam) => {},
  onPageChange: (param: CalendarParam) => {},
} as CalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    children,
    popup,
    visible,
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
    onClose,
    onConfirm,
    onDayClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const calendarRef = useRef<any>(null)

  const choose = (param: CalendarParam) => {
    onClose?.()
    onConfirm && onConfirm(param)
  }
  const closePopup = () => {
    onClose?.()
  }

  const select = (param: CalendarParam) => {
    onDayClick && onDayClick(param)
  }

  const scrollToDate = (date: string) => {
    calendarRef.current?.scrollToDate(date)
  }

  const yearMonthChange = (param: CalendarParam) => {
    onPageChange && onPageChange(param)
  }

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const renderItem = () => {
    return (
      <CalendarItem
        ref={calendarRef}
        style={style}
        className={className}
        children={children}
        type={type}
        autoBackfill={autoBackfill}
        popup={popup}
        title={title || locale.calendaritem.title}
        defaultValue={defaultValue}
        startDate={startDate}
        endDate={endDate}
        showToday={showToday}
        startText={startText || locale.calendaritem.start}
        endText={endText || locale.calendaritem.end}
        confirmText={confirmText || locale.calendaritem.confirm}
        showTitle={showTitle}
        showSubTitle={showSubTitle}
        scrollAnimation={scrollAnimation}
        firstDayOfWeek={firstDayOfWeek}
        disableDate={disableDate}
        renderHeaderButtons={renderHeaderButtons}
        renderDay={renderDay}
        renderDayTop={renderDayTop}
        renderDayBottom={renderDayBottom}
        onConfirm={choose}
        onDayClick={select}
        onPageChange={yearMonthChange}
      />
    )
  }

  return (
    <>
      {popup ? (
        <Popup
          className="nut-calendar-popup"
          visible={visible}
          position="bottom"
          round
          closeable
          destroyOnClose
          onOverlayClick={closePopup}
          onCloseIconClick={closePopup}
          style={{ height: '83%' }}
        >
          {renderItem()}
        </Popup>
      ) : (
        renderItem()
      )}
    </>
  )
})

Calendar.displayName = 'NutCalendar'
