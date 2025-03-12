import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import { useTranslate } from '@/sites/assets/locale/taro'
import { harmony } from '@/utils/platform-taro'

const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: 'Textarea 默认-禁用',
      title2: 'Textarea 英文-禁用',
      defaultTheme: '默认主题',
      customTheme: `定制主题${harmony() ? '【暂不支持】' : ''}`,
      RTL: harmony() ? 'RTL【暂不支持】' : 'RTL',
    },
    'zh-TW': {
      title1: 'Textarea 默認用法-禁用',
      title2: 'Textarea 英文-禁用',
      defaultTheme: '默認主題',
      customTheme: `定制主題${harmony() ? '【暂不支持】' : ''}`,
      RTL: harmony() ? 'RTL【暂不支持】' : 'RTL',
    },
    'en-US': {
      title1: 'Textarea default + disabled',
      title2: 'Textarea en-US + disabled',
      customTheme: 'Custom Theme',
      defaultTheme: `Default Theme ${harmony() ? '[Pendding]' : ''}`,
      RTL: harmony() ? 'RTL[Pendding]' : 'RTL',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.defaultTheme}</View>
        <Demo1 />
        <View className="h2">{translated.customTheme}</View>
        <Demo2 />
        <View className="h2">{translated.title1}</View>
        <Demo3 />
        <View className="h2">{translated.title2}</View>
        <Demo4 />
        <View className="h2">{translated.RTL}</View>
        <Demo5 />
      </ScrollView>
    </>
  )
}

export default ConfigProviderDemo
