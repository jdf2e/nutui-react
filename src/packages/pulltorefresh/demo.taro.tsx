import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
    },
    'zh-TW': {
      basic: '基礎用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollView: 'ScrollView',
      primary: 'reverse',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />

        <View className="h2">{translated.scrollView}</View>
        <Demo2 />

        <View className="h2">{translated.primary}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default PullToRefreshDemo
