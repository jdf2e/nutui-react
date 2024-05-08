import '../../../styles/demo.scss';
import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import { View } from '@tarojs/components'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import { useTranslate } from '@/sites/assets/locale/taro'

const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: 'Textarea 默认',
      title2: 'Textarea 英文',
      defaultTheme: '默认主题',
      customTheme: '定制主题',
    },
    'zh-TW': {
      title1: '默認用法',
      title2: 'Textarea 英文',
      defaultTheme: '默認主題',
      customTheme: '定制主題',
    },
    'en-US': {
      title1: 'Textarea default',
      title2: 'Textarea en-US',
      customTheme: 'Custom Theme',
      defaultTheme: 'Default Theme',
    },
  })
  return (
    <>
      <Header />
      <View className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.defaultTheme}</View>
        <Demo1 />
        <View className="h2">{translated.customTheme}</View>
        <Demo2 />
        <View className="h2">{translated.title1}</View>
        <Demo3 />
        <View className="h2">{translated.title2}</View>
        <Demo4 />
        <View className="h2">RTL</View>
        <Demo5 />
      </View>
    </>
  )
}

export default ConfigProviderDemo
