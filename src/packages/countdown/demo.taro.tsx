import React from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const CountDownDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      remainingTime: '剩余时间用法',
      format: '自定义格式',
      millisecond: '毫秒级渲染',
      serverTime: '以服务端的时间为准',
      async: '异步更新结束时间',
      controlTime: '控制开始和暂停的倒计时',
      customStyle: '自定义展示样式',
      handleControl: '手动控制',
    },
    'zh-TW': {
      basic: '基础用法',
      remainingTime: '剩余時間用法',
      format: '自定義格式',
      millisecond: '毫秒級渲染',
      serverTime: '以服務端的時間為準',
      async: '異步更新結束時間',
      controlTime: '控製開始和暫停的倒計時',
      customStyle: '自定義展示樣式',
      handleControl: '手動控製',
    },
    'en-US': {
      basic: 'Basic Usage',
      remainingTime: 'Remaining Time Usage',
      format: 'Custom Format',
      millisecond: 'Millisecond',
      serverTime: 'Server Time Prevails',
      async: 'End-Time of Asyn Update',
      controlTime: 'Manual Control',
      customStyle: 'Custom Style',
      handleControl: 'Handle Control',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo demo-countdown ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        }`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.remainingTime}</View>
        <Demo2 />
        <View className="h2">{translated.format}</View>
        <Demo3 />
        <View className="h2">{translated.millisecond}</View>
        <Demo4 />
        <View className="h2">{translated.serverTime}</View>
        <Demo5 />
        <View className="h2">{translated.async}</View>
        <Demo6 />
        <View className="h2">{translated.controlTime}</View>
        <Demo7 />
        <View className="h2">{translated.customStyle}</View>
        <Demo8 />
        <View className="h2">{translated.handleControl}</View>
        <Demo9 />
      </ScrollView>
    </>
  )
}

export default CountDownDemo
