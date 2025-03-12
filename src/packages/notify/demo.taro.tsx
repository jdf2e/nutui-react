import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      jump: '支持跳转',
      close: '支持关闭',
      customStyle: '自定义样式',
    },
    'zh-TW': {
      basic: '基礎用法',
      jump: '支持跳轉',
      close: '支持關閉',
      customStyle: '自定義樣式',
    },
    'en-US': {
      basic: 'Basic Usage',
      jump: 'Support jump',
      close: 'Support close',
      customStyle: 'Custom Style',
    },
  })

  return (
    <>
      <Header />
      <ScrollView>
        <View className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
          <View className="h2">{translated.basic}</View>
          <Demo1 />
          <View className="h2">{translated.jump}</View>
          <Demo2 />
          <View className="h2">{translated.close}</View>
          <Demo3 />
          <View className="h2">{translated.customStyle}</View>
          <Demo4 />
        </View>
      </ScrollView>
    </>
  )
}

export default NotifyDemo
