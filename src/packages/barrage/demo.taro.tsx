import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import './demo.scss'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'

const BarrageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-barrage`}
      >
        <View className="h2">{translated['84aa6bce']}</View>
        <Demo1 />
      </ScrollView>
    </>
  )
}

export default BarrageDemo
