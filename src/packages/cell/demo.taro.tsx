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

const CellDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      verticalCenter: '垂直居中',
      customInfo: '自定义信息区+右侧区',
      fullyCustom: '完全自定义',
      group: '分组用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      verticalCenter: '垂直居中',
      customInfo: '自定義信息區+右側區',
      fullyCustom: '完全自定義',
      group: '分組用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      verticalCenter: 'Vertical Center',
      customInfo: 'Customize the info area and right area',
      fullyCustom: 'Fully Custom',
      group: 'Grouping Usage',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.verticalCenter}</View>
        <Demo2 />
        <View className="h2">{translated.customInfo}</View>
        <Demo3 />
        <View className="h2">{translated.fullyCustom}</View>
        <Demo4 />
        <View className="h2">{translated.group}</View>
        <Demo5 />
      </ScrollView>
    </>
  )
}

export default CellDemo
