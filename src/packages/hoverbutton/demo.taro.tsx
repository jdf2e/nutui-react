import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo1Rn from './demos/taro/demo1-rn'
import Demo2 from './demos/taro/demo2'
import Demo2Rn from './demos/taro/demo2-rn'
import Demo3 from './demos/taro/demo3'
import Demo3Rn from './demos/taro/demo3-rn'
import Demo4 from './demos/taro/demo4'
import Demo4Rn from './demos/taro/demo4-rn'
import { harmonyAndRn } from '@/utils/platform-taro'
// import Demo5 from './demos/taro/demo5'

const isNative = harmonyAndRn()

const HoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      show: '展示',
      basic: '基础用法',
      multiButtons: '多个按钮',
      hasTabbar: '有底部导航栏的情况',
      customZIndex: '自定义层级',
      customSpacing: '自定义间距',
    },
    'zh-TW': {
      show: '展示',
      basic: '基礎用法',
      multiButtons: '多個按鈕',
      hasTabbar: '有底部導航欄的情況',
      customZIndex: '自定義層級',
      customSpacing: '自定義間距',
    },
    'en-US': {
      show: 'Show ',
      basic: 'Basic Usage',
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
        {/* {!isNative && <View className="h2">{translated.customSpacing}</View>}
        {!isNative && (
          <Cell
            title={`${translated.show}${translated.customSpacing}`}
            onClick={() => {
              setCurDemo('customSpacing')
            }}
          />
        )} */}
      </ScrollView>

      {curDemo === 'basic' && (isNative ? <Demo1Rn /> : <Demo1 />)}
      {curDemo === 'multiButtons' && (isNative ? <Demo2Rn /> : <Demo2 />)}
      {curDemo === 'hasTabbar' && (isNative ? <Demo3Rn /> : <Demo3 />)}
      {curDemo === 'customZIndex' && (isNative ? <Demo4Rn /> : <Demo4 />)}
      {/* {curDemo === 'customSpacing' && <Demo5 />} */}
    </View>
  )
}

export default HoverDemo
