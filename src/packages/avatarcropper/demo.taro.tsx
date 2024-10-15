import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const AvatarCropperDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toolbar: '自定义裁剪区域工具栏',
      round: '圆形裁剪',
    },
    'zh-TW': {
      basic: '基礎用法',
      toolbar: '自定義裁剪區域工具欄',
      round: '圓形裁剪',
    },
    'en-US': {
      basic: 'Basic usage',
      toolbar: 'Customize the cropping area toolbar',
      round: 'Roll Finger Cutting',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} full`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.toolbar}</View>
        <Demo2 />
        <View className="h2">{translated.round}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default AvatarCropperDemo
