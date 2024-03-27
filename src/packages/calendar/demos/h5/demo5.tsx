import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

interface Day {
  day: string | number
  type: string
}

const Demo5 = () => {
  const [date41, setDate41] = useState<string[]>([])
  const [isVisible41, setIsVisible41] = useState(false)

  const openSwitch41 = () => {
    setIsVisible41(true)
  }

  const closeSwitch41 = () => {
    setIsVisible41(false)
  }

  const setChooseValue41 = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate41([...dateArr])
  }

  const disableDate = (date: Day) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }

  return (
    <>
      <Cell
        title="日期不可选"
        description={
          date41 && date41.length ? `${date41[0]}至${date41[1]}` : '请选择'
        }
        onClick={openSwitch41}
      />

      <Calendar
        visible={isVisible41}
        defaultValue={date41}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onClose={closeSwitch41}
        onConfirm={setChooseValue41}
      />
    </>
  )
}
export default Demo5
