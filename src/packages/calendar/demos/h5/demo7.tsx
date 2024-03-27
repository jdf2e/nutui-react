import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'

const Demo7 = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
  }

  return (
    <>
      <Cell
        title="选择日期"
        description={date3 ? `${date3}` : '请选择'}
        onClick={openSwitch3}
      />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        startDate=""
        endDate=""
        autoBackfill
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  )
}
export default Demo7
