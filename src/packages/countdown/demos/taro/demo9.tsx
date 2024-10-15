import React, { useRef } from 'react'
import { Cell, CountDown, Button, Grid } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

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

      <Grid columns={3} style={{ marginBottom: pxTransform(5) }}>
        <Grid.Item>
          <Button type="primary" onClick={start}>
            开始
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button type="primary" onClick={pause}>
            暂停
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button type="primary" onClick={reset}>
            重置
          </Button>
        </Grid.Item>
      </Grid>
    </>
  )
}
export default Demo9
