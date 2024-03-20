import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show4, setShow4] = useState(false)
  const [desc4, setDesc4] = useState('10:10:00')
  const confirm4 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc4(options.map((option) => option.text).join(':'))
  }

  return (
    <>
      <Cell
        title="时间选择"
        description={desc4}
        onClick={() => setShow4(true)}
      />
      <DatePicker
        title="时间选择"
        type="time"
        startDate={startDate}
        endDate={endDate}
        visible={show4}
        onClose={() => setShow4(false)}
        onConfirm={(options, values) => confirm4(values, options)}
      />
    </>
  )
}
export default Demo4
