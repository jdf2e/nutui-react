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

const TabsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      disabled: '禁用选项',
      matchByValue: '根据value匹配',
      multiTitle: '多个标题',
      setDuration: '设置滚动动画时长',
      padding: '内容区域留白边距',
    },
    'en-US': {
      basic: 'Basic Usage',
      disabled: 'Disabled',
      matchByValue: 'Match By Value',
      multiTitle: 'Multiple Titles',
      setDuration: 'Set Scroll Animation Duration',
      padding: 'Set Content Padding',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web  full' : ''}`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.disabled}</View>
        <Demo2 />
        <View className="h2">{translated.matchByValue}</View>
        <Demo3 />
        <View className="h2">{translated.multiTitle}</View>
        <Demo4 />
        <View className="h2">{translated.setDuration}</View>
        <Demo5 />
        <View className="h2">{translated.padding}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default TabsDemo
