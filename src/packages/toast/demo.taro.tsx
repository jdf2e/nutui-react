import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const ToastDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toastFunction: '函数调用',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩',
      toastCustomIcon: '自定义 Icon',
      toastDuration: '设置展示时长',
      toastWordBreak: '换行截断方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      toastFunction: 'Function',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover',
      toastCustomIcon: 'Custom Icon',
      toastDuration: 'Set Display Duration',
      toastWordBreak: 'Word Break',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.toastFunction}</h2>
        <Demo2 />

        <h2>{translated.toastDuration}</h2>
        <Demo3 />
        <h2>{translated.toastCustomIcon}</h2>
        <Demo4 />
        <h2>{translated.toastWordBreak}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default ToastDemo
