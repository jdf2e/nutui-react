import '@/packages/signature/demo.scss'
import React from 'react'
import Taro from '@tarojs/taro'
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
      <div
        className={`demo demo-signature demo-taro-signature ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        }`}
      >
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2> {translated.title}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default SignatureDemo
