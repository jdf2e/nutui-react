import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'

interface T {
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90d': string
}

const InfiniteLoadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90d': 'primary主题',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90d': 'primary主題',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'Custom loading text',
      '1254a90d': 'Primary theme',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['84aa6bce']}</h2>
        <Demo1 />
        <h2>{translated.eb4236fe}</h2>
        <Demo2 />
        <h2>{translated['9ed40460']}</h2>
        <Demo3 />
        <h2>{translated['1254a90d']}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default InfiniteLoadingDemo
