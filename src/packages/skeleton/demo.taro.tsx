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

const SkeletonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '标题',
      ea3bc18a: '正文',
      '02a53df5': '模拟头像',
      '0a001122': '标题段落',
      '07d62d5c': '显示子组件',
    },
    'zh-TW': {
      '84aa6bce': '标题',
      ea3bc18a: '正文',
      '02a53df5': '模拟头像',
      '0a001122': '標題段落',
      '07d62d5c': '显示子组件',
    },
    'en-US': {
      '84aa6bce': 'Title',
      ea3bc18a: 'Paragraph',
      '02a53df5': 'Mock Avatar',
      '0a001122': 'Heading Paragraph',
      '07d62d5c': 'Show Subcomponents',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated['84aa6bce']}</View>
        <Demo1 />
        <View className="h2">{translated.ea3bc18a}</View>
        <Demo2 />
        <View className="h2">{translated['02a53df5']}</View>
        <Demo3 />
        <View className="h2">{translated['0a001122']}</View>
        <Demo4 />
        <View className="h2">{translated['07d62d5c']}</View>
        <Demo5 />
      </ScrollView>
    </>
  )
}

export default SkeletonDemo
