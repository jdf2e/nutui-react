import React, { useState } from 'react'
import { Cell, Calendar, CalendarDay } from '@nutui/nutui-react'

const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}

const Demo9 = () => {
  const [date, setDate] = useState<string[]>(['2024-06-12', '2024-06-16'])

  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const renderDay = (date: CalendarDay) => {
    return <>{padZero(date.day)}</>
  }

  const renderDayTop = (date: CalendarDay) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '☺'
    }
    return <span className="info">{currDate}</span>
  }

  const renderDayBottom = (date: CalendarDay) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '纪念日'
    }
    return <span className="info">{currDate}</span>
  }

  return (
    <>
      <Cell
        title="自定义时间文案"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2024-2-22"
        endDate="2025-01-08"
        confirmText="submit"
        startText="enter"
        endText="leave"
        renderDay={renderDay}
        renderDayTop={renderDayTop}
        renderDayBottom={renderDayBottom}
        showToday
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo9
