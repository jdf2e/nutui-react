import React, { useState } from 'react'
import {
  DatePicker,
  Cell,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react'

const Demo2 = () => {
  const defaultValue = new Date()
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )

  const confirm = (values: PickerValue[], options: PickerOptions) => {
    console.log('values', values, options)
    setDesc(options.map((option) => option.label).join('-'))
  }
  return (
    <>
      <Cell
        title="限制开始结束时间"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="选择日期"
        startDate={new Date(2023, 6, 4)}
        endDate={new Date(2025, 7, 1)}
        defaultValue={new Date()}
        type="month-day"
        visible={show}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo2
