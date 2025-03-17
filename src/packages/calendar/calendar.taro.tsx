import React, { useRef } from 'react'
import Popup from '@/packages/popup/index.taro'
import CalendarItem from '@/packages/calendaritem/index.taro'
import CalendarViewModeItem from './calendarviewmodeitem.taro'
import { getDateString } from '@/utils/date'
import { useConfig } from '@/packages/configprovider/index.taro'
import type { CalendarDay, CalendarRef, TaroCalendarProps } from '@/types'
import { ComponentDefaults } from '@/utils/typings'

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
} as TaroCalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<TaroCalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
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
            renderBottomButton={renderBottomButton}
            renderDay={renderDay}
            renderDayTop={renderDayTop}
            renderDayBottom={renderDayBottom}
            onConfirm={choose}
            onDayClick={onDayClick}
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
