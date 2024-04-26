import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <CircleProgress percent={50} strokeWidth={2} />
      <CircleProgress percent={60} strokeWidth={10} background="#e5e9f2" />
    </>
  )
}
export default Demo2
