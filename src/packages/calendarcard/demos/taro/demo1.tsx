import React from 'react'
import { CalendarCard } from '@nutui/nutui-react-taro'

// const date = null;
const date = new Date('2023-01-01')

const Demo1 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return <CalendarCard defaultValue={date} onChange={onChange} />
}
export default Demo1
