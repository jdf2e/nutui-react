import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

export type CalendarParam = string[] | string[][]
const Demo7 = () => {
  const [date, setDate] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const onConfirm = (param: CalendarParam) => {
    console.log('onConfirm', param)
    setDate(param[3] as string)
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }
  return (
    <>
      <Cell
        title="选择日期"
        description={date ? `${date}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        startDate=""
        endDate=""
        autoBackfill
        onClose={closeSwitch}
        onDayClick={onDayClick}
        onConfirm={onConfirm}
      />
    </>
  )
}
export default Demo7
