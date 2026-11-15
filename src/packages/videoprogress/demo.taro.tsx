import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { web } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Cell from '@/packages/cell/index.taro'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const VideoProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法 (静态播放)',
      paused: '暂停状态与自定义图标',
      draggable: '手势拖拽寻道',
    },
    'zh-TW': {
      basic: '基礎用法 (靜態播放)',
      paused: '暫停狀態與自定義圖標',
      draggable: '手勢拖拽尋道',
    },
    'en-US': {
      basic: 'Basic Usage (Static Playback)',
      paused: 'Paused State & Custom Icon',
      draggable: 'Gesture Drag & Seek',
    },
  })

  return (
    <>
      <Header />
      <ScrollView className={`demo ${web() ? 'web' : ''} demo-videoprogress`}>
        <View className="h2">{translated.basic}</View>
        <Cell>
          <Demo1 />
        </Cell>
        <View className="h2">{translated.paused}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated.draggable}</View>
        <Cell>
          <Demo3 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default VideoProgressDemo
