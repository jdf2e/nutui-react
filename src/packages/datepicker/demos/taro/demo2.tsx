import React, { useState } from 'react'
import {
  DatePicker,
  Cell,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const defaultValue = new Date()
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )
  const confirm = (values: PickerValue[], options: PickerOptions) => {
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
        startDate={new Date()}
        endDate={new Date(`${defaultValue.getFullYear()}-07-01`)}
        defaultValue={defaultValue}
        type="month-day"
        visible={show}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo2
