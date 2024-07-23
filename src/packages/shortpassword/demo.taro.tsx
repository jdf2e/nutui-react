import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const ShortPasswordDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      displayPlain: '展示明文',
      displayButton: '显示按钮组',
      customLength: '自定义密码长度: 4',
      forgetPassword: '忘记密码提示语事件回调',
      autoFocus: '自动聚焦',
    },
    'zh-TW': {
      basic: '基礎用法',
      displayPlain: '展示明文',
      displayButton: '顯示按鈕組',
      customLength: '自定義密碼長度: 4',
      forgetPassword: '忘記密碼提示語事件回調',
      autoFocus: '自動聚焦',
    },
    'en-US': {
      basic: 'Basic Usage',
      displayPlain: 'Display Plaintext',
      displayButton: 'Display Button',
      customLength: 'Custome Code Length: 4',
      forgetPassword: 'Forget Password Tips',
      autoFocus: 'AutoFocus',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.displayPlain}</View>
        <Demo2 />
        <View className="h2">{translated.displayButton}</View>
        <Demo3 />
        <View className="h2">{translated.customLength}</View>
        <Demo4 />
        <View className="h2">{translated.forgetPassword}</View>
        <Demo5 />
        <View className="h2">{translated.autoFocus}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default ShortPasswordDemo
