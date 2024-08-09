import React, { useState } from 'react'
import { Cell, Calendar, CalendarDay } from '@nutui/nutui-react-taro'

export type CalendarParam = string[] | string[][]
const Demo5 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const onConfirm = (chooseData: CalendarParam) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate([...dateArr])
  }
  const onDayClick = (param: CalendarParam) => {
    console.log('onDayClick', param)
  }
  const disableDate = (date: CalendarDay) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }

  return (
    <>
      <Cell
        title="日期不可选"
        description={date && date.length ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />

      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onDayClick={onDayClick}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default Demo5
