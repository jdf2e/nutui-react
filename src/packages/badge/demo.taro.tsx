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
import Demo8 from './demos/taro/demo8'

const BadgeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      customColor: '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
      a8237653: '填充模式',
    },
    'zh-TW': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      customColor: '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
      a8237653: '填充模式',
    },
    'en-US': {
      '8ab98966': 'Basic usage',
      '1e7a2282': 'Max Size',
      customColor: 'Custom Color',
      '1c730245': ' Custom Context',
      '1c730248': 'Custom CSS',
      '915d7b01': 'Custom Position',
      f1089312: 'Display Alone',
      a8237653: 'Fill Mode',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated['8ab98966']}</View>
        <Demo1 />
        <View className="h2">{translated['1e7a2282']}</View>
        <Demo2 />
        <View className="h2">{translated.customColor}</View>
        <Demo3 />
        <View className="h2">{translated['1c730245']}</View>
        <Demo4 />
        <View className="h2">{translated['1c730248']}</View>
        <Demo5 />
        <View className="h2">{translated['915d7b01']}</View>
        <Demo6 />
        <View className="h2">{translated.f1089312}</View>
        <Demo7 />
        <View className="h2">{translated.a8237653}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default BadgeDemo
