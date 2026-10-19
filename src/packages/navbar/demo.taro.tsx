import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo6 from './demos/taro/demo6'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      group1: 'iOS26以下/安卓鸿蒙',
      group2: 'iOS26以上',
      cat1: '标题型',
      cat3: '导航型',
    },
    'zh-TW': {
      group1: 'iOS26以下/安卓鴻蒙',
      group2: 'iOS26以上',
      cat1: '標題型',
      cat3: '導航型',
    },
    'en-US': {
      group1: 'iOS 26 and below / Android & HarmonyOS',
      group2: 'iOS 26 and above',
      cat1: 'Title',
      cat3: 'Navigation',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo navbar-demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.group1}</View>
        <View className="h3">{translated.cat1}</View>
        <Demo1 />
        <View className="h3">{translated.cat3}</View>
        <Demo3 />
        <View className="h2">{translated.group2}</View>
        <View className="h3">{translated.cat1}</View>
        <Demo4 />
        <View className="h3">{translated.cat3}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default NavBarDemo
