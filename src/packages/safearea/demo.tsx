import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'

const SafeAreaDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
    },
    'zh-TW': {
      basic: '基礎用法',
    },
    'en-US': {
      basic: 'Basic Usage',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
      </div>
    </>
  )
}

export default SafeAreaDemo
