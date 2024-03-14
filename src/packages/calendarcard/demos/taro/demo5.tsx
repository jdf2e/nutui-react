import React, { useState } from 'react'
import { CalendarCard } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [date, setDate] = useState(() => new Date('2023-01-01'))
  const onChange = (val) => {
    console.log(val)
    setDate(val)
  }
  return <CalendarCard value={date} onChange={onChange} />
}
export default Demo5
