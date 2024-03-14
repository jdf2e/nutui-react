import React from 'react'
import { CalendarCard } from '@nutui/nutui-react'

const Demo4 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return <CalendarCard type="week" onChange={onChange} />
}
export default Demo4
