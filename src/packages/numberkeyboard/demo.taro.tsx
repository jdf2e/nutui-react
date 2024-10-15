import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const NumberKeyboardDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '默认键盘',
      sidebar: '带右侧栏键盘',
      confirmText: '支付',
      randomKeyOrder: '随机数键盘',
      title: '标题',
      withTitle: '带标题栏键盘',
      idNumberKeyboard: '身份证键盘',
      popup: '透传 Popup 属性',
    },
    'zh-TW': {
      basic: '默認鍵盤',
      sidebar: '帶右側欄鍵盤',
      confirmText: '支付',
      randomKeyOrder: '隨機數鍵盤',
      title: '標題',
      withTitle: '帶標題欄鍵盤',
      idNumberKeyboard: '身份證鍵盤',
      popup: '透傳 Popup 屬性',
    },
    'en-US': {
      basic: 'Default Keyboard',
      sidebar: 'Keyboard With Sidebar',
      confirmText: 'pay',
      randomKeyOrder: 'Random Key Order',
      title: 'title',
      withTitle: 'Show Keyboard With Title',
      idNumberKeyboard: 'Show IdNumber Keyboard',
      popup: 'Use Popup Props',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.sidebar}</View>
        <Demo2 />
        <View className="h2">{translated.randomKeyOrder}</View>
        <Demo3 />
        <View className="h2">{translated.withTitle}</View>
        <Demo4 />
        <View className="h2">{translated.idNumberKeyboard}</View>
        <Demo5 />
        <View className="h2">{translated.popup}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default NumberKeyboardDemo
