import React from 'react'
import Taro from '@tarojs/taro'

import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const SideNavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text1: '基础用法',
      text2: '导航嵌套（建议最多三层）',
    },
    'zh-TW': {
      text1: '基礎用法',
      text2: '導航嵌套（建議最多三層）',
    },
    'en-US': {
      text1: 'Basic Usage',
      text2: 'Navigation Nesting (Up To Three Levels Recommended)',
    },
    'id-ID': {
      text1: 'Penggunaan dasar',
      text2: 'Sarang navigasi (disarankan hingga tiga tingkat)',
    },
  })
  const { text1, text2 } = translated

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{text1}</h2>
        <Demo1 />
        <h2>{text2}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default SideNavBarDemo
