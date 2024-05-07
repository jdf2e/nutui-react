import React, { CSSProperties, useRef } from 'react'
import {
  Cell,
  CountDown,
} from '@nutui/nutui-react-taro'
import { View, Text} from '@tarojs/components'

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

  const buttonStyles:CSSProperties = {
    backgroundColor: 'rgb(232, 34, 14)',
    color: '#fff',
    borderRadius: 14,
    fontSize: 14,
    fontWeight: 700,
    width: 64,
    height: 32,
    lineHeight: 32,
    textAlign: 'center',
  }
  return (
    <>
      <Cell>
        <CountDown
          format='ss:SS'
          autoStart={false}
          time={20000}
          ref={countDownRef}
        />
      </Cell>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 16, paddingBottom:16, marginBottom: 20, backgroundColor: '#fff' }}>
          <View onClick={start} style={buttonStyles}>
            开始
          </View>
          <View onClick={pause} style={buttonStyles}>
            暂停
          </View>
          <View onClick={reset} style={buttonStyles}>
            重置
          </View>
      </View>
      {/* TODO：gird未适配，适配后替换 */}
      {/* <Grid columns='3' style={{ marginBottom: '5px' }}>
        <GridItem>
          <Button type='primary' onClick={start}>
            开始
          </Button>
        </GridItem>
        <GridItem>
          <Button type='primary' onClick={pause}>
            暂停
          </Button>
        </GridItem>
        <GridItem>
          <Button type='primary' onClick={reset}>
            重置
          </Button>
        </GridItem>
      </Grid> */}
    </>
  )
}
export default Demo9
