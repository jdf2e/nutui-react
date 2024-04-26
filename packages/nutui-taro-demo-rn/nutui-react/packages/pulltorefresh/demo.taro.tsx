import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
    },
    'zh-TW': {
      basic: '基礎用法',
      scrollView: 'ScrollView',
      primary: '反白模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollView: 'ScrollView',
      primary: 'reverse',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.scrollView}</h2>
        <Demo2 />

        <h2>{translated.primary}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default PullToRefreshDemo
