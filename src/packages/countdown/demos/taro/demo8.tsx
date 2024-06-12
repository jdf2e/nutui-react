import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import '../../demo.scss'
import pxTransform from '@/utils/px-transform'

const partItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e8220e',
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
