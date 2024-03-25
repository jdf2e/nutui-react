import React, { useState } from 'react'
import { DatePicker, Cell } from '@nutui/nutui-react'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo8 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState(`${defaultDescription} 00`)

  const confirm7 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc7(options.map((option) => option.text).join(' '))
  }
  const filter = (type: string, options: PickerOption[]) => {
    if (type === 'hour') {
      return options.filter((option) => Number(option.value) % 6 === 0)
    }
    return options
  }
  const formatter1 = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.text += `年`
        break
      case 'month':
        option.text += `月`
        break
      case 'day':
        option.text += `日`
        break
      case 'hour':
        option.text += `时`
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
        description={desc7}
        onClick={() => setShow7(true)}
      />
      <DatePicker
        title="时间选择"
        type="datehour"
        startDate={startDate}
        endDate={endDate}
        visible={show7}
        defaultValue={new Date(`${defaultDescription}`)}
        formatter={formatter1}
        minuteStep={5}
        filter={filter}
        onClose={() => setShow7(false)}
        onConfirm={(options, values) => confirm7(values, options)}
      />
    </>
  )
}
export default Demo8
