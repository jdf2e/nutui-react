import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react'

const Demo6 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show5, setShow5] = useState(false)
  const [desc5, setDesc5] = useState(`${defaultDescription} 10:10`)

  const confirm5 = (values: (string | number)[], options: PickerOption[]) => {
    const date = options
      .slice(1, 3)
      .map((op) => op.text)
      .join('')
    const time = options
      .slice(3)
      .map((op) => op.value)
      .join(':')
    setDesc5(`${options[0].text}年${date} ${time}`)
  }
  const formatter = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.text += ''
        break
      case 'month':
        option.text += '月'
        break
      case 'day':
        option.text += '日'
        break
      case 'hour':
        option.text += '时'
        break
      case 'minute':
        option.text += '分'
        break
      default:
        option.text += ''
    }
    return option
  }

  return (
    <>
      <Cell
        title="选择时分秒"
        description={desc5}
        onClick={() => setShow5(true)}
      />
      <DatePicker
        title="时间选择"
        type="datetime"
        startDate={new Date(2023, 0, 1)}
        endDate={new Date(2026, 10, 1)}
        visible={show5}
        defaultValue={new Date(desc5)}
        formatter={formatter}
        onClose={() => setShow5(false)}
        onConfirm={(options, values) => confirm5(values, options)}
      />
    </>
  )
}
export default Demo6
