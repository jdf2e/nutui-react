import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo8 = () => {
  const [date, setDate] = useState<string[]>(['2025-03-23', '2025-05-26'])
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
        autoBackfill
        startDate="2024-12-22"
        endDate="2026-01-08"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo8
