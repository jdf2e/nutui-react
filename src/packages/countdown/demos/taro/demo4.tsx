import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown
        endTime={stateRef.current.endTime}
        millisecond
        format="HH:mm:ss:SS"
      />
    </Cell>
  )
}
export default Demo4
