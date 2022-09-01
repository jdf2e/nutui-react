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
  isAutoBackFill?: boolean
  poppable?: boolean
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
  toDateAnimation?: boolean
  onBtn?: (() => string | JSX.Element) | undefined
  onDay?: ((date: Day) => string | JSX.Element) | undefined
  onTopInfo?: ((date: Day) => string | JSX.Element) | undefined
  onBottomInfo?: ((date: Day) => string | JSX.Element) | undefined
  onClose?: () => void
  onChoose?: (param: string) => void
  onSelected?: (data: string) => void
}

const defaultProps = {
  type: 'one',
  isAutoBackFill: false,
  poppable: true,
  visible: false,
  title: '日历选择',
  defaultValue: '',
  startDate: Utils.getDay(0),
  endDate: Utils.getDay(365),
  showToday: true,
  startText: '开始',
  endText: '结束',
  confirmText: '确认',
  showTitle: true,
  showSubTitle: true,
  toDateAnimation: true,
  onBtn: undefined,
  onDay: undefined,
  onTopInfo: undefined,
  onBottomInfo: undefined,
  onClose: () => {},
  onChoose: (param: string) => {},
  onSelected: (data: string) => {},
} as CalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    poppable,
    visible,
    type,
    isAutoBackFill,
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
    toDateAnimation,
    onBtn,
    onDay,
    onTopInfo,
    onBottomInfo,
    onClose,
    onChoose,
    onSelected,
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

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const renderItem = () => {
    return (
      <CalendarItem
        ref={calendarRef}
        type={type}
        isAutoBackFill={isAutoBackFill}
        poppable={poppable}
        title={locale.calendaritem.title || title}
        defaultValue={defaultValue}
        startDate={startDate}
        endDate={endDate}
        showToday={showToday}
        startText={startText}
        endText={endText}
        confirmText={confirmText}
        showTitle={showTitle}
        showSubTitle={showSubTitle}
        toDateAnimation={toDateAnimation}
        onBtn={onBtn}
        onDay={onDay}
        onTopInfo={onTopInfo}
        onBottomInfo={onBottomInfo}
        onChoose={choose}
        onSelected={select}
      />
    )
  }

  return (
    <>
      {poppable ? (
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
