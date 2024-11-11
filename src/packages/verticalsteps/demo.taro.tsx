import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const StepsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      dot: '基础用法：点状',
      customIcon: '自定义图标',
    },
    'zh-TW': {
      basic: '基础用法',
      dot: '基础用法：点状',
      customIcon: '自定義圖標',
    },
    'en-US': {
      basic: 'Basic usage',
      dot: 'Basic usage: Dot',
      customIcon: 'custom Icon',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo bg-w ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.dot}</View>
        <Demo2 />
        <View className="h2">{translated.customIcon}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default StepsDemo
