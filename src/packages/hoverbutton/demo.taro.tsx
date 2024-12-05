import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo6 from './demos/taro/demo6'
import { harmonyAndRn } from '@/utils/platform-taro'
import Demo5 from './demos/taro/demo5'

const isNative = harmonyAndRn()

const HoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      show: '展示',
      basic: '基础用法',
      customNode: '自定义内容',
      multiButtons: '多个按钮',
      hasTabbar: '有底部导航栏的情况',
      customZIndex: '自定义层级',
      customSpacing: '自定义间距',
    },
    'zh-TW': {
      show: '展示',
      basic: '基礎用法',
      customNode: '自定义内容',
      multiButtons: '多個按鈕',
      hasTabbar: '有底部導航欄的情況',
      customZIndex: '自定義層級',
      customSpacing: '自定義間距',
    },
    'en-US': {
      show: 'Show ',
      basic: 'Basic Usage',
      customNode: 'Custom Node',
      multiButtons: 'Multiple Buttons',
      hasTabbar: 'With Tabbar',
      customZIndex: 'Custom Z-Index',
      customSpacing: 'Custom Spacing',
    },
  })
  const [curDemo, setCurDemo] = useState('basic')

  return (
    <View>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={isNative ? { minHeight: 420 } : {}}
      >
        <View className="h2">{translated.basic}</View>
        <Cell
          title={`${translated.show}${translated.basic}`}
          onClick={() => {
            setCurDemo('basic')
          }}
        />

        <View className="h2">{translated.multiButtons}</View>
        <Cell
          title={`${translated.show}${translated.multiButtons}`}
          onClick={() => {
            setCurDemo('multiButtons')
          }}
        />

        <View className="h2">{translated.hasTabbar}</View>
        <Cell
          title={`${translated.show}${translated.hasTabbar}`}
          onClick={() => {
            setCurDemo('hasTabbar')
          }}
        />

        <View className="h2">{translated.customZIndex}</View>
        <Cell
          title={`${translated.show}${translated.customZIndex}`}
          onClick={() => {
            setCurDemo('customZIndex')
          }}
        />

        {/* @TODO RN、鸿蒙端暂不支持 ConfigProvider */}
        <View className="h2">{translated.customSpacing}</View>
        <Cell
          title={`${translated.show}${translated.customSpacing}`}
          onClick={() => {
            setCurDemo('customSpacing')
          }}
        />

        <View className="h2">{translated.customNode}</View>
        <Cell
          title={`${translated.show}${translated.customNode}`}
          onClick={() => {
            setCurDemo('customNode')
          }}
        />
      </ScrollView>

      {curDemo === 'basic' && <Demo1 />}
      {curDemo === 'customNode' && <Demo6 />}
      {curDemo === 'multiButtons' && <Demo2 />}
      {curDemo === 'hasTabbar' && <Demo3 />}
      {curDemo === 'customZIndex' && <Demo4 />}
      {curDemo === 'customSpacing' && <Demo5 />}
    </View>
  )
}

export default HoverDemo
