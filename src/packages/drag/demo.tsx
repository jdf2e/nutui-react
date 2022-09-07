import React from 'react'
import { Drag } from './drag'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  dragBasic: string
  direction: string
  directionX: string
  directionY: string
  attract: string
  attractText: string
  limitBoundaries: string
}
const DragDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      dragBasic: '触摸移动',
      direction: '限制拖拽方向',
      directionX: '只能X轴拖动',
      directionY: '只能Y轴拖动',
      attract: '自动吸边',
      attractText: '按钮',
      limitBoundaries: '限制拖拽边界',
    },
    'zh-TW': {
      basic: '基本用法',
      dragBasic: '觸摸移動',
      direction: '限製拖拽方向',
      directionX: '只能X軸拖動',
      directionY: '只能Y軸拖動',
      attract: '自動吸邊',
      attractText: '按鈕',
      limitBoundaries: '限製拖拽邊界',
    },
    'en-US': {
      basic: 'Basic Usage',
      dragBasic: 'Button',
      direction: 'Limit Direction',
      directionX: 'X axis',
      directionY: 'Y axis',
      attract: 'Attract',
      attractText: 'Button',
      limitBoundaries: 'Limit Boundaries',
    },
  })
  const right = () => {
    return document.documentElement.clientWidth - 300 - 9
  }
  const bottom = () => {
    return document.documentElement.clientHeight - 559
  }
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Drag style={{ top: '120px', left: '8px' }}>
        <span style={btnStyle}>{translated.dragBasic}</span>
      </Drag>
      <h2 style={{ top: '30px', position: 'relative' }}>
        {translated.direction}
      </h2>
      <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <span style={btnStyle}> {translated.directionX}</span>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <span style={btnStyle}> {translated.directionY}</span>
      </Drag>
      <h2 style={{ top: '60px', position: 'relative' }}>
        {translated.attract}
      </h2>
      <Drag direction="x" attract style={{ top: '275px', left: '8px' }}>
        <span style={btnStyle}>{translated.attractText}</span>
      </Drag>
      <h2 style={{ top: '90px', position: 'relative' }}>
        {translated.limitBoundaries}
      </h2>
      <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '360px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid red',
        }}
      />
      <Drag
        boundary={{ top: 361, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '400px', left: '50px' }}
      >
        <span style={btnStyle}>{translated.limitBoundaries}</span>
      </Drag>
    </div>
  )
}

export default DragDemo
