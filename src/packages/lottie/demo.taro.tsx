import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const LoadingDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
    },
    'zh-TW': {
      title1: '基礎用法',
    },
    'en-US': {
      title1: 'Basic Usage',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className="demo">
        <View className="h2">{translated.title1}</View>
        <Demo1 />
        <View className="h2">{translated.title1}</View>
        <Demo2 />
        <View className="h2">{translated.title1}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default LoadingDemo
