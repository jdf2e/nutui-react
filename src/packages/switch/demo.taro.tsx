import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale//taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      eventTip: '触发了 onChange 事件，开关状态：',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      eventTip: '觸發了 onChange 事件，開關狀態：',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      eventTip: 'Emit onChange event, current state:',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.asyncControl}</View>
        <Demo2 />
        <View className="h2">{translated.disabled}</View>
        <Demo3 />
        <View className="h2">{translated.eventTip}</View>
        <Demo4 />
        <View className="h2">{translated.customColor}</View>
        <Demo5 />
        <View className="h2">{translated.supportText}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default SwitchDemo
