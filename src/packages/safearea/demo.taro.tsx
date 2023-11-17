import React from 'react'
import Taro from '@tarojs/taro'
import { SafeArea } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

const SafeAreaDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
    },
    'zh-TW': {
      basic: '基礎用法',
    },
    'en-US': {
      basic: 'Basic Usage',
    },
  })

  function generateRandomTextArray(count: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const textArray = []
    for (let j = 0; j < count; j++) {
      const randomLength = Math.floor(Math.random() * 5) + 4 // 随机生成长度在4到8之间的数
      let randomText = ''
      for (let i = 0; i < randomLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        randomText += characters.charAt(randomIndex)
      }
      textArray.push(randomText)
    }
    return textArray
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <div>{generateRandomTextArray(900).join(' ')}</div>
        <SafeArea position="bottom" />
      </div>
    </>
  )
}

export default SafeAreaDemo
