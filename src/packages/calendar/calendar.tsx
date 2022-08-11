import React, { FunctionComponent } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import Utils from '@/utils/date'
import { useConfig } from '@/packages/configprovider'

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
  onClose: () => {},
  onChoose: (param: string) => {},
  onSelected: (data: string) => {}
} as CalendarProps

export const Calendar: FunctionComponent<
  Partial<CalendarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
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
    onClose,
    onChoose,
    onSelected
  } = { ...defaultProps, ...props }

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]

  const slot = children.reduce((slot: any, item: React.ReactElement) => {
    const data = slot
    if (item && item.props) {
      data[item.props.slot] = item
    }
    return data
  }, {});

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
    onSelected && onSelected(param);
  }

  const renderItem = () => {
    return <CalendarItem
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
            onClose={close}
            onChoose={choose}
            onSelected={select}
          >
            { slot.btn }
            { slot.day }
            { slot.topInfo }
            { slot.bottomInfo }
          </CalendarItem>
  }

  return (
    <>
      {poppable ? (
        <Popup
          visible={visible}
          position="bottom"
          round
          closeable
          destroyOnClose
          onClickOverlay={closePopup}
          onClickCloseIcon={closePopup}
          style={{ height: '85vh' }}
        >
          { renderItem() }
        </Popup>
      ) : renderItem() }
    </>
  )
}

Calendar.defaultProps = defaultProps
Calendar.displayName = 'NutCalendar'
