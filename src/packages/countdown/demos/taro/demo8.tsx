import React, { useRef, useState } from 'react'
import { Cell, CountDown, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const partItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fa2c19',
  color: '#fff',
  ...{
    width: pxTransform(20),
    height: pxTransform(25),
    fontSize: pxTransform(14),
    borderRadius: pxTransform(6),
  },
}
const partItemSymbolStyle = {
  marginLeft: pxTransform(5),
  marginRight: pxTransform(5),
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
