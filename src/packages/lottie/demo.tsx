import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const LoadingDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
    },
    'zh-TW': {
      title1: '基礎用法',
    },
    'en-US': {
      title1: 'Basic Usage',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <Demo2 />
        <h2>{translated.title1}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default LoadingDemo
