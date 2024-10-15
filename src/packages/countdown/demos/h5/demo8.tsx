import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const partItemStyle = {
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  background: '#fa2c19',
  color: '#fff',
  fontSize: '12px',
  borderRadius: '4px',
}
const partItemSymbolStyle = {
  margin: '0 2px',
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={partItemStyle}>{resetTime.d}</div>
          <span style={partItemSymbolStyle}>天</span>
          <div style={partItemStyle}>{resetTime.h}</div>
          <span style={partItemSymbolStyle}>:</span>
          <div style={partItemStyle}>{resetTime.m}</div>
          <span style={partItemSymbolStyle}>:</span>
          <div style={partItemStyle}>{resetTime.s}</div>
        </div>
      </CountDown>
    </Cell>
  )
}
export default Demo8
