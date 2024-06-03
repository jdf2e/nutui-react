import React from 'react'
import { getEnv } from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const StickyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '吸顶距离',
      title2: '指定容器内吸顶',
      title3: '吸底距离',
    },
    'zh-TW': {
      basic: '基础用法',
      title1: '吸頂距離',
      title2: '指定容器內吸頂',
      title3: '吸底距離',
    },
    'en-US': {
      basic: 'Basic usage ',
      title1: 'Ceiling distance',
      title2: 'Ceiling in specified container',
      title3: 'Bottom suction distance',
    },
  })
  const { basic, title1, title2, title3 } = translated

  return (
    <>
      <Header />
      <ScrollView className={`demo ${getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{title1}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{title2}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{title3}</View>
        <Cell style={{ height: '64px' }}>
          <Demo4 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default StickyDemo
