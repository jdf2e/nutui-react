import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import '../../demo.scss'

const HARMONY =
  Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID ||
  Taro.getEnv() === Taro.ENV_TYPE.HARMONY

const partItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fa2c19',
  color: '#fff',
  ...(HARMONY
    ? {
        width: pxTransform(20),
        height: pxTransform(20),
        fontSize: pxTransform(12),
        borderRadius: pxTransform(4),
      }
    : {
        width: 20,
        height: 20,
        fontSize: 12,
        borderRadius: 4,
      }),
}
const partItemSymbolStyle = HARMONY
  ? {
      marginLeft: pxTransform(2),
      marginRight: pxTransform(2),
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
          <View style={partItemStyle}>{resetTime.d}</View>
          <View style={partItemSymbolStyle}>天</View>
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
