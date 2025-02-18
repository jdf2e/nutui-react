import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import { harmony } from '@/utils/platform-taro'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
      disabled: '禁用',
    },
    'zh-TW': {
      basic: '基礎用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
      disabled: '禁用',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollView: 'ScrollView',
      primary: 'reverse',
      disabled: 'disabled',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.scrollView}</View>
        <Demo2 />
        <View className="h2">{translated.primary}</View>
        <Demo3 />
        {!harmony() && (
          <>
            <View className="h2">{translated.disabled}</View>
            <Demo4 />
          </>
        )}
      </ScrollView>
    </>
  )
}

export default PullToRefreshDemo
