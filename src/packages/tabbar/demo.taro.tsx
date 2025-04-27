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
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const TabbarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '首坑品牌+营销态',
      ce5c5448: '只配图标',
      ce5c5440: '只配文字',
      b840c88f: '徽标提示',
      customColor: '自定义颜色+数量',
      cfbdc781: '固定底部',
      c9e6df49: '受控',
      c9e6df48: '模拟双击支持回调',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '首坑品牌+營銷態',
      ce5c5448: '只配圖標',
      ce5c5440: '只配文字',
      b840c88f: '徽標提示',
      customColor: '自定義顏色+數量',
      cfbdc781: '固定底部',
      c9e6df49: '受控',
      c9e6df48: '模擬雙擊支持回調',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Custom',
      ce5c5448: 'Only Icon',
      ce5c5440: 'Only Text',
      b840c88f: 'Logo Tips',
      customColor: 'Custom Color and Size',
      cfbdc781: 'Fixed Bottom',
      c9e6df49: 'With Controled',
      c9e6df48: 'Mock Double Click',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo full ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.ce5c5446}</View>
        <Demo1 />
        <View className="h2">{translated.b840c88f}</View>
        <Demo2 />
        <View className="h2">{translated.ce5c5448}</View>
        <Demo3 />
        <View className="h2">{translated.ce5c5440}</View>
        <Demo4 />
        <View className="h2">{translated.c38a08ef}</View>
        <Demo5 />
        <View className="h2">{translated.customColor}</View>
        <Demo6 />
        <View className="h2">{translated.c9e6df49}</View>
        <Demo7 />
        <View className="h2">{translated.c9e6df48}</View>
        <Demo8 />
        <View className="h2" style={{ marginBottom: 100 }}>
          {translated.cfbdc781}
        </View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default TabbarDemo
