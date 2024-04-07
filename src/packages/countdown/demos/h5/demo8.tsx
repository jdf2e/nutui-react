import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react'

const partItemStyle = {
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '25px',
  background: '#e8220e',
  color: '#fff',
  fontSize: '14px',
  borderRadius: '6px',
}
const partItemSymbolStyle = {
  margin: '0 5px',
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
      <span>
        <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
          <div
            className="countdown-part-box"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className="part-item-symbol" style={partItemSymbolStyle}>
              {resetTime.d}天
            </div>
            <div className="part-item h" style={partItemStyle}>
              {resetTime.h}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
              :
            </span>
            <div className="part-item m" style={partItemStyle}>
              {resetTime.m}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
              :
            </span>
            <div className="part-item s" style={partItemStyle}>
              {resetTime.s}
            </div>
          </div>
        </CountDown>
      </span>
    </Cell>
  )
}
export default Demo8
