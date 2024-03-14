import React from 'react'
import { CalendarCard } from '@nutui/nutui-react'

const Demo7 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return <CalendarCard firstDayOfWeek={1} onChange={onChange} />
}
export default Demo7
