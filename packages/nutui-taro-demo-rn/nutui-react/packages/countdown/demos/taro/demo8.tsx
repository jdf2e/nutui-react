import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import '../../demo.scss'

const partItemStyle = {
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 25,
  backgroundColor: '#e8220e',
  color: '#fff',
  fontSize: '14px',
  borderRadius: 6,
  overflow: 'hidden',
}
const partItemSymbolStyle = {
  marginLeft: 5,
  marginRight: 5,
  whiteSpace: 'nowrap',
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
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <View style={partItemSymbolStyle}>
              <Text>{resetTime.d}天</Text>
            </View>
            <View style={partItemStyle}>
              {resetTime.h}
            </View>
            <View style={partItemSymbolStyle}>
              :
            </View>
            <View style={partItemStyle}>
              {resetTime.m}
            </View>
            <View style={partItemSymbolStyle}>
              :
            </View>
            <View style={partItemStyle}>
              {resetTime.s}
            </View>
          </View>
        </CountDown>
    </Cell>
  )
}
export default Demo8
