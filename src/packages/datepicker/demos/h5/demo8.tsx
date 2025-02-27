import React, { useState } from 'react'
import {
  DatePicker,
  Cell,
  PickerValue,
  PickerOption,
  PickerOptions,
} from '@nutui/nutui-react'

const Demo8 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 00`)

  const confirm = (values: PickerValue[], options: PickerOptions) => {
    setDesc(options.map((option) => option.label).join(' '))
  }
  const filter = (type: string, options: PickerOptions) => {
    if (type === 'hour') {
      return options.filter((option) => Number(option.value) % 6 === 0)
    }
    return options
  }
  const formatter1 = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.label += `年`
        break
      case 'month':
        option.label += `月`
        break
      case 'day':
        option.label += `日`
        break
      case 'hour':
        option.label += `时`
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
        type="datehour"
        startDate={startDate}
        endDate={endDate}
        visible={show}
        defaultValue={new Date(`${defaultDescription}`)}
        formatter={formatter1}
        minuteStep={5}
        filter={filter}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo8
