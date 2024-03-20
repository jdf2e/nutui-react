import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import '@/packages/infiniteloading/demo.scss'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'

interface T {
  '84aa6bce': string
}

const InfiniteLoadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础演示',
    },
    'zh-TW': {
      '84aa6bce': '基礎演示',
    },
    'en-US': {
      '84aa6bce': 'Basic demo',
    },
  })

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-infinite`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Demo1 />
      </div>
    </>
  )
}

export default InfiniteLoadingDemo
