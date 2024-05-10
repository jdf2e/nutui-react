import React, { useRef } from 'react'
import {
  Cell,
  CountDown,
  Button,
  Grid,
  GridItem,
} from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

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
          format='ss:SS'
          autoStart={false}
          time={20000}
          ref={countDownRef}
        />
      </Cell>
      {/* TODO：gird未适配，适配后替换 */}
      {Taro.getEnv() === Taro.ENV_TYPE.RN ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 16,
            paddingBottom: 16,
            marginBottom: 20,
            backgroundColor: '#fff',
          }}
        >
          <Button type='primary' onClick={start}>
            开始
          </Button>
          <Button type='primary' onClick={pause}>
            暂停
          </Button>
          <Button type='primary' onClick={reset}>
            重置
          </Button>
        </View>
      ) : (
        <Grid columns='3' style={{ marginBottom: '5px' }}>
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
        </Grid>
      )}
    </>
  )
}
export default Demo9
