import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react'

const Demo7 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard firstDayOfWeek={1} onChange={onChange} />
}
export default Demo7
