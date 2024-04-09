import React from 'react'
import { CircleProgress } from '@nutui/nutui-react'

const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062',
}
const Demo3 = () => {
  return (
    <>
      <CircleProgress percent={50} color="var(--nutui-color-info)">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default Demo3
