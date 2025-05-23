import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { harmony } from '@nutui/nutui-react-taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import { useTranslate } from '@/sites/assets/locale/taro'

const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text: 'Textarea 中文与英文',
      theme: '默认主题与定制主题',
      RTL: harmony() ? 'RTL【暂不支持】' : 'RTL',
    },
    'zh-TW': {
      text: 'Textarea 中文与英文',
      theme: '默認主題与定制主題',
      RTL: harmony() ? 'RTL【暂不支持】' : 'RTL',
    },
    'en-US': {
      text: 'Textarea zh-CN and en-US',
      theme: 'Default Theme And Custom Theme',
      RTL: harmony() ? 'RTL[Pendding]' : 'RTL',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.theme}</View>
        <Demo1 />
        <View className="h2">{translated.text}</View>
        <Demo2 />
        <View className="h2">{translated.RTL}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default ConfigProviderDemo
