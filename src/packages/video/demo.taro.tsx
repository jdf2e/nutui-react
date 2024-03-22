import React from 'react'
import Taro from '@tarojs/taro'
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
      <div className={`demo full ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.autoPlay}</h2>
        <Demo2 />

        <h2>{translated.muted}</h2>
        <Demo3 />

        <h2>{translated.cover}</h2>
        <Demo4 />

        <h2>{translated.inline}</h2>
        <Demo5 />

        <h2>{translated.background}</h2>
        <Demo6 />

        <h2>{translated.switch}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default VideoDemo
