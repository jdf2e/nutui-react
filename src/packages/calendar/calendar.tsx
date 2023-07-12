import React, { useRef, ReactNode } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import { Utils } from '@/utils/date'
import { useConfig } from '@/packages/configprovider'
import { Day, SelectedType } from './type'
import { ComponentDefaults } from '@/utils/typings'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

export interface CalendarProps {
  type?: SelectedType
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
  disableDate: (date: Day) => boolean
  renderHeaderButtons?: () => string | JSX.Element
  renderDay?: (date: Day) => string | JSX.Element
  renderDayTop?: (date: Day) => string | JSX.Element
  renderDayBottom?: (date: Day) => string | JSX.Element
  onClose?: () => void
  onConfirm?: (param: string) => void
  onDayClick?: (data: string) => void
  onPageChange?: (param: string) => void
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
  disableDate: (date: Day) => false,
  renderHeaderButtons: undefined,
  renderDay: undefined,
  renderDayTop: undefined,
  renderDayBottom: undefined,
  onClose: () => {},
  onConfirm: (param: string) => {},
  onDayClick: (data: string) => {},
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

  const select = (param: string) => {
    onDayClick && onDayClick(param)
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
      <CalendarItem
        ref={calendarRef}
        style={style}
        className={className}
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
          visible={visible}
          position="bottom"
          round
          closeable
          destroyOnClose
          onOverlayClick={closePopup}
          onCloseIconClick={closePopup}
          style={{ height: '85vh' }}
        >
          {renderItem()}
        </Popup>
      ) : (
        renderItem()
      )}
    </>
  )
})

Calendar.defaultProps = defaultProps
Calendar.displayName = 'NutCalendar'
