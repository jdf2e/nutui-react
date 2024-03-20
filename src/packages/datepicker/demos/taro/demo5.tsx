import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show8, setShow8] = useState(false)
  const [desc8, setDesc8] = useState('10:10')
  const confirm4 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc4(options.map((option) => option.text).join(':'))
  }

  return (
    <>
      <Cell
        title="时间选择"
        description={desc8}
        onClick={() => setShow8(true)}
      />
      <DatePicker
        title="时间选择"
        type="hour-minutes"
        startDate={startDate}
        endDate={endDate}
        visible={show8}
        onClose={() => setShow8(false)}
        onConfirm={(options, values) => confirm8(values, options)}
      />
    </>
  )
}
export default Demo5
