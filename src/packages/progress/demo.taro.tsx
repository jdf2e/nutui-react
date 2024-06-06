import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
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

const ProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '设置颜色与宽度',
      noShowPercentage: '显示百分比',
      customContent: '自定义显示内容',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      lazy: '延迟加载数据',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '設置顏色與寛度',
      noShowPercentage: '顯示百分比',
      customContent: '自定義顯示內容',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      lazy: '延迟加载数据',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Show Percentage',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      lazy: 'Delay Time',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{translated.customStyle}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated.noShowPercentage}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated.customContent}</View>
        <Cell>
          <Demo4 />
        </Cell>
        <View className="h2">{translated.customSize}</View>
        <Demo5 />
        <View className="h2">{translated.statusDisplay}</View>
        <Demo6 />
        <View className="h2">{translated.dynamicChange}</View>
        <Demo7 />
        <View className="h2">{translated.lazy}</View>
        <Cell>
          <Demo8 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default ProgressDemo
