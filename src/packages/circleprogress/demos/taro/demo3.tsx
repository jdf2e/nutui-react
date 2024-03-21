import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const gradientColor = {
  '0%': '#ff404f',
  '100%': '#fa2c19',
}
const Demo3 = () => {
  return (
    <>
      <CircleProgress percent={50} color="#fa2c19">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default Demo3
