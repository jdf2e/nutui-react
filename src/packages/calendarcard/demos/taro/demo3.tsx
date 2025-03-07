import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log('onChange', val)
  }
  return <CalendarCard type="range" onChange={onChange} />
}
export default Demo3
