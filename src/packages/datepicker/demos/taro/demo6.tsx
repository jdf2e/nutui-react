import React, { useState } from 'react'
import {
  DatePicker,
  Cell,
  PickerValue,
  PickerOption,
  PickerOptions,
} from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 10:10`)

  const confirm = (values: PickerValue[], options: PickerOptions) => {
    const date = options
      .slice(1, 3)
      .map((op) => op.label)
      .join('')
    const time = options
      .slice(3)
      .map((op) => op.value)
      .join(':')
    setDesc(`${options[0].label}年${date} ${time}`)
  }
  const formatter = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.label += ''
        break
      case 'month':
        option.label += '月'
        break
      case 'day':
        option.label += '日'
        break
      case 'hour':
        option.label += '时'
        break
      case 'minute':
        option.label += '分'
        break
      default:
        option.label += ''
    }
    return option
  }

  return (
    <>
      <Cell
        title="选择时分秒"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="时间选择"
        type="datetime"
        startDate={new Date(2023, 0, 1)}
        endDate={new Date(2026, 10, 1)}
        visible={show}
        defaultValue={new Date(desc)}
        formatter={formatter}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo6
