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

const DividerDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      withText: '展示文本',
      contentPosition: '内容位置',
      dashed: '虚线',
      customStyle: '自定义样式',
      verticalDivider: '垂直分割线',
    },
    'en-US': {
      basic: 'Basic Usage',
      withText: 'With Text',
      contentPosition: 'Content Position',
      dashed: 'Dashed',
      customStyle: 'Custom Style',
      verticalDivider: 'Vertical Divider',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.withText}</View>
        <Demo2 />
        <View className="h2">{translated.contentPosition}</View>
        <Demo3 />
        <View className="h2">{translated.dashed}</View>
        <Demo4 />
        <View className="h2">{translated.customStyle}</View>
        <Demo5 />
        <View className="h2">{translated.verticalDivider}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default DividerDemo
