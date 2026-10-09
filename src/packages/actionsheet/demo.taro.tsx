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

const ActionSheetDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '74fc5d8a': '基础用法',
      c3a08064: '选项状态',
      c3a08065: '自定义内容',
      c3a08066: '自定义key',
      c3a08067: '顶部弹出',
    },
    'zh-TW': {
      '74fc5d8a': '基礎用法',
      c3a08064: '選項狀態',
      c3a08065: '自定義內容',
      c3a08066: '自定義key',
      c3a08067: '頂部彈出',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      c3a08064: 'Option Status',
      c3a08065: 'Custom content',
      c3a08066: 'Custom key',
      c3a08067: 'Top Popup',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated['74fc5d8a']}</View>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <View className="h2">{translated.c3a08064}</View>
        <Demo4 />
        <View className="h2">{translated.c3a08065}</View>
        <Demo5 />
        <View className="h2">{translated.c3a08066}</View>
        <Demo6 />
        <View className="h2">{translated.c3a08067}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default ActionSheetDemo
