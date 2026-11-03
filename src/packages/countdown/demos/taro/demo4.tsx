import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const stateRef = useRef({
    // 1～24 小时 + 百毫秒
    endDayPart: Date.now() + 21 * 60 * 60 * 1000 + 45 * 60 * 1000 + 40 * 1000,
    // < 1 小时 + 百毫秒
    endHour: Date.now() + 34 * 60 * 1000 + 6 * 1000,
  })
  return (
    <>
      <Cell>
        <CountDown
          endTime={stateRef.current.endDayPart}
          type="primary"
          format="HH:mm:ss.i"
        />
      </Cell>
      <Cell>
        <CountDown endTime={stateRef.current.endDayPart} format="HH:mm:ss.i" />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endDayPart}
          type="text"
          format="HH:mm:ss.i"
        />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endHour}
          type="primary"
          format="mm:ss.i"
        />
      </Cell>
      <Cell>
        <CountDown endTime={stateRef.current.endHour} format="mm:ss.i" />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endHour}
          type="text"
          format="mm:ss.i"
        />
      </Cell>
    </>
  )
}
export default Demo4
