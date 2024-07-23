import React from 'react'
import Taro from '@tarojs/taro'

import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const SideNavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text1: '基础用法',
      text2: '导航嵌套（建议最多三层）',
    },
    'zh-TW': {
      text1: '基礎用法',
      text2: '導航嵌套（建議最多三層）',
    },
    'en-US': {
      text1: 'Basic Usage',
      text2: 'Navigation Nesting (Up To Three Levels Recommended)',
    },
    'id-ID': {
      text1: 'Penggunaan dasar',
      text2: 'Sarang navigasi (disarankan hingga tiga tingkat)',
    },
  })
  const { text1, text2 } = translated

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{text1}</View>
        <Demo1 />
        <View className="h2">{text2}</View>
        <Demo2 />
      </ScrollView>
    </>
  )
}

export default SideNavBarDemo
