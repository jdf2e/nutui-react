import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown endTime={stateRef.current.endTime} format="DD天HH时mm分ss秒" />
    </Cell>
  )
}
export default Demo3
