import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const LayoutDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础布局',
      title2: '分栏间隔',
      title3: 'Flex布局',
    },
    'zh-TW': {
      title1: '基礎佈局',
      title2: '分欄間隔',
      title3: 'Flex佈局',
    },
    'en-US': {
      title1: 'Basic layout',
      title2: 'Column interval',
      title3: 'Flex layout',
    },
    'id-ID': {
      title1: 'Tata letak dasar',
      title2: 'interval kolom',
      title3: 'Tata letak fleksibel',
    },
  })
  return (
    <>
      <div className="demo full">
        <h2>{translated.title1}</h2>
        <div className="layout-box-item">
          <Demo1 />
        </div>
        <h2>{translated.title2}</h2>
        <div className="layout-box-item">
          <Demo2 />
        </div>
        <h2>{translated.title3}</h2>
        <div className="layout-box-item">
          <Demo3 />
        </div>
      </div>
    </>
  )
}

export default LayoutDemo
