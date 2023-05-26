import React, { useRef } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import Utils from '@/utils/date'
import { useConfig } from '@/packages/configprovider'

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
  startText?: string
  endText?: string
  confirmText?: string
  showTitle?: boolean
  showSubTitle?: boolean
  scrollAnimation?: boolean
  onBtn?: (() => string | JSX.Element) | undefined
  onDay?: ((date: Day) => string | JSX.Element) | undefined
  onTopInfo?: ((date: Day) => string | JSX.Element) | undefined
  onBottomInfo?: ((date: Day) => string | JSX.Element) | undefined
  onClose?: () => void
  onChoose?: (param: string) => void
  onSelected?: (data: string) => void
  onYearMonthChange?: (param: string) => void
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
  onBtn: undefined,
  onDay: undefined,
  onTopInfo: undefined,
  onBottomInfo: undefined,
  onClose: () => {},
  onChoose: (param: string) => {},
  onSelected: (data: string) => {},
  onYearMonthChange: (param: string) => {},
} as CalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
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
    onBtn,
    onDay,
    onTopInfo,
    onBottomInfo,
    onClose,
    onChoose,
    onSelected,
    onYearMonthChange,
  } = { ...defaultProps, ...props }

  const calendarRef = useRef<any>(null)

  const close = () => {
    onClose && onClose()
  }

  const choose = (param: string) => {
    close()
    onChoose && onChoose(param)
  }
  const closePopup = () => {
    close()
  }

  const select = (param: string) => {
    onSelected && onSelected(param)
  }

  const scrollToDate = (date: string) => {
    calendarRef.current?.scrollToDate(date)
  }

  const yearMonthChange = (param: string) => {
    onYearMonthChange && onYearMonthChange(param)
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
        onBtn={onBtn}
        onDay={onDay}
        onTopInfo={onTopInfo}
        onBottomInfo={onBottomInfo}
        onChoose={choose}
        onSelected={select}
        onYearMonthChange={yearMonthChange}
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
