import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

export type CalendarParam = string[] | string[][]
const Demo4 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const onConfirm = (data: CalendarParam) => {
    console.log('onConfirm', data)
    const dateArr = [...[data[0][3], data[1][3]]]
    setDate([...dateArr])
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }
  return (
    <>
      <Cell
        title="选择周"
        description={date && date.length ? `${date[0]}-${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        onDayClick={onDayClick}
        visible={isVisible}
        defaultValue={date}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onConfirm={onConfirm}
      />
    </>
  )
}
export default Demo4
