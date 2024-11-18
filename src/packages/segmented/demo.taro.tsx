import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

const SegmentedDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      uncontrolled: '非受控',
      controlled: '受控',
      optionItems: '设置图标',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.uncontrolled}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo2 />
        <View className="h2">{translated.optionItems}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default SegmentedDemo
