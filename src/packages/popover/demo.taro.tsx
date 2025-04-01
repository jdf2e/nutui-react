import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import './demo.scss'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo41 from './demos/taro/demo4-1'
import Demo5 from './demos/taro/demo5'

const PopoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容+颜色',
      title3: '位置自定义：多条数据',
      title6: '位置自定义：单条数据',
      title4: '自定义目标元素',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content and Color',
      title3: 'Custom Location: multi datas',
      title6: 'Custom Location: one data',
      title4: 'Custom Target Element',
    },
    'zh-TW': {
      title: '基礎用法',
      title1: '選項配置',
      title2: '自定義內容+顏色',
      title3: '位置自定義：多條資料',
      title6: '位置自定義：單一資料',
      title4: '自定義目標元素',
    },
  })

  return (
    <>
      <Header />
      <View className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.title}</View>
        <Demo1 />
        <View className="h2">{translated.title1}</View>
        <Demo2 />
        <View className="h2">{translated.title2}</View>
        <Demo3 />
        <View className="h2 demoClass">{translated.title3}</View>
        <Demo4 />
        <View className="h2">{translated.title6}</View>
        <Demo41 />
        <View className="h2">{translated.title4}</View>
        <Demo5 />
      </View>
    </>
  )
}

export default PopoverDemo
