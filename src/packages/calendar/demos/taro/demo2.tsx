import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [date1, setDate1] = useState(['2023-01-23', '2023-11-26'])
  const [isVisible1, setIsVisible1] = useState(false)

  const openSwitch1 = () => {
    setIsVisible1(true)
  }

  const closeSwitch1 = () => {
    setIsVisible1(false)
  }

  const setChooseValue1 = (param: string) => {
    setDate1([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <Cell
        title="选择日期区间"
        description={date1 ? `${date1[0]}至${date1[1]}` : '请选择'}
        onClick={openSwitch1}
      />

      <Calendar
        visible={isVisible1}
        defaultValue={date1}
        type="range"
        startDate="2022-12-22"
        endDate="2024-01-08"
        onClose={closeSwitch1}
        onConfirm={setChooseValue1}
        onDayClick={select}
      />
    </>
  )
}
export default Demo2
