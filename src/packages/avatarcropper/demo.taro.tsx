import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const AvatarCropperDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toolbar: '自定义裁剪区域工具栏',
      round: '圆形裁剪',
    },
    'zh-TW': {
      basic: '基礎用法',
      toolbar: '自定義裁剪區域工具欄',
      round: '圓形裁剪',
    },
    'en-US': {
      basic: 'Basic usage',
      toolbar: 'Customize the cropping area toolbar',
      round: 'Roll Finger Cutting',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} full`}>
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.toolbar}</h2>
        <Demo2 />

        <h2>{translated.round}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default AvatarCropperDemo
