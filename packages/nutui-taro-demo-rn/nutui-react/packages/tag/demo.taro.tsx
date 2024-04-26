import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

const TagDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      style: '样式风格',
      customColor: '自定义颜色',
      imageText: '图文',
    },
    'en-US': {
      basic: 'Basic Usage',
      style: 'Style',
      customColor: 'Custom Color',
      imageText: 'image-text',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.style}</h2>
        <Demo2 />

        <h2>{translated.customColor}</h2>
        <Demo3 />

        <h2>{translated.imageText}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default TagDemo
