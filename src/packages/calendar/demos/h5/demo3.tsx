import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo3 = () => {
  const [date4, setDate4] = useState<string[]>([])
  const [isVisible4, setIsVisible4] = useState(false)

  const openSwitch4 = () => {
    setIsVisible4(true)
  }

  const closeSwitch4 = () => {
    setIsVisible4(false)
  }

  const setChooseValue4 = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    setDate4([...dateArr])
  }

  return (
    <>
      <Cell
        title="选择多个日期"
        description={date4 && date4.length ? `已选择${date4.length}` : '请选择'}
        onClick={openSwitch4}
      />
      <Calendar
        visible={isVisible4}
        defaultValue={date4}
        type="multiple"
        startDate="2023-01-01"
        endDate="2024-09-10"
        onClose={closeSwitch4}
        onConfirm={setChooseValue4}
      />
    </>
  )
}
export default Demo3
