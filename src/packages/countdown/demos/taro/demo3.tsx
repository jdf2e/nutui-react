import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const stateRef = useRef({
    // < 1 小时
    endHour: Date.now() + 9 * 60 * 1000 + 14 * 1000,
    // ≥ 1 天
    endDay: Date.now() + 25 * 60 * 60 * 1000 + 22 * 60 * 1000 + 23 * 1000,
  })
  return (
    <>
      <Cell>
        <CountDown
          type="text"
          endTime={stateRef.current.endDay}
          format="DD天HH:mm:ss"
        />
      </Cell>
      <Cell>
        <CountDown
          type="primary"
          endTime={stateRef.current.endHour}
          format="mm:ss"
        />
      </Cell>
      <Cell>
        <CountDown endTime={stateRef.current.endHour} format="mm:ss" />
      </Cell>
      <Cell>
        <CountDown
          type="text"
          endTime={stateRef.current.endHour}
          format="mm:ss"
        />
      </Cell>
    </>
  )
}
export default Demo3
