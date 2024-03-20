import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState('')
  const confirm2 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc2(options.map((option) => option.text).join('-'))
  }
  return (
    <>
      <Cell
        title="日期选择"
        description={desc2}
        onClick={() => setShow2(true)}
      />
      <DatePicker
        title="日期选择"
        startDate={new Date(2023, 6, 4)}
        endDate={new Date(2025, 7, 1)}
        type="month-day"
        visible={show2}
        onClose={() => setShow2(false)}
        onConfirm={(options, values) => confirm2(values, options)}
      />
    </>
  )
}
export default Demo2
