import React from 'react'
import { CalendarCard } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return <CalendarCard type="range" onChange={onChange} />
}
export default Demo3
