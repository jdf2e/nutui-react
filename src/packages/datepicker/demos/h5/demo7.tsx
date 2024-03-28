import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react'

const Demo7 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState('10:10:00')

  const confirm6 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc(options.map((option) => option.text).join(':'))
  }
  return (
    <>
      <Cell title="时间选择" description={desc} onClick={() => setShow(true)} />
      <DatePicker
        title="时间选择"
        type="time"
        startDate={startDate}
        endDate={endDate}
        visible={show}
        defaultValue={new Date(`${defaultDescription} ${desc}`)}
        minuteStep={5}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm6(values, options)}
      />
    </>
  )
}
export default Demo7
