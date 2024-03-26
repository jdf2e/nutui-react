import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show8, setShow8] = useState(false)
  const [desc8, setDesc8] = useState('10:10')
  const confirm8 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc8(options.map((option) => option.text).join(':'))
  }

  return (
    <>
      <Cell
        title="选择时分"
        description={desc8}
        onClick={() => setShow8(true)}
      />
      <DatePicker
        title="时间选择"
        type="hour-minutes"
        defaultValue={new Date(`${defaultDescription} ${desc8}`)}
        startDate={startDate}
        endDate={endDate}
        visible={show8}
        onClose={() => setShow8(false)}
        onConfirm={(options, values) => confirm8(options, values)}
      />
    </>
  )
}
export default Demo5
