import React, { useRef } from 'react'
import { Cell, CountDown, Grid, GridItem, Button } from '@nutui/nutui-react'

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
      <Grid columns="3" style={{ marginBottom: '5px' }}>
        <GridItem>
          <Button type="primary" onClick={start}>
            开始
          </Button>
        </GridItem>
        <GridItem>
          <Button type="primary" onClick={pause}>
            暂停
          </Button>
        </GridItem>
        <GridItem>
          <Button type="primary" onClick={reset}>
            重置
          </Button>
        </GridItem>
      </Grid>
    </>
  )
}
export default Demo9
