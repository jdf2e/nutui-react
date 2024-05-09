import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import '../../demo.scss'

const HARMONY =
  Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
  Taro.getEnv() === Taro.ENV_TYPE.HARMONY

const partItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e8220e',
  color: '#fff',
  ...(HARMONY
    ? {
        width: pxTransform(20),
        height: pxTransform(25),
        fontSize: pxTransform(14),
        borderRadius: pxTransform(6),
      }
    : {
        width: 20,
        height: 25,
        fontSize: 14,
        borderRadius: 6,
      }),
}
const partItemSymbolStyle = HARMONY
  ? {
      marginLeft: pxTransform(5),
      marginRight: pxTransform(5),
    }
  : {
      marginLeft: 5,
      marginRight: 5,
    }
const Demo8 = () => {
  const onUpdate = (v: any) => {
    setResetTime(v)
  }
  const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
  })
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })

  return (
    <Cell>
      <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={partItemSymbolStyle}>
            <Text>{resetTime.d}天</Text>
          </View>
          <View style={partItemStyle}>{resetTime.h}</View>
          <View style={partItemSymbolStyle}>:</View>
          <View style={partItemStyle}>{resetTime.m}</View>
          <View style={partItemSymbolStyle}>:</View>
          <View style={partItemStyle}>{resetTime.s}</View>
        </View>
      </CountDown>
    </Cell>
  )
}
export default Demo8
