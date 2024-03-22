import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react'

const Demo8 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return (
    <CalendarCard
      startDate={new Date('2023-08-01')}
      endDate={new Date('2025-11-11')}
      onChange={onChange}
    />
  )
}
export default Demo8
