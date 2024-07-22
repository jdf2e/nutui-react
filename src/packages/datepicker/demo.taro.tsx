import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const DatePickerDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '选择日期',
      mmdd: '选择月日',
      showAll: '选择年月日时分',
      time: '选择时分秒',
      hourMinutes: '选择时分',
      format: '格式化选项',
      stepMins: '分钟数递增步长设置',
      filter: '过滤选项',
    },
    'zh-TW': {
      basic: '選擇日期',
      mmdd: '選擇月日',
      showAll: '選擇年月日時分',
      time: '選擇時分秒',
      hourMinutes: '選擇時分',
      format: '格式化选项',
      stepMins: '分鐘數遞增步長設置',
      filter: '過濾選項',
    },
    'en-US': {
      basic: 'Choose Date',
      mmdd: 'Choose Month-Day',
      showAll: 'Choose DateTime',
      time: 'Choose Time',
      hourMinutes: 'Selective time',
      format: 'Option Formatter',
      stepMins: 'Option Steps',
      filter: 'Option Filter',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.mmdd}</View>
        <Demo2 />
        <View className="h2">{translated.showAll}</View>
        <Demo3 />
        <View className="h2">{translated.time}</View>
        <Demo4 />
        <View className="h2">{translated.hourMinutes}</View>
        <Demo5 />
        <View className="h2">{translated.format}</View>
        <Demo6 />
        <View className="h2">{translated.stepMins}</View>
        <Demo7 />
        <View className="h2">{translated.filter}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default DatePickerDemo
