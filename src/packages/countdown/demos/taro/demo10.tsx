import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
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
          ariaLabel="双十一活动倒计时"
        />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          onEnd={onEnd}
          ariaLabel="双十一活动倒计时"
        />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          type="text"
          onEnd={onEnd}
          ariaLabel="双十一活动倒计时"
        />
      </Cell>
    </>
  )
}
export default Demo1
