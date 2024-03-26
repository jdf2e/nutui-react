import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`

  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 11:08`)
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    const date = values.slice(0, 3).join('-')
    const time = values.slice(3).join(':')
    setDesc(`${date} ${time}`)
  }
  return (
    <>
      <Cell
        title="日期时间选择"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="日期时间选择"
        startDate={startDate}
        endDate={endDate}
        defaultValue={new Date(desc)}
        visible={show}
        type="datetime"
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo3
