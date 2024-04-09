import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo3 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown
        endTime={stateRef.current.endTime}
        format="DD 天 HH 时 mm 分 ss 秒"
      />
    </Cell>
  )
}
export default Demo3
