import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const stateRef = useRef({
    serverTime: Date.now() - 20 * 1000,
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown
        startTime={stateRef.current.serverTime}
        endTime={stateRef.current.endTime}
      />
    </Cell>
  )
}
export default Demo5
