import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
// import Header from '@/sites/components/header'
import { View, ITouchEvent } from '@tarojs/components'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const IndicatorDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '竖向展示',
    },
    'zh-TW': {
      basic: '基礎用法',
      customNode: '自定义节点',
      custom: '自定义',
      vertical: '豎向展示',
    },
    'en-US': {
      basic: 'Basic usage',
      customNode: 'Custom Node',
      custom: 'Custom',
      vertical: 'Vertical display',
    },
  })

  return (
    <>
      {/* <Header /> */}
      <View className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View>{translated.basic}</View>
        <Demo1 />

        <View>{translated.customNode}</View>
        <Demo2 />

        <View>{translated.custom}</View>
        <Demo3 />

        <View>{translated.vertical}</View>
        <Demo4 />
      </View>
    </>
  )
}

export default IndicatorDemo
