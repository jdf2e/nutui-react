import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo1 = () => {
  const stateRef = useRef({
    // 约 17 小时，对应设计「1～24小时 / 时:分:秒」
    endTime: Date.now() + 17 * 60 * 60 * 1000 + 26 * 60 * 1000 + 14 * 1000,
  })
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  return (
    <>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          type="primary"
          onEnd={onEnd}
        />
      </Cell>
      <Cell>
        <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          type="text"
          onEnd={onEnd}
        />
      </Cell>
    </>
  )
}
export default Demo1
