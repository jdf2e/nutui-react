import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo1 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  return (
    <Cell>
      <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
    </Cell>
  )
}
export default Demo1
