import React, { useRef, ReactNode } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import CalendarViewModeItem from './calendarviewmodeitem'
import { getDateString } from '@/utils/date'
import { useConfig } from '@/packages/configprovider'
import type { CalendarDay, CalendarType, CalendarRef } from './types'
import { ComponentDefaults } from '@/utils/typings'

export interface CalendarProps {
  type?: CalendarType
  viewMode: 'day' | 'month' | 'quarter'
  autoBackfill?: boolean
  popup?: boolean
  visible?: boolean
  title?: string
  value?: string
  defaultValue?: string | string[]
  startDate?: string
  endDate?: string
  showToday?: boolean
  startText?: ReactNode
  endText?: ReactNode
  confirmText?: ReactNode
  showTitle?: boolean
  showSubTitle?: boolean
  showMonthNumber?: boolean
  scrollAnimation?: boolean
  firstDayOfWeek: number
  closeIcon?: ReactNode
  disableDate: (date: CalendarDay) => boolean
  renderHeaderButtons?: () => string | JSX.Element
  renderBottomButton?: () => string | JSX.Element
  renderDay?: (date: CalendarDay) => string | JSX.Element
  renderDayTop?: (date: CalendarDay) => string | JSX.Element
  renderDayBottom?: (date: CalendarDay) => string | JSX.Element
  onClose?: () => void
  onConfirm?: (param: string) => void
  onDayClick?: (data: string) => void
  onItemClick?: (param: string) => void
  onPageChange?: (param: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  viewMode: 'day',
  autoBackfill: false,
  popup: true,
  visible: false,
  title: '',
  value: '',
  defaultValue: '',
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
  onClose: () => {},
  onConfirm: (param: string) => {},
  onDayClick: (data: string) => {},
  onItemClick: () => {},
  onPageChange: (param: string) => {},
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
    viewMode,
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
    closeIcon,
    disableDate,
    renderHeaderButtons,
    renderBottomButton,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onClose,
    onConfirm,
    onDayClick,
    onItemClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const calendarRef = useRef<any>(null)

  const close = () => {
    onClose && onClose()
  }

  const choose = (param: string) => {
    close()
    onConfirm && onConfirm(param)
  }
  const closePopup = () => {
    close()
  }

  const scrollToDate = (date: string) => {
    calendarRef.current?.scrollToDate(date)
  }

  const yearMonthChange = (param: string) => {
    onPageChange && onPageChange(param)
  }

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const renderItem = () => {
    return (
      <>
        {viewMode !== 'day' ? (
          <CalendarViewModeItem
            ref={calendarRef}
            style={style}
            className={className}
            type={type}
            viewMode={viewMode}
            title={title || locale.calendaritem.title}
            value={value}
            defaultValue={defaultValue}
            startDate={startDate}
            endDate={endDate}
            showTitle={showTitle}
            scrollAnimation={scrollAnimation}
            renderDay={renderDay}
            onItemClick={onItemClick}
          />
        ) : (
          <CalendarItem
            ref={calendarRef}
            style={style}
            className={className}
            children={children}
            type={type}
            autoBackfill={autoBackfill}
            renderBottomButton={renderBottomButton}
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
            showMonthNumber={showMonthNumber}
            scrollAnimation={scrollAnimation}
            firstDayOfWeek={firstDayOfWeek}
            disableDate={disableDate}
            renderHeaderButtons={renderHeaderButtons}
            renderDay={renderDay}
            renderDayTop={renderDayTop}
            renderDayBottom={renderDayBottom}
            onConfirm={choose}
            onDayClick={(param) => onDayClick && onDayClick(param)}
            onPageChange={yearMonthChange}
          />
        )}
      </>
    )
  }

  return (
    <>
      {popup && viewMode === 'day' ? (
        <Popup
          className="nut-calendar-popup"
          visible={visible}
          position="bottom"
          round
          closeable
          closeIcon={closeIcon}
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
