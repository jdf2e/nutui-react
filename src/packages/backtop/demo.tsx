import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'

const BackTopDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
    },
    'en-US': {
      title: 'Basic Usage',
    },
    'zh-TW': {
      title: '基礎用法',
    },
  })

  return (
    <>
      <div className="demo" style={{ height: '100vh' }} id="target">
        <h2>{translated.title}</h2>
        <Demo1 />
      </div>
    </>
  )
}

export default BackTopDemo
