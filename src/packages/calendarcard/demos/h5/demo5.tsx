import React, { useState } from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react'

const Demo5 = () => {
  const [date, setDate] = useState(() => new Date('2023-01-01'))
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
    setDate(val as Date)
  }
  return <CalendarCard value={date} onChange={onChange} />
}
export default Demo5
