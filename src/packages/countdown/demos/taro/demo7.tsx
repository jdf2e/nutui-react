import React, { useRef, useState } from 'react'
import { Cell, CountDown, Button } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const [paused, setPaused] = useState(false)
  const toggle = () => {
    console.log(paused)
    setPaused(!paused)
  }
  const onpaused = (v: number) => {
    console.log('paused: ', v)
  }
  const onrestart = (v: number) => {
    console.log('restart: ', v)
  }
  return (
    <Cell
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CountDown
        endTime={stateRef.current.endTime}
        paused={paused}
        onPaused={onpaused}
        onRestart={onrestart}
      />
      <Button type="primary" size="small" onClick={() => toggle()}>
        {paused ? 'start' : 'stop'}
      </Button>
    </Cell>
  )
}
export default Demo7
