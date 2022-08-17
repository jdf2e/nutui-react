import React, { useState } from 'react'
import { Range, Cell, Toast } from '@/packages/nutui.react.taro'

const RangeDemo = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const [value1, SetValue1] = useState(40)
  const [value2, SetValue2] = useState(60)
  const change = (value: number, name?: string) => {
    Toast.text(`当前值：${value}`)
    switch (name) {
      case 'value1':
        SetValue1(value)
        break
      case 'value2':
        SetValue2(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell style={cellStyle}>
          <Range modelValue={40} />
        </Cell>
        <h2>双滑块</h2>
        <Cell style={cellStyle}>
          <Range
            range
            modelValue={[30, 60]}
            change={(value: any) => {
              console.log('dddd1dddd', value)
              change(value)
            }}
          />
        </Cell>
        <h2>指定范围</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={100}
            max={10}
            min={-10}
            change={(value: any) => {
              console.log('dddd2dddd', value)
              change(value)
            }}
          />
        </Cell>
        <h2>设置步长</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value1}
            step={5}
            change={(value: any) => {
              console.log('dddd3dddd', value)
              change(value, 'value1')
            }}
          />
        </Cell>
        <h2>隐藏范围</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={30}
            hiddenRange
            change={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>隐藏标签</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={20}
            hiddenTag
            change={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>禁用</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={50}
            disabled
            change={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>自定义样式</h2>
        <Cell style={cellStyle}>
          <Range
            className="test-range"
            modelValue={40}
            inactiveColor="rgba(163,184,255,1)"
            buttonColor="rgba(52,96,250,1)"
            activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            style={{ color: 'red' }}
            change={(value: number) => {
              change(value)
            }}
          />
        </Cell>
        <h2>自定义按钮</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value2}
            button={<div className="custom-button">{value2}</div>}
            change={(value: number) => {
              change(value, 'value2')
            }}
          />
        </Cell>
      </div>
    </>
  )
}

export default RangeDemo
