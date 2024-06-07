import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, CustomWrapper } from '@tarojs/components'
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
import Demo10 from './demos/taro/demo10'
import Demo11 from './demos/taro/demo11'

const CalendarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      single: '选择单个日期',
      multiple: '选择多个日期',
      range: '选择范围',
      week: '选择周',
      control: '受控模式',
      renderDay: '自定义日期信息',
      firstDay: '自定义周起始日',
      customRange: '自定义选择范围',
      disable: '自定义禁止选择日期',
      popup: '与 Popup 组合使用',
      select: '选择日期',
      confirm: '确定',
      ref: '使用 Ref 上的方法',
    },
    'zh-TW': {
      single: '選擇單個日期',
      multiple: '選擇多個日期',
      range: '選擇範圍',
      week: '選擇周',
      control: '受控模式',
      renderDay: '自定义日期信息',
      firstDay: '自定義周起始日',
      customRange: '自定義選擇範圍',
      disable: '自定義禁止選擇日期',
      popup: '與 Popup 組合使用',
      select: '選擇日期',
      confirm: '確定',
      ref: '使用 Ref 上的方法',
    },
    'en-US': {
      single: 'Select a single date',
      multiple: 'Select multiple dates',
      range: 'Select a range',
      week: 'Select a week',
      control: 'Controlled mode',
      renderDay: 'Custom day information',
      firstDay: 'Custom week start day',
      customRange: 'Custom selection range',
      disable: 'Custom prohibition date selection',
      popup: 'Use with Popup',
      select: 'Select',
      confirm: 'Confirm',
      ref: 'Use ref',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.single}</View>
        <CustomWrapper>
          <Demo1 />
        </CustomWrapper>

        <View className="h2">{translated.multiple}</View>
        <CustomWrapper>
          <Demo2 />
        </CustomWrapper>

        <View className="h2">{translated.range}</View>
        <CustomWrapper>
          <Demo3 />
        </CustomWrapper>

        <View className="h2">{translated.week}</View>
        <CustomWrapper>
          <Demo4 />
        </CustomWrapper>

        <View className="h2">{translated.control}</View>
        <CustomWrapper>
          <Demo5 />
        </CustomWrapper>

        <View className="h2">{translated.renderDay}</View>
        <CustomWrapper>
          <Demo6 />
        </CustomWrapper>

        <View className="h2">{translated.firstDay}</View>
        <CustomWrapper>
          <Demo7 />
        </CustomWrapper>

        <View className="h2">{translated.customRange}</View>
        <CustomWrapper>
          <Demo8 />
        </CustomWrapper>

        <View className="h2">{translated.disable}</View>
        <CustomWrapper>
          <Demo9 />
        </CustomWrapper>

        <View className="h2">{translated.popup}</View>
        <CustomWrapper>
          <Demo10 />
        </CustomWrapper>

        <View className="h2">{translated.ref}</View>
        <CustomWrapper>
          <Demo11 />
        </CustomWrapper>
      </ScrollView>
    </>
  )
}

export default CalendarDemo
