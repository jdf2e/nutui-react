import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'

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
      </div>
    </>
  )
}

export default LoadingDemo
