import React from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const IndicatorDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '竖向展示',
    },
    'zh-TW': {
      basic: '基礎用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '豎向展示',
    },
    'en-US': {
      basic: 'Basic usage',
      customNode: 'Custom Node',
      custom: 'Custom',
      vertical: 'Vertical display',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />

        <View className="h2">{translated.customNode}</View>
        <Demo2 />

        <View className="h2">{translated.custom}</View>
        {Taro.getEnv() === 'RN' ? null : <Demo3 />}

        <View className="h2">{translated.vertical}</View>
        <Demo4 />
      </ScrollView>
    </>
  )
}

export default IndicatorDemo
