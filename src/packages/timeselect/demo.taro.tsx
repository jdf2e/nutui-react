import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const TimeSelectDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
    },
    'zh-TW': {
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
    },
    'en-US': {
      basic: 'Basic Usage',
      optionKey: 'Custom optionKey',
      multiple: 'Multiple Mode',
      custom: 'Custom Usage',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.optionKey}</View>
        <Demo2 />
        <View className="h2">{translated.multiple}</View>
        <Demo3 />
        <View className="h2">{translated.custom}</View>
        <Demo4 />
      </ScrollView>
    </>
  )
}

export default TimeSelectDemo
