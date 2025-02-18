import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const SideNavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      disabled: '禁用选项',
      matchByValue: '根据value匹配',
      multiTitle: '多个标题',
      setDuration: '设置滚动动画时长',
      padding: '内容区域留白边距',
    },
    'en-US': {
      basic: 'Basic Usage',
      disabled: 'Disabled',
      matchByValue: 'Match By Value',
      multiTitle: 'Multiple Titles',
      setDuration: 'Set Scroll Animation Duration',
      padding: 'Set Content Padding',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.disabled}</h2>
        <Demo2 />
        <h2>{translated.matchByValue}</h2>
        <Demo3 />
        <h2>{translated.multiTitle}</h2>
        <Demo4 />
        <h2>{translated.setDuration}</h2>
        <Demo5 />
        <h2>{translated.padding}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default SideNavBarDemo
