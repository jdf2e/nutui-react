import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const NotifyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      jump: '支持跳转',
      close: '支持关闭',
      customStyle: '自定义样式',
    },
    'zh-TW': {
      basic: '基礎用法',
      jump: '支持跳轉',
      close: '支持關閉',
      customStyle: '自定義樣式',
    },
    'en-US': {
      basic: 'Basic Usage',
      jump: 'Support Jump',
      close: 'Support Close',
      customStyle: 'Custom Style',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.jump}</h2>
        <Demo2 />
        <h2>{translated.close}</h2>
        <Demo3 />
        <h2>{translated.customStyle}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default NotifyDemo
