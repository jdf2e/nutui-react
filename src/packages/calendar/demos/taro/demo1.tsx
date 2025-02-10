import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

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

  const setChooseValue = (param: string) => {
    setDate(param[3])
    setDateWeek(param[4])
  }

  const select = (param: string) => {
    console.log(param)
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
        defaultValue={date}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo1
