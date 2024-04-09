import React from 'react'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import { useTranslate } from '@/sites/assets/locale'

const ToastDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩',
      toastDuration: '设置展示时长',
      toastWordBreak: '换行截断方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover',
      toastDuration: 'Set Display Duration',
      toastWordBreak: 'Word Break',
    },
  })
  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.toastDuration}</h2>
        <Demo2 />
        <h2>{translated.toastBottom}</h2>
        <Demo3 />
        <h2>{translated.toastTransparent}</h2>
        <Demo4 />
        <h2>{translated.toastWordBreak}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default ToastDemo
