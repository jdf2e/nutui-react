import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <CircleProgress percent={20} />
      <CircleProgress percent={60}>60%</CircleProgress>
    </>
  )
}
export default Demo1
