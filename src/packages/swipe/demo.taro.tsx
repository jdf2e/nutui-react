import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const SwipeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      base: '基础用法',
      card: '卡片场景',
      catchMove: '阻止父元素滚动',
      byRef: '通过实例方法控制',
      close: '点击关闭',
      disabled: '禁用滑动',
      event: '事件监听',
      async: '异步控制',
      custom: '自定义内容',
    },
    'zh-TW': {
      base: '基礎用法',
      card: '卡片場景',
      catchMove: '阻止父元素滾動',
      byRef: '通過實例方法控制',
      close: '點擊關閉',
      disabled: '禁用滑動',
      event: '事件監聽',
      async: '異步控制',
      custom: '自定義內容',
    },
    'en-US': {
      base: 'Basic Usage',
      card: 'Card Scenario',
      catchMove: 'Prevent Parent Element Scrolling',
      byRef: 'Control via Instance Methods',
      close: 'Click to Close',
      disabled: 'Disable Sliding',
      event: 'Event Listener',
      async: 'Asynchronous Control',
      custom: 'Custom Content',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.base}</View>
        <Demo1 />
        <View className="h2">{translated.card}</View>
        <Demo2 />
        <View className="h2">{translated.catchMove}</View>
        <Demo3 />
        <View className="h2">{translated.byRef}</View>
        <Demo4 />
        <View className="h2">{translated.close}</View>
        <Demo5 />
        <View className="h2">{translated.disabled}</View>
        <Demo6 />
        <View className="h2">{translated.event}</View>
        <Demo7 />
        <View className="h2">{translated.async}</View>
        <Demo8 />
        <View className="h2">{translated.custom}</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default SwipeDemo
