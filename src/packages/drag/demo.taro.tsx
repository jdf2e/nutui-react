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
      direction: '限制拖拽方向',
      attract: '自动吸边',
      limitBoundaries: '限制拖拽边界',
    },
    'zh-TW': {
      basic: '基础用法',
      direction: '限製拖拽方向',
      attract: '自動吸邊',
      limitBoundaries: '限製拖拽邊界',
    },
    'en-US': {
      basic: 'Basic Usage',
      direction: 'Limit Direction',
      attract: 'Attract',
      limitBoundaries: 'Limit Boundaries',
    },
  })

  const isTaroWeb = Taro.getEnv() === 'WEB'

  return (
    <>
      <Header />
      <div className={`demo ${isTaroWeb ? 'web' : 'full'}`}>
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
