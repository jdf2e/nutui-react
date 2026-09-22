import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
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

const PaginationDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      simple: '简单模式',
      lite: '极简模式',
      ellipse: '显示省略号',
      custom: '自定义按钮',
      uncontrolled: '非受控方式',
      capsule: '胶囊数字型分页符',
      text: '纯文本型分页符',
      progress: '进度条指示型分页符',
      combined: '胶囊数字型 & 进度条指示型分页符',
    },
    'zh-TW': {
      basic: '基礎用法',
      simple: '簡單模式',
      lite: '极简模式',
      ellipse: '顯示省略號',
      custom: '自定義按鈕',
      uncontrolled: '非受控方式',
      capsule: '膠囊數字型分頁符',
      text: '純文本型分頁符',
      progress: '進度條指示型分頁符',
      combined: '膠囊數字型 & 進度條指示型分頁符',
    },
    'en-US': {
      basic: 'Basic usage',
      simple: 'Simple mode',
      lite: 'lite Mode',
      ellipse: 'Show ellipsis',
      custom: 'Custom button',
      uncontrolled: 'Uncontrolled mode',
      capsule: 'Capsule number indicator',
      text: 'Plain text indicator',
      progress: 'Progress bar indicator',
      combined: 'Capsule & progress indicator',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{translated.simple}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated.lite}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated.ellipse}</View>
        <Cell>
          <Demo4 />
        </Cell>
        <View className="h2">{translated.custom}</View>
        <Cell>
          <Demo5 />
        </Cell>
        <View className="h2">{translated.uncontrolled}</View>
        <Cell>
          <Demo6 />
        </Cell>
        <View className="h2">{translated.capsule}</View>
        <Demo7 />
        <View className="h2">{translated.text}</View>
        <Demo8 />
        <View className="h2">{translated.progress}</View>
        <Demo9 />
        <View className="h2">{translated.combined}</View>
        <Demo10 />
      </ScrollView>
    </>
  )
}

export default PaginationDemo
