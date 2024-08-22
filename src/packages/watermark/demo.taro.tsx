import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const WaterMarkDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      part: '局部用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      part: '局部用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      part: 'Part Usage',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.part}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default WaterMarkDemo
