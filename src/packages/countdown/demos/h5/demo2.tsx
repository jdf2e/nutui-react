import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo2 = () => {
  const stateRef = useRef({
    remainingTime: 60 * 1000,
  })
  return (
    <Cell>
      <CountDown remainingTime={stateRef.current.remainingTime} />
    </Cell>
  )
}
export default Demo2
