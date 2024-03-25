import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const DragDemo = () => {
  const [translated] = useTranslate({
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

  return (
    <>
      <Header />
      <div className={`demo full ${isTaroWeb ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2 style={{ paddingTop: '30px' }}>{translated.direction}</h2>
        <Demo2 />

        <h2 style={{ paddingTop: '30px' }}>{translated.attract}</h2>
        <Demo3 />

        <h2 style={{ paddingTop: '30px' }}>{translated.limitBoundaries}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default DragDemo
