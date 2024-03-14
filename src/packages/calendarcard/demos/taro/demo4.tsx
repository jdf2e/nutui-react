import React from 'react'
import { CalendarCard } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return <CalendarCard type="week" onChange={onChange} />
}
export default Demo4
