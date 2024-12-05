import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo3 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
    endDay: Date.now() + 60 * 1000 * 60 * 25,
  })
  return (
    <>
      <Cell>
        <CountDown endTime={stateRef.current.endTime} format="mm:ss" />
      </Cell>
      <Cell>
        <CountDown endTime={stateRef.current.endTime} format="ss" />
      </Cell>
      <Cell>
        <CountDown
          type="text"
          endTime={stateRef.current.endDay}
          format="DD天HH:mm:ss"
        />
      </Cell>
    </>
  )
}
export default Demo3
