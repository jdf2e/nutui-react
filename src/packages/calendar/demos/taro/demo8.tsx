import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [date5, setDate5] = useState<string[]>(['2023-03-23', '2023-11-26'])
  const [isVisible5, setIsVisible5] = useState(false)

  const openSwitch5 = () => {
    setIsVisible5(true)
  }

  const closeSwitch5 = () => {
    setIsVisible5(false)
  }

  const setChooseValue5 = (param: string) => {
    setDate5([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <Cell
        title="选择日期区间"
        description={date5 ? `${date5[0]}至${date5[1]}` : '请选择'}
        onClick={openSwitch5}
      />
      <Calendar
        visible={isVisible5}
        defaultValue={date5}
        type="range"
        autoBackfill
        startDate="2022-12-22"
        endDate="2024-01-08"
        onClose={closeSwitch5}
        onConfirm={setChooseValue5}
        onDayClick={select}
      />
    </>
  )
}
export default Demo8
