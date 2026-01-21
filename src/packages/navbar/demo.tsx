import React from 'react'
import './demo.scss'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '标题位置',
      title2: '多tab切换导航',
      basicARIA: 'ARIA基础用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      title1: '標題位置',
      title2: '多tab切換導航',
      basicARIA: 'ARIA基礎用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Title Align',
      title2: 'Multi-tab Switching Navigation',
      basicARIA: 'ARIA Basic Usage',
    },
  })
  return (
    <>
      <div className="demo navbar-demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.title2}</h2>
        <Demo3 />
        <h2>{translated.basicARIA}</h2>
        <Demo4 />
      </div>
    </>
  )
}

export default NavBarDemo
