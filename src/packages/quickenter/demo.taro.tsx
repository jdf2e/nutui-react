import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const QuickEnterDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollable: '可滚动',
      customClose: '自定义关闭图标',
    },
    'zh-TW': {
      basic: '基础用法',
      scrollable: '可滚动',
      customClose: '自定义关闭图标',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollable: 'Scrollable',
      customClose: 'Custom Close Icon',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.scrollable}</View>
        <Demo2 />
        <View className="h2">{translated.customClose}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default QuickEnterDemo
