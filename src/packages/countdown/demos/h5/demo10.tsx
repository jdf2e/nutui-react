import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const Demo1 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 10 * 1000,
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
          ariaRoledescription="双十一活动"
        />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          onEnd={onEnd}
          ariaRoledescription="双十一活动"
        />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          type="text"
          onEnd={onEnd}
          ariaRoledescription="双十一活动"
        />
      </Cell>
    </>
  )
}
export default Demo1
