import React, { useState } from 'react'
import { Cell, Calendar, CalendarDay } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate([...dateArr])
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
        startDate="2025-01-01"
        endDate="2026-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo5
