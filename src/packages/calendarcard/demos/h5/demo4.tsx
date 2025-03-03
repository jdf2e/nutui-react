import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react'

const Demo4 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log('onChange', val)
  }
  return <CalendarCard type="week" onChange={onChange} />
}
export default Demo4
