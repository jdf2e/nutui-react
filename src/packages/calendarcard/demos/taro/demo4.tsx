import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard type="week" onChange={onChange} />
}
export default Demo4
