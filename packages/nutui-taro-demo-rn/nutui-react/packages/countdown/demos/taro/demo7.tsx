import React, { useRef, useState } from 'react'
import { Cell, CountDown, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

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
      align='center'
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
      {/* <Button type="primary" size="small" onClick={() => toggle()}>
        {paused ? 'start' : 'stop'}
      </Button> */}
      <View 
        onClick={() => toggle()}
        style={{
          backgroundColor: 'rgb(232, 34, 14)',
          color: '#fff',
          borderRadius: 14,
          fontSize: 12,
          fontWeight: 700,
          width: 50,
          height: 28,
          lineHeight: 28,
          textAlign: 'center',
        }}

      >{paused ? 'start' : 'stop'}</View>
    </Cell>
  )
}
export default Demo7
