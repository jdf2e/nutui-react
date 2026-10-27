import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      sceneMaterial: '场景材质',
      subBar: '二级楼层',
      customContent: '自定义内容',
    },
    'zh-TW': {
      sceneMaterial: '場景材質',
      subBar: '二級樓層',
      customContent: '自定義內容',
    },
    'en-US': {
      sceneMaterial: 'Scene Materials',
      subBar: 'Sub Bar',
      customContent: 'Custom Content',
    },
  })
  return (
    <>
      <Header />
      <ScrollView
        className={`demo navbar-demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.sceneMaterial}</View>
        <Demo1 />
        <View className="h2">{translated.subBar}</View>
        <Demo2 />
        <View className="h2">{translated.customContent}</View>
        <Demo3 />
      </ScrollView>
    </>
  )
}

export default NavBarDemo
