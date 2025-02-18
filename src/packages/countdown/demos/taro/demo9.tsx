import React, { useRef } from 'react'
import { Cell, CountDown, Button, Space } from '@nutui/nutui-react-taro'

interface countdownRefState {
  start: () => void
  pause: () => void
  reset: () => void
}
const Demo9 = () => {
  const countDownRef = useRef<countdownRefState>(null)
  const start = () => {
    console.log(countDownRef.current)
    countDownRef.current && countDownRef.current.start()
  }

  const pause = () => {
    countDownRef.current && countDownRef.current.pause()
  }

  const reset = () => {
    countDownRef.current && countDownRef.current.reset()
  }

  return (
    <>
      <Cell>
        <CountDown
          format="ss:SS"
          autoStart={false}
          time={20000}
          ref={countDownRef}
        />
      </Cell>

      <Space style={{ marginBottom: 20 }}>
        <Button type="primary" onClick={start}>
          开始
        </Button>
        <Button type="primary" onClick={pause}>
          暂停
        </Button>
        <Button type="primary" onClick={reset}>
          重置
        </Button>
      </Space>
    </>
  )
}
export default Demo9
