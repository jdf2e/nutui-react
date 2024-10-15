import React from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
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

interface T {
  basic: string
  controlled: string
  numbers: string
  autoHeight: string
  we2312222: string
  readOnly: string
  readOnlyState: string
  disabled: string
  disabledState: string
  textAlign: string
  alignRight: string
}

const TextAreaDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      controlled: '受控方式',
      numbers: '显示字数统计',
      autoHeight: '自定义行数，设置自动高度',
      we2312222: '自定义字数统计样式',
      readOnly: '只读',
      readOnlyState: '只读状态',
      disabled: '禁用',
      disabledState: '禁用状态',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'zh-TW': {
      basic: '基礎用法',
      controlled: '受控方式',
      numbers: '顯示數字統計',
      autoHeight: '自定義行數，設置自動高度',
      we2312222: '自定義字数统计样式',
      readOnly: '只讀',
      readOnlyState: '只讀狀態',
      disabled: '禁用',
      disabledState: '禁用狀態',
      textAlign: '文本位置',
      alignRight: '文本居右',
    },
    'en-US': {
      basic: 'Basic usage',
      controlled: 'Controlled',
      numbers: 'Displays numerical',
      autoHeight: 'Custom rows, auto height',
      we2312222: 'Custom limit color',
      readOnly: 'Read only',
      readOnlyState: 'Read-only status',
      disabled: 'Disable',
      disabledState: 'Disabled state',
      textAlign: 'TextAlign',
      alignRight: 'TextAlign Right',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo2 />
        <View className="h2">{translated.numbers}</View>
        <Demo3 />
        {/* harmony 不支持 */}
        <View className="h2">{translated.autoHeight}</View>
        <Demo4 />
        <View className="h2">{translated.we2312222}</View>
        <Demo5 />
        <View className="h2">{translated.readOnly}</View>
        <Demo6 />
        <View className="h2">{translated.disabled}</View>
        <Demo7 />
        <View className="h2">{translated.textAlign}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default TextAreaDemo
