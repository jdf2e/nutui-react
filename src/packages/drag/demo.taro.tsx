import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
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
      <ScrollView className={`demo ${isTaroWeb ? 'web' : 'full'}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2" style={{ paddingTop: '30px' }}>
          {translated.direction}
        </View>
        <Demo2 />
        <View className="h2" style={{ paddingTop: '30px' }}>
          {translated.attract}
        </View>
        <Demo3 />
        <View className="h2" style={{ paddingTop: '30px' }}>
          {translated.limitBoundaries}
        </View>
        <Demo4 />
      </ScrollView>
    </>
  )
}

export default DragDemo
