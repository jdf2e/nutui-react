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
const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: 'zhejiang',
      text: '浙江',
      children: [
        { value: 'hangzhou', text: '杭州' },
        { value: 'ningbo', text: '宁波' },
      ],
    },
    {
      value: 'jiangsu',
      text: '江苏',
      children: [
        { value: 'nanjing', text: '南京' },
        { value: 'suzhou', text: '苏州' },
        { value: 'yangzhou', text: '扬州' },
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
      <Cell title="请选择所在城市" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        title="请选择所在城市"
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo4
