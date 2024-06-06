import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const WaterMarkDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      part: '局部用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      part: '局部用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      part: 'Part Usage',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.part}</View>
        <Demo2 />
      </ScrollView>
    </>
  )
}

export default WaterMarkDemo
