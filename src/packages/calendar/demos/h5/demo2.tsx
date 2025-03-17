import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo = () => {
  const d = new Date().getFullYear()
  const [date, setDate] = useState([`${d}-01-23`, `${d}-11-26`])
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

  const select = (param: string) => {
    console.log(param)
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
        startDate={`${d - 1}-12-22`}
        endDate={`${d + 1}-01-22`}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo
