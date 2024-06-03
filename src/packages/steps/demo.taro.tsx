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
      basic: '基础用法',
      dot: '基础用法：点状',
      info: '标题和描述信息',
      custom: '自定义步骤条',
      customDot: '自定义步骤条：点状',
      customBoth: '自定义步骤条：点状 + icon',
      customIcon: '自定义图标',
      vertical: '竖向步骤条',
      da71e1e5: '您的订单已经打包完成，商品已发出',
      verticalDot: '点状步骤和垂直方向',
    },
    'zh-TW': {
      basic: '基础用法',
      dot: '基础用法：点状',
      info: '標題和描述信息',
      custom: '自定義步驟条',
      customDot: '自定義步驟条：点状',
      customBoth: '自定義步驟条：点状+icon',
      customIcon: '自定義圖標',
      vertical: '豎向步驟條',
      da71e1e5: '您的訂單已經打包完成，商品已發出',
      verticalDot: '點狀步驟和垂直方向',
    },
    'en-US': {
      basic: 'Basic usage',
      dot: 'Basic usage: Dot',
      info: 'Title and description information',
      custom: 'Custom Step Bar',
      customDot: 'Custom Step Bar: Dot',
      customBoth: 'Custom Step Bar: Dot+icon',
      customIcon: 'custom Icon',
      vertical: 'vertical step bar',
      verticalDot: 'Dot Steps and Vertical Orientation',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo full bg-w ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />

        <View className="h2">{translated.dot}</View>
        <Demo2 />

        <View className="h2">{translated.info}</View>
        <Demo3 />

        <View className="h2">{translated.custom}</View>
        <Demo4 />

        <View className="h2">{translated.customDot}</View>
        <Demo5 />

        <View className="h2">{translated.customBoth}</View>
        <Demo6 />

        <View className="h2">{translated.customIcon}</View>
        <Demo7 />

        <View className="h2">{translated.vertical}</View>
        <Demo8 />

        <View className="h2">{translated.verticalDot}</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default StepsDemo
