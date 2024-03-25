import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo3 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`

  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show3, setShow3] = useState(false)
  const [desc3, setDesc3] = useState(`${defaultDescription} 11:08`)
  const confirm3 = (values: (string | number)[], options: PickerOption[]) => {
    const date = values.slice(0, 3).join('-')
    const time = values.slice(3).join(':')
    setDesc3(`${date} ${time}`)
  }
  return (
    <>
      <Cell
        title="日期时间选择"
        description={desc3}
        onClick={() => setShow3(true)}
      />
      <DatePicker
        title="日期时间选择"
        startDate={startDate}
        endDate={endDate}
        defaultValue={new Date(desc3)}
        visible={show3}
        type="datetime"
        onClose={() => setShow3(false)}
        onConfirm={(options, values) => confirm3(values, options)}
      />
    </>
  )
}
export default Demo3
