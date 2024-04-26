import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const gradientColor = {
  '0%': '#ff404f',
  '100%': '#FF0F23',
}
const Demo3 = () => {
  return (
    <>
      <CircleProgress percent={50} color="#FF0F23">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default Demo3
