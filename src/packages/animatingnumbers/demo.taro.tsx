import React, { useEffect, useState } from 'react'
import { AnimatingNumbers } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  basic: string
  custom: string
}
const AnimatingNumbersDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      custom: '自定义样式，动态修改数据（需要指定最大位数）',
    },
    'zh-TW': {
      basic: '基本用法',
      custom: '自定義樣式，動態修改數據（需要指定最大位數）',
    },
    'en-US': {
      basic: 'Basic Usage',
      custom:
        'Custom styles to dynamically modify data (maximum number of bits required)',
    },
  })
  const [endNumber, setEndNumer] = useState('1570.99')
  useEffect(() => {
    const timer = setInterval(() => {
      setEndNumer(
        `${Math.floor(Math.random() * 999999)}.${Math.floor(
          Math.random() * 89 + 10
        )}`
      )
    }, 30000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>CountUp-{translated.basic}</h2>
        <AnimatingNumbers.CountUp endNumber="678.94" />
        <h2>CountUp-{translated.custom}</h2>
        <AnimatingNumbers.CountUp
          endNumber={endNumber}
          easeSpeed={1.2}
          maxLen={6}
          className="custom-coutup"
        />
      </div>
    </>
  )
}

export default AnimatingNumbersDemo
