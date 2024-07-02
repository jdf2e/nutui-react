import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const ResultPageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      modifyStatus: '修改状态',
      noTitle: '无标题',
      singleButton: '单按钮',
      noButton: '无按钮',
    },
    'zh-TW': {
      basic: '基礎用法',
      modifyStatus: '修改狀態',
      noTitle: '無標題',
      singleButton: '單按鈕',
      noButton: '無按鈕',
    },
    'en-US': {
      basic: 'Basic Usage',
      modifyStatus: 'Modify Status',
      noTitle: 'No Title',
      singleButton: 'Single Button',
      noButton: 'No Button',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className="demo">
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.modifyStatus}</View>
        <Demo2 />
        <View className="h2">{translated.noTitle}</View>
        <Demo3 />
        <View className="h2">{translated.singleButton}</View>
        <Demo4 />
        <View className="h2">{translated.noButton}</View>
        <Demo5 />
      </ScrollView>
    </>
  )
}

export default ResultPageDemo
