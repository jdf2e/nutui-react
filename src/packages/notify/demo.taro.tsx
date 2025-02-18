import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      t1: '通知类型',
      customStyle: '自定义样式',
      t3: '自定义时长',
    },
    'en-US': {
      basic: 'Basic Usage',
      t1: 'Notify Type',
      customStyle: 'Custom Style',
      t3: 'Custom Duration',
    },
  })

  return (
    <>
      <Header />
      <ScrollView>
        <View
          className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
          style={{ paddingBottom: '30px' }}
        >
          <View className="h2">{translated.basic}</View>
          <Demo1 />
          <View className="h2">{translated.t1}</View>
          <Demo2 />
          <View className="h2">{translated.customStyle}</View>
          <Demo3 />
          <View className="h2">{translated.t3}</View>
          <Demo4 />
        </View>
      </ScrollView>
    </>
  )
}

export default NotifyDemo
