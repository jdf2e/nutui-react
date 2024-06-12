import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'

const SafeAreaDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
    },
    'zh-TW': {
      basic: '基礎用法',
    },
    'en-US': {
      basic: 'Basic Usage',
    },
  })

  return (
    <View>
      <Header />
      <View className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Text className="h2">{translated.basic}</Text>
        <Demo1 />
      </View>
    </View>
  )
}

export default SafeAreaDemo
