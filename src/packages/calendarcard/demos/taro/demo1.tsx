import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const date = new Date('2025-01-01')

const Demo1 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log('onChange', val)
  }
  return <CalendarCard defaultValue={date} onChange={onChange} />
}
export default Demo1
