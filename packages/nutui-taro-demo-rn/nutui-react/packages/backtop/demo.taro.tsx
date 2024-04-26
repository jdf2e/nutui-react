import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'

const BackTopDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
    },
    'en-US': {
      title: 'Basic Usage',
    },
    'zh-TW': {
      title: '基礎用法',
    },
  })
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={demoStyle}
      >
        <h2>{translated.title}</h2>
        <Demo1 />
      </div>
    </>
  )
}

export default BackTopDemo
