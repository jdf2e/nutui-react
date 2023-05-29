import React, { ReactNode, useRef } from 'react'
import Popup from '@/packages/popup/index.taro'
import CalendarItem from '@/packages/calendaritem/index.taro'
import Utils from '@/utils/date'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

interface Day {
  day: string | number
  type: string
}
export interface CalendarProps {
  type?: string
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
  renderHeaderButtons?: () => string | JSX.Element
  renderDay?: (date: Day) => string | JSX.Element
  renderDayTop?: (date: Day) => string | JSX.Element
  renderDayBottom?: (date: Day) => string | JSX.Element
  onClose?: () => void
  onConfirm?: (param: string) => void
  onClickDay?: (data: string) => void
  onPageChange?: (param: string) => void
}

const defaultProps = {
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
  renderHeaderButtons: undefined,
  renderDay: undefined,
  renderDayTop: undefined,
  renderDayBottom: undefined,
  onClose: () => {},
  onConfirm: (param: string) => {},
  onClickDay: (data: string) => {},
  onPageChange: (param: string) => {},
} as CalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
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
    renderHeaderButtons,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onClose,
    onConfirm,
    onClickDay,
    onPageChange,
  } = { ...defaultProps, ...props }

  const calendarRef = useRef<any>(null)

  const close = () => {
    onClose && onClose()
  }

  const update = () => {}
  const choose = (param: string) => {
    close()
    onConfirm && onConfirm(param)
  }
  const closePopup = () => {
    close()
  }

  const select = (param: string) => {
    onClickDay && onClickDay(param)
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
        renderHeaderButtons={renderHeaderButtons}
        renderDay={renderDay}
        renderDayTop={renderDayTop}
        renderDayBottom={renderDayBottom}
        onConfirm={choose}
        onClickDay={select}
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
          duration={0.5}
          closeable
          destroyOnClose
          onClickOverlay={closePopup}
          onClickCloseIcon={closePopup}
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
