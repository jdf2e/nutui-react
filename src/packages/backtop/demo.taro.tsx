import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo5 from './demos/taro/demo5'
import { harmony } from '@/utils/platform-taro'

const BackTopDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
    },
    'en-US': {
      title: 'Basic Usage',
    },
    'zh-TW': {
      title: '基礎用法',
    },
  })
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }

  return (
    <>
      <Header />
      {harmony() ? (
        <Demo5 />
      ) : (
        <ScrollView
          className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
          style={demoStyle}
        >
          <View className="h2">{translated.title}</View>
          <Demo1 />
        </ScrollView>
      )}
    </>
  )
}

export default BackTopDemo
