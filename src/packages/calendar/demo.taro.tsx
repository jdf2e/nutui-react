import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
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
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'

const CalendarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '选择单个日期',
      b840c88f: '请选择',
      a74a1fd4: '选择日期区间',
      cfbdc781: '快捷选择',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      a52bef0c: '已选择',
      d04fcbda: '自定义日历',
    },
    'zh-TW': {
      ce5c5446: '基礎翻譯',
      c38a08ef: '選擇日期',
      b840c88f: '請選擇',
      a74a1fd4: '選擇日期區間',
      cfbdc781: '快捷選擇',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      a52bef0c: '已選擇',
      d04fcbda: '自定義日曆',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'select a single date',
      b840c88f: 'please choose',
      a74a1fd4: 'Select date range',
      cfbdc781: 'quick selection',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      a52bef0c: 'chosen',
      d04fcbda: 'custom calendar',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.ce5c5446}</View>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
        <Demo5 />
        <Demo6 />
        <View className="h2">{translated.cfbdc781}</View>
        <Demo7 />
        <Demo8 />
        <View className="h2">{translated.d04fcbda}</View>
        <Demo9 />
        <Demo10 />
        <View className="h2">{translated.e51e4582}</View>
        <Demo11 />
      </ScrollView>
    </>
  )
}

export default CalendarDemo
