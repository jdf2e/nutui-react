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
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const MenuDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      controlled: '受控',
      customMenuContent: '自定义菜单内容',
      twoColsInOneLine: '一行两列',
      customActiveColor: '自定义选中态颜色',
      customIcons: '自定义图标',
      expandDirection: '向上展开',
      disableMenu: '禁用菜单',
    },
    'en-US': {
      basic: 'Basic Usage',
      controlled: 'Controlled',
      customMenuContent: 'Custom Menu Content',
      twoColsInOneLine: 'Two Cols In One Line',
      customActiveColor: 'Custom Active Color',
      customIcons: 'Custom Icons',
      expandDirection: 'Expand Direction',
      disableMenu: 'Disable Menu',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo full ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.controlled}</View>
        <Demo2 />
        <View className="h2">{translated.customMenuContent}</View>
        <Demo3 />
        <View className="h2">{translated.twoColsInOneLine}</View>
        <Demo4 />
        <View className="h2">{translated.customActiveColor}</View>
        <Demo5 />
        <View className="h2">{translated.customIcons}</View>
        <Demo6 />
        <View className="h2">{translated.expandDirection}</View>
        <Demo7 />
        <View className="h2">{translated.disableMenu}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default MenuDemo
