import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo = () => {
  const d = new Date().getFullYear()
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
  return (
    <>
      <Cell
        title="选择周"
        description={date && date.length ? `${date[0]}-${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="week"
        startDate={`${d - 1}-11-21`}
        endDate={`${d + 1}-09-10`}
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo
