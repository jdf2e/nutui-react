import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react-taro'

interface TimeType {
  value?: string
  text?: string
  [prop: string]: any
}

interface DateType {
  value?: string
  text?: string
  children?: TimeType[]
  [prop: string]: any
}
const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const optionKey = {
    valueKey: 'value1',
    textKey: 'text1',
    childrenKey: 'children1',
  }
  const options = [
    {
      value1: '20230520',
      text1: '5月20日(今天)',
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
        { value1: '11', text1: '11:00-12:00' },
      ],
    },
    {
      value1: '20230521',
      text1: '5月21日(星期三)',
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
      ],
    },
  ]
  const defaultValue = [
    {
      value1: '20230521',
      children1: [{ value1: '10' }],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value: DateType[]) => {
    setVisible(false)
    console.log(`您选择了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date: DateType, value: DateType[]) => {
    console.log(date, value)
  }
  const handleTimeChange = (time: TimeType, value: DateType[]) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="请选择配送时间" onClick={handleClick} />
      <TimeSelect
        options={options}
        optionKey={optionKey}
        defaultValue={defaultValue}
        visible={visible}
        style={{
          height: '30%',
        }}
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo2
