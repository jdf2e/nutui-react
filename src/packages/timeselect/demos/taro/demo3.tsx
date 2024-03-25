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
const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: '20230520',
      text: '5月20日(今天)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: '5月21日(星期三)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
      ],
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
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        multiple
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo3
