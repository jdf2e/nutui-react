import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo4 = () => {
  const [date40, setDate40] = useState<string[]>([])
  const [isVisible40, setIsVisible40] = useState(false)

  const openSwitch40 = () => {
    setIsVisible40(true)
  }

  const closeSwitch40 = () => {
    setIsVisible40(false)
  }

  const setChooseValue40 = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate40([...dateArr])
  }
  return (
    <>
      <Cell
        title="选择周"
        description={
          date40 && date40.length ? `${date40[0]}-${date40[1]}` : '请选择'
        }
        onClick={openSwitch40}
      />
      <Calendar
        visible={isVisible40}
        defaultValue={date40}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        firstDayOfWeek={1}
        onClose={closeSwitch40}
        onConfirm={setChooseValue40}
      />
    </>
  )
}
export default Demo4
