import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const TourDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '自定义样式',
      title3: '设置偏移量',
      title4: '自定义内容',
      title5: '步骤引导',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Custom Style',
      title3: 'Custom Offset',
      title4: 'Custom Content',
      title5: 'Steps',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-tour`}
      >
        <View className="h2">{translated.title1}</View>
        <Demo1 />
        <View className="h2">{translated.title2}</View>
        <Demo2 />
        <View className="h2">{translated.title3}</View>
        <Demo3 />
        <View className="h2">{translated.title4}</View>
        <Demo4 />
        <View className="h2">{translated.title5}</View>
        <Demo5 />
      </ScrollView>
    </>
  )
}

export default TourDemo
