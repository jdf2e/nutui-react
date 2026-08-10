import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { web } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'

const ResultPageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      modifyStatus: '修改状态',
      noTitle: '无标题',
      singleButton: '单按钮',
      noButton: '无按钮',
      popup: '半弹层内嵌',
      dialog: '弹窗内嵌',
    },
    'zh-TW': {
      basic: '基礎用法',
      modifyStatus: '修改狀態',
      noTitle: '無標題',
      singleButton: '單按鈕',
      noButton: '無按鈕',
      popup: '半彈層內嵌',
      dialog: '彈窗內嵌',
    },
    'en-US': {
      basic: 'Basic Usage',
      modifyStatus: 'Modify Status',
      noTitle: 'No Title',
      singleButton: 'Single Button',
      noButton: 'No Button',
      popup: 'Inside Popup',
      dialog: 'Inside Dialog',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${web() ? 'web' : ''}`}>
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
        <View className="h2">{translated.popup}</View>
        <Demo6 />
        <View className="h2">{translated.dialog}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default ResultPageDemo
