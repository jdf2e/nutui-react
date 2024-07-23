import './demo.scss'
import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const SignatureDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title: '修改颜色和签字粗细',
    },
    'zh-TW': {
      basic: '基础用法',
      title: '修改顏色和簽字粗細',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo demo-signature demo-taro-signature ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        }`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2"> {translated.title}</View>
        <Demo2 />
      </ScrollView>
    </>
  )
}

export default SignatureDemo
