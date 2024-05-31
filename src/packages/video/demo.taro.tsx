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

const VideoDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      autoPlay: '自动播放',
      muted: '初始化静音',
      cover: '视频封面海报设置',
      inline: '行内播放',
      background: '设置视频为背景图',
      switch: '视频切换',
    },
    'zh-TW': {
      basic: '基礎用法',
      autoPlay: '自動播放',
      muted: '初始化靜音',
      cover: '視頻封面海報設置',
      inline: '行內播放',
      background: '設置視頻為背景圖',
      switch: '視頻切換',
    },
    'en-US': {
      basic: 'Basic Usage',
      autoPlay: 'Auto play',
      muted: 'Initialize mute',
      cover: 'Video cover poster settings',
      inline: 'play inline',
      background: 'Set video as background',
      switch: 'Video switching',
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

        <View className="h2">{translated.autoPlay}</View>
        <Demo2 />

        <View className="h2">{translated.muted}</View>
        <Demo3 />

        <View className="h2">{translated.cover}</View>
        <Demo4 />

        <View className="h2">{translated.inline}</View>
        <Demo5 />

        <View className="h2">{translated.background}</View>
        <Demo6 />

        <View className="h2">{translated.switch}</View>
        <Demo7 />
      </ScrollView>
    </>
  )
}

export default VideoDemo
