import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo2 = () => {
  const defaultValue = new Date()
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )

  const confirm2 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc2(options.map((option) => option.text).join('-'))
  }
  return (
    <>
      <Cell
        title="限制开始结束时间"
        description={desc2}
        onClick={() => setShow2(true)}
      />
      <DatePicker
        title="选择日期"
        startDate={new Date(2023, 6, 4)}
        endDate={new Date(2025, 7, 1)}
        defaultValue={new Date()}
        type="month-day"
        visible={show2}
        onClose={() => setShow2(false)}
        onConfirm={(options, values) => confirm2(values, options)}
      />
    </>
  )
}
export default Demo2
