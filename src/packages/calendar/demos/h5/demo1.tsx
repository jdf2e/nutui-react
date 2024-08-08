import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

export type CalendarParam = string[] | string[][]
const Demo1 = () => {
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)
  const [isVisible, setIsVisible] = useState(false)
  const [dateWeek, setDateWeek] = useState('')

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const onConfirm = (param: CalendarParam) => {
    console.log('onConfirm', param)
    setDate(param[3] as string)
    setDateWeek(param[4] as string)
  }

  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }

  return (
    <>
      <Cell
        title="选择单个日期"
        description={date ? `${date} ${dateWeek}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        showTitle={false}
        defaultValue={date}
        onClose={closeSwitch}
        onConfirm={onConfirm}
        onDayClick={onDayClick}
      />
    </>
  )
}
export default Demo1
