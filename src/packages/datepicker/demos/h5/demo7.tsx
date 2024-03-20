import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo7 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show6, setShow6] = useState(false)
  const [desc6, setDesc6] = useState('10:10:00')

  const confirm6 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc6(options.map((option) => option.text).join(':'))
  }
  return (
    <>
      <Cell
        title="时间选择"
        description={desc6}
        onClick={() => setShow6(true)}
      />
      <DatePicker
        title="时间选择"
        type="time"
        startDate={startDate}
        endDate={endDate}
        visible={show6}
        minuteStep={5}
        onClose={() => setShow6(false)}
        onConfirm={(options, values) => confirm6(values, options)}
      />
    </>
  )
}
export default Demo7
