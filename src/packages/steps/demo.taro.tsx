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

const StepsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '横版左右布局1行文案',
      horizontalTwoLine: '横版左右布局2行文案',
      horizontalIcon: '横版左右布局icon',
      horizontalDouble: '横版上下布局点状、icon、文案',
      horizontalDotIcon: '横向上下布局混合：点状 + icon',
      custom: '自定义步骤条',
      customIcon: '横向自定义icon',
      vertical: '竖向点状',
      verticalDotIcon: '竖向混合：点状 + icon',
    },
    'zh-TW': {
      basic: '橫版左右布局1行文案',
      horizontalTwoLine: '橫版左右布局2行文案',
      horizontalIcon: '橫版左右布局icon',
      horizontalDouble: '橫版上下布局點狀、icon、文案',
      horizontalDotIcon: '橫版上下布局混合：點狀 + icon',
      custom: '自定義步驟条',
      customIcon: '橫版自定義icon',
      vertical: '豎向點狀',
      verticalDotIcon: '豎向步驟條：点状+icon',
    },
    'en-US': {
      basic: 'Horizontal 1-line text layout',
      horizontalTwoLine: 'Horizontal 2-line text layout',
      horizontalIcon: 'Horizontal icon layout',
      horizontalDouble: 'Horizontal dot, icon, text layout',
      horizontalDotIcon: 'Horizontal mixed layout: dot + icon',
      custom: 'Custom step bar',
      customIcon: 'Horizontal custom icon',
      vertical: 'Vertical dot',
      verticalDotIcon: 'Vertical dot + icon',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />

        <View className="h2">{translated.horizontalTwoLine}</View>
        <Demo3 />

        <View className="h2">{translated.horizontalIcon}</View>
        <Demo7 />

        <View className="h2">{translated.custom}</View>
        <Demo2 />

        <View className="h2">{translated.horizontalDotIcon}</View>
        <Demo6 />

        <View className="h2">{translated.customIcon}</View>
        <Demo5 />

        <View className="h2">{translated.customIcon}</View>
        <Demo4 />

        <View className="h2">{translated.vertical}</View>
        <Demo8 />

        <View className="h2">{translated.verticalDotIcon}</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default StepsDemo
