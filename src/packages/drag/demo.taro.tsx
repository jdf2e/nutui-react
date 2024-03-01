import React from 'react'
import Taro from '@tarojs/taro'
import { Drag, Button } from '@/packages/nutui.react.taro'
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
      basic: '基础用法',
      dragBasic: '触摸移动',
      direction: '限制拖拽方向',
      directionX: '只能X轴拖动',
      directionY: '只能Y轴拖动',
      attract: '自动吸边',
      attractText: '按钮',
      limitBoundaries: '限制拖拽边界',
    },
    'zh-TW': {
      basic: '基础用法',
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

  const isTaroWeb = Taro.getEnv() === 'WEB'

  const right = () => {
    return screenWidth - 300 - 9
  }
  const bottom = () => {
    return windowHeight - 501 - (isTaroWeb ? 57 : 0)
  }
  return (
    <>
      <Header />
      <div className={`demo ${isTaroWeb ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Drag style={{ left: '8px' }}>
          <Button type="primary">{translated.dragBasic}</Button>
        </Drag>
        <h2 style={{ top: '30px', position: 'relative' }}>
          {translated.direction}
        </h2>
        <Drag
          direction="x"
          style={{
            top: isTaroWeb ? '197px' : '140px',
            left: '8px',
          }}
        >
          <Button type="primary"> {translated.directionX}</Button>
        </Drag>
        <Drag
          direction="y"
          style={{
            top: isTaroWeb ? '197px' : '140px',
            right: '50px',
          }}
        >
          <Button type="primary"> {translated.directionY}</Button>
        </Drag>
        <h2 style={{ top: '60px', position: 'relative' }}>
          {translated.attract}
        </h2>
        <Drag
          direction="x"
          attract
          style={{
            top: isTaroWeb ? '277px' : '220px',
            left: '8px',
          }}
        >
          <Button type="primary">{translated.attractText}</Button>
        </Drag>
        <h2 style={{ top: '90px', position: 'relative' }}>
          {translated.limitBoundaries}
        </h2>
        <div
          className="drag-boundary"
          style={{
            position: 'absolute',
            top: isTaroWeb ? '357px' : '300px',
            left: '8px',
            width: '300px',
            height: '200px',
            border: '1px solid var(--nutui-color-primary)',
          }}
        />
        <Drag
          boundary={{
            top: isTaroWeb ? 358 : 301,
            left: 9,
            bottom: bottom(),
            right: right(),
          }}
          style={{
            top: isTaroWeb ? '417px' : '360px',
            left: '50px',
          }}
        >
          <Button type="primary">{translated.limitBoundaries}</Button>
        </Drag>
      </div>
    </>
  )
}

export default DragDemo
