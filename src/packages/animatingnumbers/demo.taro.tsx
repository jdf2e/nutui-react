import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const AnimatingNumbersDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: 'AnimatingNumbers.CountUp - 基础用法',
      custom:
        'AnimatingNumbers.CountUp - 自定义样式，动态修改数据（需要指定最大位数）',
    },
    'zh-TW': {
      basic: 'AnimatingNumbers.CountUp - 基础用法',
      custom:
        'AnimatingNumbers.CountUp - 自定義樣式，動態修改數據（需要指定最大位數）',
    },
    'en-US': {
      basic: 'AnimatingNumbers.CountUp - Basic Usage',
      custom:
        'AnimatingNumbers.CountUp - Custom styles to dynamically modify data (maximum number of bits required)',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.custom}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default AnimatingNumbersDemo
