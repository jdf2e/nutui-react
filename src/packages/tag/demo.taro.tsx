import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const TagDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      style: '样式风格',
      customColor: '自定义颜色',
      imageText: '图文',
    },
    'en-US': {
      basic: 'Basic Usage',
      style: 'Style',
      customColor: 'Custom Color',
      imageText: 'image-text',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />

        <View className="h2">{translated.style}</View>
        <Demo2 />

        <View className="h2">{translated.customColor}</View>
        <Demo3 />

        <View className="h2">{translated.imageText}</View>
        <Demo4 />
      </ScrollView>
    </>
  )
}

export default TagDemo
