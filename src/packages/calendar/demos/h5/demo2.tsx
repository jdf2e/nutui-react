import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

export type CalendarParam = string[] | string[][]
const Demo2 = () => {
  const [date, setDate] = useState(['2023-01-23', '2023-11-26'])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }
  const onConfirm = (param: CalendarParam) => {
    console.log('onConfirm', param)
    setDate([...[param[0][3], param[1][3]]])
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }

  return (
    <>
      <Cell
        title="选择日期区间"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />

      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2022-12-22"
        endDate="2024-01-08"
        onClose={closeSwitch}
        onConfirm={onConfirm}
        onDayClick={onDayClick}
      />
    </>
  )
}
export default Demo2
