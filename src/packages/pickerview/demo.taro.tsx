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

const PickerViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      adjustHeight: '自适应高度',
      multiColumn: '多列',
      controlled: '受控',
      tiled: '平铺',
      cascade: '级联',
      asynchronous: '异步数据',
    },
    'en-US': {
      title: 'Basic Usage',
      adjustHeight: 'Adjust Height',
      multiColumn: 'Multi Column',
      controlled: 'Controlled',
      tiled: 'Tiled',
      cascade: 'Cascade',
      asynchronous: 'Asynchronous',
    },
    'zh-TW': {
      title: '基礎用法',
      adjustHeight: '自適應高度',
      multiColumn: '多列',
      controlled: '受控',
      tiled: '平鋪',
      cascade: '級聯',
      asynchronous: '異步數據',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.title}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo4 />
        <View className="h2">{translated.adjustHeight}</View>
        <Demo2 />
        <View className="h2">{translated.multiColumn}</View>
        <Demo3 />
        <View className="h2">{translated.tiled}</View>
        <Demo5 />
        <View className="h2">{translated.cascade}</View>
        <Demo6 />
        <View className="h2">{translated.asynchronous}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default PickerViewDemo
