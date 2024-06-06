import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import '@/packages/skeleton/demo.scss'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const SkeletonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
      ea3bc18a: '传入多行',
      '02a53df5': '显示头像',
      '0a001122': '标题段落圆角风格',
      '07d62d5c': '显示子组件',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      ea3bc18a: '傳入多行',
      '02a53df5': '顯示頭像',
      '0a001122': '標題段落圓角風格',
      '07d62d5c': '圖片組合',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      ea3bc18a: 'Pass in multiple lines',
      '02a53df5': 'show avatar',
      '0a001122': 'Heading Paragraph Rounded Corner Style',
      '07d62d5c': 'show subcomponents',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated['84aa6bce']}</View>
        <Cell className="ske-cell-single">
          <Demo1 />
        </Cell>
        <View className="h2">{translated.ea3bc18a}</View>
        <Cell className="ske-cell-double">
          <Demo2 />
        </Cell>
        <View className="h2">{translated['02a53df5']}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated['0a001122']}</View>
        <Cell className="ske-cell-single">
          <Demo4 />
        </Cell>
        <View className="h2">{translated['07d62d5c']}</View>
        <Cell>
          <Demo5 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default SkeletonDemo
