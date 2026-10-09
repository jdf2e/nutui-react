import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const MaterialViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      scenes: '基础毛玻璃效果',
      immersive: '场景预设（immersive）',
      gradient: '渐变模糊效果',
    },
    'zh-TW': {
      scenes: '基礎毛玻璃效果',
      immersive: '場景預設（immersive）',
      gradient: '漸變模糊效果',
    },
    'en-US': {
      scenes: 'Basic Frosted Glass',
      immersive: 'Scene Preset (immersive)',
      gradient: 'Gradient Blur',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.scenes}</View>
        <Demo1 />
        <View className="h2">{translated.immersive}</View>
        <Demo2 />
        <View className="h2">{translated.gradient}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default MaterialViewDemo
