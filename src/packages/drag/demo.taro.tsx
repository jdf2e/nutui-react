import React from 'react'
import Taro from '@tarojs/taro'
import { Drag } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

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
  const { screenWidth, windowHeight } = Taro.getSystemInfoSync()

  const right = () => {
    return screenWidth - 300 - 9
  }
  const bottom = () => {
    return windowHeight - 501
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
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ height: `${windowHeight - 20}px` }}
      >
        <h2>{translated.basic}</h2>
        <Drag style={{ left: '8px' }}>
          <span style={btnStyle}>{translated.dragBasic}</span>
        </Drag>
        <h2 style={{ top: '30px', position: 'relative' }}>
          {translated.direction}
        </h2>
        <Drag
          direction="x"
          style={{ top: '140px', left: '8px' }}
          className="weapp-drag1"
        >
          <span style={btnStyle}> {translated.directionX}</span>
        </Drag>
        <Drag
          direction="y"
          style={{ top: '140px', right: '50px' }}
          className="weapp-drag2"
        >
          <span style={btnStyle}> {translated.directionY}</span>
        </Drag>
        <h2 style={{ top: '60px', position: 'relative' }}>
          {translated.attract}
        </h2>
        <Drag
          direction="x"
          attract
          style={{ top: '220px', left: '8px' }}
          className="weapp-drag3"
        >
          <span style={btnStyle}>{translated.attractText}</span>
        </Drag>
        <h2 style={{ top: '90px', position: 'relative' }}>
          {translated.limitBoundaries}
        </h2>
        <div
          className="drag-boundary"
          style={{
            position: 'absolute',
            top: '300px',
            left: '8px',
            width: '300px',
            height: '200px',
            border: '1px solid red',
          }}
        />
        <Drag
          boundary={{ top: 301, left: 9, bottom: bottom(), right: right() }}
          style={{ top: '360px', left: '50px' }}
          className="weapp-drag4"
        >
          <span style={btnStyle}>{translated.limitBoundaries}</span>
        </Drag>
      </div>
    </>
  )
}

export default DragDemo
