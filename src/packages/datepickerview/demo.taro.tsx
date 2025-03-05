import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const DatePickerViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '选择日期',
      mmdd: '选择月日',
    },

    'zh-TW': {
      basic: '選擇日期',
      mmdd: '選擇月日',
    },
    'en-US': {
      basic: 'Choose Date',
      mmdd: 'Choose Month-Day',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <h2>{translated.mmdd}</h2>
        <Demo2 />
      </ScrollView>
    </>
  )
}

export default DatePickerViewDemo
