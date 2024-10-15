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

interface T {
  header: string
  end: string
  middle: string
  rows: string
  expandCollapse: string
  width: string
}
const EllipsisDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expandCollapse: '展开收起',
      width: '宽度',
    },
    'en-US': {
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expandCollapse: 'Expand & Collapse',
      width: 'width',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.header}</View>
        <Demo1 />
        <View className="h2">{translated.end}</View>
        <Demo2 />
        <View className="h2">{translated.middle}</View>
        <Demo3 />
        <View className="h2">{translated.rows}</View>
        <Demo4 />
        <View className="h2">{translated.expandCollapse}</View>
        <Demo5 />
        <View className="h2">{translated.width}</View>
        <Demo6 />
      </ScrollView>
    </>
  )
}

export default EllipsisDemo
