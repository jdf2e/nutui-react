import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import '@/packages/navbar/demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '标题位置',
      title2: '多tab切换导航',
    },
    'zh-TW': {
      basic: '基礎用法',
      title1: '標題位置',
      title2: '多tab切換導航',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Title Align',
      title2: 'Multi-tab Switching Navigation',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.title2}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default NavBarDemo
