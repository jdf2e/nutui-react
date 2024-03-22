import React from 'react'
import { CalendarCard, type CalendarCardDay } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const renderDayTop = (day: CalendarCardDay) => {
    return day.date === 8 ? '☺' : ''
  }
  const renderDay = (day: CalendarCardDay) => {
    return day.date <= 9 ? `0${day.date}` : day.date
  }
  const renderDayBottom = (day: CalendarCardDay) => {
    return day.date === 8 ? '节日' : ''
  }
  return (
    <CalendarCard
      renderDayTop={renderDayTop}
      renderDay={renderDay}
      renderDayBottom={renderDayBottom}
    />
  )
}
export default Demo6
