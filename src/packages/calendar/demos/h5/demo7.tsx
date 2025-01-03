import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo7 = () => {
  const [date, setDate] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
  }

  return (
    <>
      <Cell
        title="选择日期"
        description={date ? `${date}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        autoBackfill
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo7
