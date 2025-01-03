import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    setDate([...dateArr])
  }

  return (
    <>
      <Cell
        title="选择多个日期"
        description={date && date.length ? `已选择${date.length}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="multiple"
        startDate="2025-01-01"
        endDate="2026-09-10"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo3
