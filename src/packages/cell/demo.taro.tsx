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

const CellDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title4: '链接 | 分组用法',
      title5: '垂直居中',
      title6: '自定义标题区域',
      title7: '分组用法',
      content: '自定义内容',
      customRight: '自定义右侧区域',
    },
    'zh-TW': {
      basic: '基础用法',
      title4: '鏈接 | 分組用法',
      title5: '垂直居中',
      title6: '自定義標題區域',
      title7: '分組用法',
      content: '自定義內容',
      customRight: '自定義右側區域',
    },
    'en-US': {
      basic: 'Basic Usage',
      title4: 'Link | Cell.Group Usage',
      title5: 'Vertical Center',
      title6: 'Customize the title area',
      title7: 'Grouping usage',
      content: 'Customize Content',
      customRight: 'Customize the right area',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.content}</View>
        <Demo2 />
        <View className="h2">{translated.title6}</View>
        <Demo3 />
        <View className="h2">{translated.customRight}</View>
        <Demo4 />
        <View className="h2">{translated.title5}</View>
        <Demo5 />
        <View className="h2">{translated.title4}</View>
        <Demo6 />
        <View className="h2">{translated.title7}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default CellDemo
